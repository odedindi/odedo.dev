import * as React from 'react';

import * as S from './styles';

import gsap from 'gsap';

import type { CircleProps, CircleWithMoveToRef } from '../types';

export const Circle = React.forwardRef<CircleWithMoveToRef, CircleProps>(
	({ size, delay }, ref) => {
		const el = React.useRef<HTMLDivElement>(undefined!);

		React.useImperativeHandle(
			ref,
			() => ({
				moveTo(x: gsap.TweenValue, y: gsap.TweenValue) {
					gsap.to(el.current, { x, y, delay });
				},
			}),
			[delay],
		);

		return <S.Circle size={size} ref={el} />;
	},
);

Circle.displayName = 'Circle';

export default Circle;
