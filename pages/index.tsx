// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import { DevToolLink, DevTools } from 'components/DevTool';
import { Skew } from 'animations';
import myDevTools from 'utils/devToolsLogos';
import PageLayout from 'components/Layout';
// ============================================

import Intro from 'components/Intro';
import Section from 'components/Section';
import SectionWithDevTools from 'components/Section/devTools';
import astronaut from 'assets/lottie/astronaut.json';

const Home: NextPage = () => {
	const { t } = useTranslation('common');

	const links = {
		hacktheclimate: {
			ourTeam: 'https://climatehackathon.github.io/about/',
			website: 'https://hacktheclimate.devpost.com/',
		},
		sentinelII:
			'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2',
		landPro: 'https://landpro.ch',
	};

	const sections = {
		id: 'about.firstPart',
		sectionIntro: 'about.firstPart.intro',
		title: 'about.firstPart.title',
		texts: ['about.firstPart.texts.0', 'about.firstPart.texts.1'],
		lottie: astronaut,
	};

	return (
		<PageLayout title={t('title')}>
			<Intro />
			<Section
				texts={sections.texts.map((text) => t(text))}
				title={t(`${sections.title}`)}
				sectionIntro={t(`${sections.sectionIntro}`)}
				lottieAnimation={sections.lottie}
			/>

			<SectionWithDevTools title="" texts={[]} />
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'common',
			'footer',
		])),
	},
});

export default Home;
