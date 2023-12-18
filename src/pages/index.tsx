/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import {
	Container,
	TypographyStylesProvider,
	Group,
	Space,
} from '@mantine/core';

import Layout from 'src/components/Layout';
import { NavMenu } from 'src/components/NavMenu';
import ProjectCard from 'src/components/ProjectCard';
import dynamic from 'next/dynamic';
import dayjs from 'dayjs';
import { useMe } from 'src/hooks';
import Link from 'next/link';

const Tooltip = dynamic(() => import('src/components/Tooltip'), { ssr: false });
const yearDiff = (year: string) => dayjs().diff(year, 'year');
const myAge = yearDiff('1986');
const inSwitzerland = yearDiff('2018');

const Home: NextPage = () => {
	const me = useMe().data?.me;

	return (
		<Layout
			pageTitle={me?.tagline}
			headerProps={{
				withAvatar: true,
				subtitle: me?.name,
				title: me?.tagline,
			}}
		>
			<NavMenu />

			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TypographyStylesProvider>
					<h3 style={{ textAlign: 'center' }}>
						Hey there you tech-savvy wanderer thanks for looking me up.
					</h3>
					<Space style={{ height: 50 }} />
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
						-year-old coding enthusiast, When I'm not immersed in the world of
						technology, you'll find me happily married and blessed with the
						"joy" of raising my two little legends in the scenic heart of
						Central Switzerland for {inSwitzerland} now.
					</p>
					<p>
						In the backdrop of my life lies a colorful tapestry of experiences.
						My professiional journey started in the world of agroecology, pest
						management, and agricultural development, as the tides of time
						carried me forward, these ventures became the gateway to my journey
						into programming, revealing a new world where I found my calling in
						software and web development.
					</p>
					<Space style={{ height: 25 }} />
					<p>
						I'll fill this out more thoroughly, and add more of projects
						detailed or insights into my portfolio, for now, here are 2 nice
						ones.
					</p>
					<Space style={{ height: 25 }} />
					<p>
					Diving into frontend development, particularly in React, I had a defining moment with {" "}
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
						</Tooltip>
						, it wasn't just a project, it was an epiphany that programming was my
						calling. it ignited a passion for frontend development, particularly
						in React. This realization steered me towards embracing programming
						not just as a skill but as a career path, where every line of code
						became a brushstroke in my canvas of the matrix.
					</p>
					<p>
					On the subject of coding adventures, let me share something
						cosmic with you{' '}
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
					<Space style={{ height: 50 }} />
					<Group position="apart" style={{ gap: '24px' }}>
						<ProjectCard
							title="LandPro"
							description="The power of A.I. and satellite at your finger-tips, allows you to estimate how much carbon there is in cropland’s soil and vegetation."
							imageProps={{
								src: 'https://land-pro.vercel.app/favicon.png',
								alt: 'langpro logo',
							}}
							linkProps={{ href: 'https://land-pro.vercel.app/' }}
						/>
						<ProjectCard
							title="Solr"
							description="Digital guide showcasing our solar system, merging code and cosmic beauty."
							imageProps={{
								src: 'https://solr.vercel.app/icons/apple-touch-icon.png',
								alt: 'solr',
							}}
							linkProps={{ href: 'https://solr.vercel.app/' }}
						/>
					</Group>
				</TypographyStylesProvider>
			</Container>
		</Layout>
	);
};

export default Home;
