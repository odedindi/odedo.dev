/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import {
	Container,
	TypographyStylesProvider,
	Group,
	Space,
} from '@mantine/core';

import Layout from 'src/components/Layout';
// import { NavMenu } from 'src/components/NavMenu';
import ProjectCard from 'src/components/ProjectCard';
import dynamic from 'next/dynamic';
import { useMe } from 'src/hooks';
import Link from 'next/link';
import ContactMe from 'src/components/ContactMe';

const Tooltip = dynamic(() => import('src/components/Tooltip'), { ssr: false });

const Home: NextPage = () => {
	const me = useMe().data?.me;

	return (
		<Layout
			pageTitle={me?.tagline}
			headerProps={{
				withAvatar: true,
				subtitle: 'thanks for looking me up.',
				title: 'Hey there you tech-savvy wanderer!',
			}}
		>
			{/* <NavMenu /> */}

			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TypographyStylesProvider>
					<Space h="xl" />
					<p>
						I'm Oded, a software developer with a background in agriculture.
					</p>
					<Space h="md" />
					<p>
						I'll fill this out more one day, probably add more projects or
						detailed or insights into this portfolio, for now, here are 2 nice
						ones from my past.
					</p>
					<Space h="md" />
					<p>
						I had a defining moment with{' '}
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
						, as it steered me towards embracing programming as a career path.
						Sadly it didn't take off, but it was a great ride. Also the server
						is no longer running, so the demo part is not working, sorry about
						that. maybe I'll fix it one day.
					</p>
					<p>
						Another nice thing I've built is{' '}
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
						. It's a neat little guide, sort of like a little booklet of our
						solar system. Just wanted to play around with Three.js and we I like
						outer space, It's got this gallery showing the Sun and all the
						planets, and a 3D model demonstrating how the planets revolve around
						the Sun with the ability to adjust the size of the sun and the
						planets to grasp the sheer size of the solar system, a glimpse into
						the dance of our cosmic neighbors. Just a little side projet.
					</p>
					<Space h="xl" />
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
			<Space h={'xl'} />
			<ContactMe />
		</Layout>
	);
};

export default Home;
