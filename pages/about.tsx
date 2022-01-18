// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/about';
// =============== translation ================
import { TFunction, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import { DevToolLink, DevTools } from 'components/DevTool';
import { Skew } from 'animations';
import myDevTools from 'utils/devToolsLogos';
// ============================================

const AboutPage: NextPage = () => {
	const { t } = useTranslation('about');

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<MyStory tFn={t} />
				<S.AboutParagraph>
					<Skew>
						<section className="title">
							<h3>{t('like to use')}:</h3>
						</section>
						<S.DevToolsContainer>
							{myDevTools.titlesAndIcons.map((tool) => (
								<DevTools
									key={tool.title}
									title={t(tool.title)}
									devTools={tool.devTools}
								/>
							))}
						</S.DevToolsContainer>
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

const MyStory: React.FC<{ tFn: TFunction }> = ({ tFn: t }) => {
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
		<S.AboutParagraph>
			<Skew>
				<section className="title">
					<h3>{t('hi')}</h3>
				</section>
				<p>
					{t('storyStart')}

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
	);
};
