// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// =================== hooks ==================
import { useDevToolsLogos } from 'hooks/useDevToolsLogos';
// ================== styles ==================
import * as S from 'styles/pages/about';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import CreateAnimation from 'components/CreateAnimation';
// ============================================

type DevToolsProps = {
	devTools: DevTool[];
	title: string;
};
const AboutPage: NextPage = () => {
	const {
		logosToBeUsedAsImageSource,
		langLogos,
		frontLogos,
		backLogos,
		databaseLogos,
		designLogos,
		versionControlLogos,
		ideLogos,
		packagesManagerLogos,
	} = useDevToolsLogos();
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

	type DevToolLinkType = {
		content: JSX.Element | any | string;
		href: string;
		noStyle?: boolean;
		title?: string;
	};

	const DevToolLink = ({ content, href, noStyle, title }: DevToolLinkType) => (
		<Link href={href} passHref>
			<a
				target="_blank"
				rel="noopener noreferrer"
				title={title}
				style={(noStyle as boolean) ? {} : { borderBottom: 'none' }}>
				{content}
			</a>
		</Link>
	);

	const DevTools = ({ devTools, title }: DevToolsProps) => (
		<S.AboutParagraph>
			<h5>{title}:</h5>
			<S.DevToolsIconsWrapper>
				{devTools.map((devTool) => {
					if (logosToBeUsedAsImageSource.includes(devTool.id)) {
						return (
							<DevToolLink
								key={devTool.id}
								href={devTool.link}
								content={
									<Image
										src={devTool.logo}
										alt={`${devTool.id} logo`}
										width="70"
										height="100"
									/>
								}
							/>
						);
					}
					return (
						<DevToolLink
							key={devTool.id}
							href={devTool.link}
							content={devTool.logo}
						/>
					);
				})}
			</S.DevToolsIconsWrapper>
		</S.AboutParagraph>
	);

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<S.AboutParagraph>
					<section className="title">
						<h3>{t('hi')}</h3>
						<h4>{t('developer')}</h4>
					</section>
					<p>{t('storyStart')}</p>
					<p>
						{t('storyCurrent.intro')}

						<DevToolLink
							content={t('storyCurrent.people')}
							href={links.hacktheclimate.ourTeam}
							title="The Team"
						/>
						{t('storyCurrent.on a')}

						<DevToolLink
							content={t('storyCurrent.hackathon')}
							href={links.hacktheclimate.website}
							title="Hack the climate"
						/>
						{t('storyCurrent.using')}

						<DevToolLink
							content={t('storyCurrent.satellite')}
							href={links.sentinelII}
							title="Sentinel-2"
						/>

						{t('storyCurrent.for')}

						<DevToolLink
							content={t('landpro')}
							href={links.landPro}
							title="LandPro.ch"
						/>
					</p>
					<p>{t('aboutMe.first')}</p>
					<p>{t('aboutMe.second')}</p>
					<p>{t('aboutMe.third')}</p>
				</S.AboutParagraph>

				<S.AboutParagraph>
					<section className="title">
						<h3>{t('like to use')}:</h3>
					</section>
					<DevTools title={t('languages')} devTools={langLogos} />
					<DevTools title={t('frontend')} devTools={frontLogos} />
					<DevTools title={t('backend')} devTools={backLogos} />
					<DevTools title={t('databases')} devTools={databaseLogos} />
					<DevTools title={t('design')} devTools={designLogos} />
					<DevTools
						title={t('versionControl')}
						devTools={versionControlLogos}
					/>
					<DevTools title={t('ides')} devTools={ideLogos} />
					<DevTools
						title={t('packageManagers')}
						devTools={packagesManagerLogos}
					/>
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
