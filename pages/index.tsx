// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
// ============================================

import {
	Intro,
	SectionWithDevTools,
	SectionWithImage,
} from 'components/Sections';
import astronaut from 'assets/lottie/astronaut.json';
import ProjectsCarousel from 'components/ProjectsCarousel';

const Home: NextPage = () => {
	const { t } = useTranslation('common');

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
			{process.env.NODE_ENV !== 'production' && <ProjectsCarousel />}
			<SectionWithImage
				texts={sections.texts.map((text) => t(text))}
				title={t(`${sections.title}`)}
				sectionIntro={t(`${sections.sectionIntro}`)}
				lottieAnimation={sections.lottie}
			/>

			<SectionWithDevTools />
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
