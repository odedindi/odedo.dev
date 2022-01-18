import * as React from 'react';
import * as S from './style';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Lottie from 'react-lottie';
import lottieAnim from './lottie/astronaut.json';

type ParallaxImageProps = {
	animationTrigger: gsap.DOMTarget;
	toLeft?: boolean;
	lottieAnimation: Object;
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({
	animationTrigger: trigger,
	toLeft,
}) => {
	const wrapper = React.useRef<HTMLDivElement>(undefined!);

	const parallaxEffect = React.useMemo(
		() => ({
			trigger,
			scrub: true,
			start: 'top bottom',
		}),
		[trigger],
	);
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const parallaxAnimation = gsap.fromTo(
			wrapper.current,
			{ y: '-30vh' },
			{ y: '30vh', scrollTrigger: parallaxEffect, ease: 'none' },
		);
		return () => {
			parallaxAnimation.kill();
		};
	}, [parallaxEffect]);

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieAnim,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<S.ImageWrapper ref={wrapper} toLeft={toLeft}>
			<Lottie options={lottieOptions} height="100vh" width="100%" />
		</S.ImageWrapper>
	);
};

export default React.memo(ParallaxImage);
