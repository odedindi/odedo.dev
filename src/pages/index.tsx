import type { NextPage } from 'next';
import { Container, Text, Divider, Grid, Space } from '@mantine/core';

import Layout from 'src/components/Layout';
import React from 'react';
import ContactMeButtons from 'src/components/ContactMe';
import gsap from 'gsap';
import CVLink from 'src/components/CVLink';
import Objective from 'src/components/CV/Objective';
import Sidebar from 'src/components/Layout/Sidebar';
import Positions from 'src/components/CV/Positions';
import Education from 'src/components/CV/Education';

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

	return (
		<Layout pageTitle="Oded Winberger">
			<CVLink />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Text>
					Thank you very much for taking your time and checking up on me.
				</Text>
			</Container>
			<>
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
			<Space h={'xl'} />
			<Divider my={15} size={5} />

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
