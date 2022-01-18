import * as React from 'react';
import { useLayoutEffect } from 'hooks';

import gsap from 'gsap';

type FadeInOutProps = {
	durationIn?: number;
	durationOut?: number;
};
export const FadeInOut: React.FC<FadeInOutProps> = ({
	children,
	durationIn,
	durationOut,
}) => {
	const timeline = gsap.timeline({ pause: true });
	const el = React.useRef<HTMLDivElement>(undefined!);

	useLayoutEffect(() => {
		// intro animation
		gsap.to(el.current, { opacity: 1, duration: durationIn ?? 0.6 });

		// outro animation
		timeline.add(
			gsap.to(el.current, { opacity: 0, duration: durationOut ?? 0.5 }),
			0,
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div style={{ opacity: 0 }} ref={el}>
			{children}
		</div>
	);
};

export default FadeInOut;
