import * as React from 'react';
import { useLayoutEffect } from 'hooks';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skew: React.FC = ({ children }) => {
	const skewRef = React.useRef<HTMLSpanElement>(undefined!);

	useLayoutEffect(() => {
		const proxy = { skew: 0 };
		const skewSetter = gsap.quickSetter(skewRef.current, 'skewY', 'deg');
		const clamp = gsap.utils.clamp(-5, 5);
		ScrollTrigger.create({
			onUpdate: (self) => {
				const skew = clamp(self.getVelocity() / -300); // animate only when scrolling is rather instense
				if (Math.abs(skew) > Math.abs(proxy.skew)) {
					proxy.skew = skew;
					gsap.to(proxy, {
						skew: 0,
						duration: 0.8,
						ease: 'power3',
						overwrite: true,
						onUpdate: () => skewSetter(proxy.skew),
					});
				}
			},
		});
		const animation = gsap.set(skewRef.current, {
			transformOrigin: 'right center',
			force3D: true,
		});
		return () => {
			//cleanup
			ScrollTrigger.getAll().forEach((t) => t.kill());
			animation.kill();
		};
	}, []);

	return <span ref={skewRef}>{children}</span>;
};

export default Skew;
