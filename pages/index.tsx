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
	// SectionWithMemes,
} from 'components/Sections';
import astronaut from 'assets/lottie/astronaut.json';
import ProjectsCarousel from 'components/ProjectsCarousel';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import * as M from '@mantine/core';
import Button from 'components/Button';

const ContactMeButtons = React.forwardRef<HTMLDivElement>((_, ref) => (
	<M.Container
		// sx={(theme) => ({
		// 	backgroundColor:
		// 		theme.colorScheme === 'dark'
		// 			? theme.colors.dark[4]
		// 			: theme.colors.dark[0],
		// })}
		ref={ref}>
		<Button id="socialMediaButtons" type="ContactMe" />
	</M.Container>
));
ContactMeButtons.displayName = 'ContactButtonsWrapper';

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

	const contactMe = React.useRef<HTMLDivElement>(undefined!);

	const scrollEffect = React.useCallback(
		(trigger: gsap.DOMTarget) => ({
			trigger,
			scrub: true,
			start: 'top bottom',
		}),
		[],
	);

	React.useEffect(() => {
		const CSSPlugin = require('gsap/CSSPlugin');
		gsap.registerPlugin(CSSPlugin, ScrollTrigger);

		const contactMeAnimation = gsap.from(contactMe.current, {
			x: 300,
			opacity: 0,
			ease: 'power4',
			duration: 2.5,
		});
		return () => {
			contactMeAnimation.kill();
		};
	}, [scrollEffect]);

	return (
		<PageLayout title={t('title')}>
			<M.Title sx={() => ({ textTransform: 'uppercase' })}>
				Oded Winberger
			</M.Title>
			<M.Title>Full Stack Developer</M.Title>
			<M.Text>{t('intro.hey')}</M.Text>
			<M.Text>{t('intro.thanks')}</M.Text>
			<M.Text underline pb={25}>
				{t('intro.contact')}
			</M.Text>
			<ContactMeButtons ref={contactMe} />

			{/* <Intro /> */}
			{/* {isDev && <ProjectsCarousel />} */}
			{/* <SectionWithImage
				texts={t(sections.texts, { returnObjects: true })}
				title={t(`${sections.title}`)}
				sectionIntro={t(`${sections.sectionIntro}`)}
				lottieAnimation={sections.lottie}
			/> */}

			{/* <SectionWithDevTools /> */}
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
