import * as React from 'react';
import { usePrefersReducedMotion } from './index';

const useParallax = (multiplier: number, clamp = true) => {
	const [offset, setOffset] = React.useState(0);
	const prefersReducedMotion = usePrefersReducedMotion();

	React.useEffect(() => {
		let ticking = false;
		let animationFrame: number | null = null;

		const animate = () => {
			const { innerHeight } = window;
			const offsetValue = Math.max(0, window.scrollY) * multiplier;
			const clampedOffsetValue = Math.max(
				-innerHeight,
				Math.min(innerHeight, offsetValue),
			);
			setOffset(clamp ? clampedOffsetValue : offsetValue);
			ticking = false;
		};

		const handleScroll = () => {
			if (!ticking) {
				ticking = true;
				animationFrame = requestAnimationFrame(animate);
			}
		};

		if (!prefersReducedMotion) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			cancelAnimationFrame(animationFrame as number);
		};
	}, [clamp, multiplier, prefersReducedMotion]);

	return offset;
};

export default useParallax;
