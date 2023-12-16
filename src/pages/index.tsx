/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import {
	Container,
	Text,
	Divider,
	Grid,
	Space,
	TypographyStylesProvider,
} from '@mantine/core';

import Layout from 'src/components/Layout';
import React from 'react';
import ContactMeButtons from 'src/components/ContactMe';
import gsap from 'gsap';
import CVLink from 'src/components/CVLink';
import Objective from 'src/components/CV/Objective';
import Sidebar from 'src/components/Layout/Sidebar';
import Positions from 'src/components/CV/Positions';
import Education from 'src/components/CV/Education';
import dayjs from 'dayjs';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Tooltip = dynamic(() => import('src/components/Tooltip'), { ssr: false });
const yearDiff = (year: string) => dayjs().diff(year, 'year');

const Home: NextPage = () => {
	const contactMeRef = React.useRef<HTMLDivElement>(undefined!);
	React.useEffect(() => {
		const CSSPlugin = require('gsap/CSSPlugin');
		gsap.registerPlugin(CSSPlugin);

		const contactMeAnimation = gsap.from(contactMeRef.current, {
			x: 300,
			opacity: 0,
			ease: 'power4',
			duration: 2.5,
		});
		return () => {
			contactMeAnimation.kill();
		};
	}, []);
	const myAge = yearDiff('1986');
	const inSwitzerland = yearDiff('2018');
	return (
		<Layout>
			<CVLink href="/cv" label="Checkout my CV here" />
			<CVLink
				href="/assets/cv_oded_winberger.pdf"
				label="Download my CV here"
				top={40}
			/>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TypographyStylesProvider>
					<h3>Hey there, tech-savvy wanderer thanks for looking me up.</h3>
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
						Project like{' '}
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
						calling. They ignited a passion for frontend development,
						particularly in React. This realization steered me towards embracing
						programming not just as a skill but as a career path, where every
						line of code became a brushstroke in my canvas of the matrix.
					</p>
					<p>
						while we're talking about coding adventures, let me share something
						cosmic with you—
						<Tooltip
							content={
								<img
									src="https://solr.vercel.app/icons/apple-touch-icon.png" //"https://solr.vercel.app/icons/icon-512x512.png"
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
			{/* <>
				<Divider my={15} size={5} />
				<Objective />
				<Divider my={15} />
				<Grid grow>
					<Grid.Col sm={12} md={5}>
						<Sidebar />
					</Grid.Col>

					<Container padding={15}>
						<Positions />
						<Space h={'md'} />
						<Education />
					</Container>
				</Grid>
			</>
		*/}
			<Space h={'xl'} />

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
		</Layout>
	);
};

export default Home;
