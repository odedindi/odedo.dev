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
	SectionWithMemes,
} from 'components/Sections';
import astronaut from 'assets/lottie/astronaut.json';
import ProjectsCarousel from 'components/ProjectsCarousel';

const Home: NextPage = () => {
	const isDev = process.env.NODE_ENV !== 'production';
	const { t } = useTranslation('common');

	const sections = {
		id: 'about.firstPart',
		sectionIntro: 'about.firstPart.intro',
		title: 'about.firstPart.title',
		texts: 'about.firstPart.texts',
		lottie: astronaut,
	};

	return (
		<PageLayout title={t('title')}>
			<Intro />
			{/* {isDev && <SectionWithMemes />} */}
			{isDev && <ProjectsCarousel />}
			<SectionWithImage
				texts={t(sections.texts, { returnObjects: true })}
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
