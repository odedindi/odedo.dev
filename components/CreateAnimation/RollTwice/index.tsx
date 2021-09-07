// =============== React & Next ===============
import * as React from 'react';
// ================ Animation =================
import gsap from 'gsap';
// ============================================

const RollTwice: React.FC = ({ children }) => {
	const animationRef = React.useRef<HTMLDivElement>(null);
	const isAnimationRefMounted = React.useRef(false);

	const [animationCounter, setAnimationCounter] = React.useState(0);

	React.useEffect(() => {
		/* 
			make sure the component's state is getting updated only 
			while the component is mounted
		*/
		isAnimationRefMounted.current = true;
		let timeout: NodeJS.Timeout;
		if (isAnimationRefMounted.current && animationRef.current !== null) {
			if (!animationCounter) {
				gsap.to(animationRef.current, {
					x: 10,
					duration: 2,
					rotation: 360,
					scale: 0.65,
				});
			} else {
				gsap.to(animationRef.current, {
					x: 0,
					duration: 2,
					rotation: -360,
					scale: 1,
				});
			}
		}
		timeout = setTimeout(() => setAnimationCounter(animationCounter + 1), 2250);

		return () => {
			clearTimeout(timeout);
			isAnimationRefMounted.current = false;
		};
	}, [animationCounter]);

	return <div ref={animationRef}>{children}</div>;
};
export default RollTwice;
