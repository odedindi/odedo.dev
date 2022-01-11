import * as React from 'react';
import gsap, { Power2 } from 'gsap';

/*
    A scrolling effect hook the should recive a direction 
    (in case non is given 'down' is the default)


    returns: 
    1. An animation ref that should be given to 
        the component that we want to add the effect to
        cause of typing best if that component is a div.
    2. toggle function.
    3. A React component that should be used a wrapper of 
        the component that we want to add the effect to.

*/
type Direction = 'down' | 'up' | 'left' | 'right';
type ScrollEffectOptions = {
	direction?: Direction;
	startAsOpen?: boolean;
};

const useScrollEffect = (customOptions: Partial<ScrollEffectOptions>) => {
	console.log('scrollEffect');
	const { direction, startAsOpen } = customOptions;
	const [timeline] = React.useState<gsap.core.Timeline>(
		gsap.timeline({
			paused: true,
		}),
	);
	const animationRef = React.useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = React.useState(startAsOpen ?? true);

	const toggle = React.useCallback(() => {
		if (isOpen) timeline.restart();
		if (!isOpen) timeline.reverse();
		setIsOpen(!isOpen);
	}, [isOpen, timeline]);

	const scroll = React.useMemo(
		() => ({
			down: {
				open: { height: '0.25rem', ease: Power2.easeIn },
				close: { height: '0rem', display: 'none', ease: Power2.easeOut },
			},
			up: {
				open: { height: '0rem', ease: Power2.easeOut },
				close: { height: '0.25rem' },
			},
			left: {
				open: { width: '0.25rem', ease: Power2.easeOut },
				close: { width: '0rem' },
			},
			right: {
				open: { width: '0rem', ease: Power2.easeOut },
				close: { width: '0.25rem' },
			},
		}),
		[],
	);
	React.useLayoutEffect(() => {
		if (animationRef.current) {
			timeline
				.to(animationRef.current, scroll[direction ? direction : 'down'].open)
				.duration(0.2)
				.to(animationRef.current, scroll[direction ? direction : 'down'].close)
				.duration(0.2);
		}
	}, [scroll, direction, timeline]);

	const ScrollEffectWrapper: React.FC = ({ children }) => (
		<div ref={animationRef}>{children}</div>
	);

	return { animationRef, ScrollEffectWrapper, toggle };
};

export default useScrollEffect;
