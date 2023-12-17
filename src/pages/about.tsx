/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import {
	Container,
	Text,
	Space,
	TypographyStylesProvider,
} from '@mantine/core';

import Layout from 'src/components/Layout';
import React, { FC } from 'react';
import ContactMeButtons from 'src/components/ContactMe';
import gsap from 'gsap';
import { NavLinks } from 'src/components/NavLinks';

import dayjs from 'dayjs';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useMe } from 'src/hooks';

const Tooltip = dynamic(() => import('src/components/Tooltip'), { ssr: false });
const yearDiff = (year: string) => dayjs().diff(year, 'year');

const links = [
	{ href: '/', label: 'Go Back Home' },
	{ href: '/cv', label: 'Checkout my CV' },
];

const AboutPage: NextPage = () => {
	const me = useMe().data?.me;

	const myAge = yearDiff('1986');
	const inSwitzerland = yearDiff('2018');

	return (
		<Layout
			pageTitle="About me"
			headerProps={{
				withAvatar: true,
				subtitle: me?.name,
			}}
		>
			<NavLinks links={links} />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TypographyStylesProvider>
					<p>
						I'm a{' '}
						<Tooltip
							content={
								<img
									src="https://img.buzzfeed.com/buzzfeed-static/static/2021-11/1/16/asset/aa14aea4ff17/anigif_sub-buzz-415-1635782415-15.gif"
									alt="i'm old"
									style={{ borderRadius: '24px' }}
								/>
							}
						>
							{myAge}
						</Tooltip>
						-year-old coding enthusiast, happily married and blessed with the
						"joy" of raising two little legends in the scenic heart of Central
						Switzerland for {inSwitzerland} now.
					</p>
					<p>
						In the backdrop of my life lies a colorful tapestry of experiences.
						My professiional journey started in the world of agroecology, pest
						management, and agricultural development, as the tides of time
						carried me forward, these ventures became the gateway to my journey
						into programming, revealing a new world where I found my calling in
						software and web development.
					</p>
					<p>
						<Tooltip
							content={
								<img
									src="https://land-pro.vercel.app/_next/image?url=%2Fassets%2Flogos%2Flogo.png&w=64&q=75"
									alt="landpro logo"
								/>
							}
						>
							<Link
								href="https://land-pro.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LandPro
							</Link>
						</Tooltip>{' '}
						wasn't just a project; it was an epiphany that programming was my
						calling. it ignited a passion for frontend development, particularly
						in React. This realization steered me towards embracing programming
						not just as a skill but as a career path, where every line of code
						became a brushstroke in my canvas of the matrix.
					</p>
					<p>
						while we're talking about coding adventures, let me share something
						cosmic with you—
						<Tooltip
							content={
								<img
									src="https://solr.vercel.app/icons/apple-touch-icon.png"
									alt="solr"
									width="75px"
								/>
							}
						>
							<Link
								href="https://solr.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Solr
							</Link>
						</Tooltip>
						. It's a neat little digital guide I put together with a colleague,
						sort of like a dictionary, but for our solar system. It's got this
						cool image gallery showing off the Sun and all the planets, and a
						simple 3D model demonstrating how these planets revolve around the
						Sun, giving you a glimpse into the dance of our cosmic neighbors.
						Just a little side project that merges my coding passion with the
						beauty of space.
					</p>
				</TypographyStylesProvider>
			</Container>
			<Space h={'xl'} />
			<ContactLinks />
		</Layout>
	);
};

export default AboutPage;

const ContactLinks: FC = () => {
	const contactMeRef = React.useRef<HTMLDivElement>(undefined!);
	React.useEffect(() => {
		const CSSPlugin = require('gsap/CSSPlugin');
		gsap.registerPlugin(CSSPlugin);

		const contactMeAnimation = gsap.fromTo(
			contactMeRef.current,
			{
				x: 300,
				opacity: 0,
				ease: 'power4',
				duration: 2.5,
			},
			{ x: 0, opacity: 1, duration: 1 },
		);
		return () => {
			contactMeAnimation.kill();
		};
	}, []);
	return (
		<Container
			ref={contactMeRef}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				paddingTop: 10,
			}}
		>
			<ContactMeButtons />
			<Text underline sx={{ paddingTop: 5 }}>
				Don&apos;t hesitate to contact me.
			</Text>
		</Container>
	);
};
