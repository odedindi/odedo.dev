import type { NextPage } from 'next';
import { Container, Divider, Grid, Space } from '@mantine/core';
import Objective from 'src/components/CV/Objective';
import Positions from 'src/components/CV/Positions';

import Sidebar from 'src/components/Layout/Sidebar';
import Education from 'src/components/CV/Education';

import Layout from 'src/components/Layout';

const Home: NextPage = () => {
	return (
		<Layout pageTitle="Oded Winberger CV">
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
