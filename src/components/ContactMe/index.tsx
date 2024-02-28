import { Container, Text } from '@mantine/core';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import ContactMeButtons from './ContactMeButtons';

const ContactMe: FC = () => {
	const contactMeRef = useRef<HTMLDivElement>(undefined!);
	useEffect(() => {
		const CSSPlugin = require('gsap/CSSPlugin');
		gsap.registerPlugin(CSSPlugin);

		const contactMeAnimation = gsap.fromTo(
			contactMeRef.current,
			{
				x: 300,
				opacity: 0,
				ease: 'power4',
				duration: 2.5,
			},
			{ x: 0, opacity: 1, duration: 1 },
		);
		return () => {
			contactMeAnimation.kill();
		};
	}, []);
	return (
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
		</Container>
	);
};
export default ContactMe;
