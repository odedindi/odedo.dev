import type { NextPage } from 'next';
import { Container, Divider, Grid, Space } from '@mantine/core';
import Objective from 'src/components/CV/Objective';
import Positions from 'src/components/CV/Positions';

import Sidebar from 'src/components/Layout/Sidebar';
import Education from 'src/components/CV/Education';

import Layout from 'src/components/Layout';
import { NavLinks } from 'src/components/NavLink';
import { useMe } from 'src/hooks';

const links = [
	{ href: '/', label: 'Go Back Home' },
	{ href: '/about', label: 'About me' },
	{ href: '/assets/cv_oded_winberger.pdf', label: 'Download my CV' },
];
const Home: NextPage = () => {
	const me = useMe().data?.me;
	return (
		<Layout
			pageTitle="Oded Winberger CV"
			headerProps={{
				withAvatar: true,
				title: 'Fullstack Developer',
				subtitle: me?.name,
			}}
		>
			<NavLinks links={links} />
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
		</Layout>
	);
};

export default Home;
