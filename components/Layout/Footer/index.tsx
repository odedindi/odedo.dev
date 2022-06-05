// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import gsap from 'gsap';

// =============== translation ================
// import { useTranslation } from 'next-i18next';
// ================ components ================
import { Box, Text, Title } from '@mantine/core';
import GithubStats from './GithubStats';
// ============================================

const Footer = () => {
	// const { t } = useTranslation('footer');

	const boxRef = React.useRef<HTMLDivElement>(undefined!);

	React.useEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, duration: 1 },
		);
	}, []);

	return (
		<Box
			ref={boxRef}
			sx={(theme) => ({
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',

				height: '15vh',

				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[0]
						: theme.colors.gray[8],
			})}>
			<GithubStats />
			<Title
				sx={(theme) => ({
					color:
						theme.colorScheme === 'dark'
							? theme.colors.cyan[9]
							: theme.colors.teal[5],
					fontSize: theme.fontSizes.xl,
				})}>
				&copy; {new Date().getFullYear()} ODEDINDI
			</Title>
		</Box>
	);
};

export default Footer;
