import type { NextPage } from 'next';
import {
	AppShell,
	Accordion,
	Container,
	Divider,
	Grid,
	Space,
} from '@mantine/core';
import Objective from 'src/components/CV/Objective';
import Positions from 'src/components/CV/Positions';
import { Header } from 'src/components/Layout/Header';
import Sidebar from 'src/components/Layout/Sidebar';
import Education from 'src/components/CV/Education';
import OtherExperiences from 'src/components/CV/OtherExperiences';
import { Footer } from 'src/components/Layout/Footer';

const Home: NextPage = () => {
	return (
		<AppShell padding="md" header={<Header />}>
			<Divider my={15} size={5} />
			<Objective />
			<Divider my={15} />
			<Grid grow>
				{/* <Grid.Col span={12}></Grid.Col>
				<Grid.Col sm={12} md={5}>
					<Sidebar />
				</Grid.Col>
				<Grid.Col sm={12} md={7}>
					<Container padding={15}>
						<Accordion multiple initialItem={0}>
							<Accordion.Item label="Experience">
								<Positions />
							</Accordion.Item>
							<Accordion.Item label="Education">
								<Education />
							</Accordion.Item>
						</Accordion>
					</Container>
				</Grid.Col> */}
				<Container padding={15}>
					<Positions />
					<Space h={'md'} />
					<Education />
				</Container>
			</Grid>
			<Footer />
		</AppShell>
	);
};

export default Home;
