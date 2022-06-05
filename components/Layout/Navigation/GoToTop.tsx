import * as React from 'react';

import { blueTealGradient } from 'styles/gradients';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ArrowUpIcon } from '@modulz/radix-icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, useMantineTheme } from '@mantine/core';

const GoToTop = () => {
	const [scroll] = useWindowScroll();
	const { dir } = useMantineTheme();

	React.useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin);
	});

	const buttonRef = React.useRef<HTMLButtonElement>(undefined!);

	const handleGoToTop = () =>
		gsap.to(window, { scrollTo: { y: 0 }, duration: 0.725, ease: 'bounce' });

	const handleMouseEnter = () =>
		gsap.to(buttonRef.current, {
			x: '-12.5%',
			scaleX: 1.125,
			duration: 0.125,
			ease: 'bounce',
		});

	const handleMouseLeave = () =>
		gsap.to(buttonRef.current, {
			x: 0,
			scaleX: 1,
			duration: 0.4,
			ease: 'elastic',
		});

	const buttonPosition = {
		bottom: 20,
		right: dir === 'ltr' ? 20 : undefined,
		left: dir === 'rtl' ? 20 : undefined,
	};
	return (
		<Affix position={buttonPosition}>
			<Transition transition="slide-up" mounted={scroll.y > 30}>
				{(transitionStyles) => (
					<Button
						ref={buttonRef}
						compact
						variant="gradient"
						gradient={blueTealGradient.withRtl(dir)}
						style={transitionStyles}
						onClick={handleGoToTop}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<ArrowUpIcon />
					</Button>
				)}
			</Transition>
		</Affix>
	);
};

export default GoToTop;
