// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// =================== hooks ==================
import { useDevToolsLogos } from 'hooks';
// ================== styles ==================
import * as S from 'styles/pages/about';

// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import { DevToolLink, DevTools } from 'components/DevTool';
import { Skew } from 'animations';
// import CreateAnimation from 'components/CreateAnimation';
// ============================================

const AboutPage: NextPage = () => {
	const { devToolsTitlesAndIcons } = useDevToolsLogos();
	const { t } = useTranslation('about');

	const links = {
		hacktheclimate: {
			ourTeam: 'https://climatehackathon.github.io/about/',
			website: 'https://hacktheclimate.devpost.com/',
		},
		sentinelII:
			'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2',
		landPro: 'https://landpro.ch',
	};

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<S.AboutParagraph>
					<Skew>
						<section className="title">
							<h3>{t('hi')}</h3>
						</section>
						<p>
							{t('storyStart')}
							{/* </p>
					<p> */}
							{t('storyCurrent.intro')}
							<DevToolLink
								content={t('storyCurrent.people')}
								href={links.hacktheclimate.ourTeam}
								title="The Team"
							/>
							{t('storyCurrent.using')}
							<DevToolLink
								content={t('storyCurrent.satellite')}
								href={links.sentinelII}
								title="Sentinel-2"
							/>
							{t('storyCurrent.for')}
							<DevToolLink
								content={t('storyCurrent.landpro')}
								href={links.landPro}
								title="LandPro.ch"
							/>
						</p>
						<p>
							{t('aboutMe.first')}
							{t('aboutMe.second')}
						</p>
						<p>{t('aboutMe.third')}</p>
					</Skew>
				</S.AboutParagraph>
				<S.AboutParagraph>
					<Skew>
						<section className="title">
							<h3>{t('like to use')}:</h3>
						</section>

						{devToolsTitlesAndIcons.map((tool) => (
							<DevTools
								key={tool.title}
								title={t(tool.title)}
								devTools={tool.devTools}
							/>
						))}
					</Skew>
				</S.AboutParagraph>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'about',
			'footer',
		])),
	},
});

export default AboutPage;
