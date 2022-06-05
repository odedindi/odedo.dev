import * as React from 'react';
// ================== styles ==================
import gsap from 'gsap';
// ================ components ================
import { Box } from '@mantine/core';
// ============================================

const MainContentContainer: React.FC = ({ children }) => {
	const boxRef = React.useRef<HTMLDivElement>(undefined!);

	React.useEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{ autoAlpha: 0 },
			{ autoAlpha: 1, duration: 2 },
		);
	}, []);

	return (
		<Box
			ref={boxRef}
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				textAlign: 'center',
				padding: '7.5rem 3.5rem', //theme.spacing.xl,
				borderRadius: theme.radius.xs,

				fontFamily: ['Noto Sans', 'sans-serif'],
				lineHeight: 1.3,
				overflow: 'hidden',
				fontSmooth: 'always',
				minHeight: '100vh',
			})}>
			{children}
		</Box>
	);
};

export default MainContentContainer;
