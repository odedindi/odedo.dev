import styled from 'styled-components';

const calculate = (n: number = 1, multiplier: number = 15): number =>
	(n < 1 ? 1 : n > 7 ? 7 : n) * multiplier;
export const Circle = styled.div<{ size: number }>`
	position: fixed;
	transform: translate(-50%, -50%);
	top: 0;
	left: 0;
	opacity: 0.3;

	border-radius: 5rem;
	background-color: teal;

	z-index: 10;
	width: ${({ size }) => `${calculate(size)}px`};
	height: ${({ size }) => `${calculate(size)}px`};

	pointer-events: none;
`;
