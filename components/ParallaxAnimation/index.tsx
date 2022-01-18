import * as React from 'react';
import * as S from './style';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type ParallaxImageProps = {
	animationTrigger: gsap.DOMTarget;
	toLeft?: boolean;
	lottieAnimation: Object;
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({
	animationTrigger: trigger,
	lottieAnimation,
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
			{ y: '-40vh' },
			{ y: '40vh', scrollTrigger: parallaxEffect, ease: 'none' },
		);
		return () => {
			parallaxAnimation.kill();
		};
	}, [parallaxEffect]);

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: lottieAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<S.ImageWrapper ref={wrapper} toLeft={toLeft}>
			<S.Animation options={lottieOptions} height="100vh" />
		</S.ImageWrapper>
	);
};

export default React.memo(ParallaxImage);
