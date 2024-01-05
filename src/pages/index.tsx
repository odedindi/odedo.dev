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
				subtitle: me?.name,
				title: me?.tagline,
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
					<h3 style={{ textAlign: 'center' }}>
						Hey there you tech-savvy wanderer thanks for looking me up.
					</h3>
					<Space h="xl" />
					<p>
						I'm Oded, a family man{' '}
						<Tooltip
							content={
								<img
									src="https://img.buzzfeed.com/buzzfeed-static/static/2021-11/1/16/asset/aa14aea4ff17/anigif_sub-buzz-415-1635782415-15.gif"
									alt="i'm old"
									style={{ borderRadius: '24px' }}
								/>
							}
						>
							(married + 2)
						</Tooltip>{' '}
						and a software developer with a background tourism, mostly ecological
						and caltural desert tourism and a bit mote of a laid back extreme
						sports like diving and agriculture, focusing on water resources and
						pest management. Balancing family life with a tech career, I bring a
						blend of skills and knowledge to my professional journey.
					</p>
					<Space h="md" />
					<p>
						I'll fill this out more one day, probably add more projects or
						detailed or insights into this portfolio, for now, here are 2 nice
						ones.
					</p>
					<Space h="md" />
					<p>
						Diving into software development, I had a defining moment with{' '}
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
						, it ignited a passion for programming and software development,
						started with Python and later fell in love with Typescript. This
						realization steered me towards embracing programming as a career
						path.
					</p>
					<p>
						On the subject of coding adventures, let me share something cosmic
						with you{' '}
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
						. It's a neat little guide I put together with a colleague, sort of
						like a little encyclopedia, of our solar system. We just wanted to
						play around with Three.js and we both like space, It's got this
						gallery showing the Sun and all the planets, and a 3D model
						demonstrating how the planets revolve around the Sun with the
						acility to adjust the size of the sun and the planets to grasp the
						sheer size of the solar system, giving you a glimpse into the dance
						of our cosmic neighbors. Just a little side projet.
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
