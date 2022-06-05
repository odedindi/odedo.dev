import * as React from 'react';

import type { CircleWithMoveToRef } from './types';

import { useLayoutEffect } from 'hooks';

import Circle from './Circle';

type MouseTrackerProps = {
	numOfCircles?: number;
};

export const MouseTracker: React.FC<MouseTrackerProps> = ({
	numOfCircles = 4,
}) => {
	const circlesRefs = React.useRef<CircleWithMoveToRef[]>([]);
	const addCircleRef = (el: CircleWithMoveToRef) => {
		if (!circlesRefs.current.includes(el)) circlesRefs.current.push(el);
	};
	circlesRefs.current = [];

	useLayoutEffect(() => {
		circlesRefs.current.forEach((circle) =>
			circle?.moveTo(innerWidth / 2, innerHeight / 2),
		);

		const onMove = ({ clientX, clientY }: PointerEvent) =>
			circlesRefs.current.forEach((circle) => circle?.moveTo(clientX, clientY));

		window.addEventListener('pointermove', onMove);

		return () => window.removeEventListener('pointermove', onMove);
	}, []);

	return (
		<>
			{Array.from({ length: numOfCircles }).map((_, i) => (
				<Circle
					ref={addCircleRef}
					key={`${i}-circle`}
					size={Number(i + 1)}
					delay={Number(`0.${i}`)}
				/>
			))}
		</>
	);
};

export default MouseTracker;
