/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import {
	Container,
	TypographyStylesProvider,
	Group,
	Space,
} from '@mantine/core';

import Layout from 'src/components/Layout';
import { NavLinks } from 'src/components/NavLinks';
import ProjectCard from 'src/components/ProjectCard';

const links = [
	{ href: '/about', label: 'About me' },
	{ href: '/cv', label: 'Checkout my CV' },
];

const Home: NextPage = () => {
	return (
		<Layout>
			<NavLinks links={links} />

			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<TypographyStylesProvider>
					<h3 style={{ textAlign: 'center' }}>
						Hey there tech-savvy wanderer thanks for looking me up.
					</h3>
					<p>
						I'll fill this out more thoroughly, and add more of the projects but
						for now, here are 2 nice ones.
					</p>
					<Space style={{ height: 100 }} />
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
							description="Digital guide showcasing planets, Sun, orbits, merging code and cosmic beauty in coding adventures."
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
