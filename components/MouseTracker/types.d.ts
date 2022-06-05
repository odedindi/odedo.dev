export type CircleProps = { size: number; delay: number };

export type CircleWithMoveToRef = {
	moveTo(x: gsap.TweenValue, y: gsap.TweenValue): void;
};
