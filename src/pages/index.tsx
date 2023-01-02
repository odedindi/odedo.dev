import type { NextPage } from 'next';
import { Container, Text } from '@mantine/core';

import Layout from 'src/components/Layout';
import React from 'react';
import ContactMeButtons from 'src/components/ContactMe';
import gsap from 'gsap';
import CVLink from 'src/components/CVLink';

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
					paddingBottom: 75,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Text>Hey you!</Text>
				<Text>
					Thank you very much for taking your time and checking up on me.
				</Text>
			</Container>
			<Container
				ref={contactMeRef}
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
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
