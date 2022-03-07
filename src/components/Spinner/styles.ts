import styled, { keyframes } from 'styled-components';

export const Container = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const dash = keyframes`
 0% {
    stroke-dasharray: 35, 150;
    stroke-dashoffset: 35;
  }
  50% {
    stroke-dasharray: 80, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 50, 150;
    stroke-dashoffset: 65;
  }
`;
export const Svg = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink',
	xmlSpace: 'preserve',
	version: '1.1',
	baseProfile: 'tiny',
	x: '0px',
	y: '0px',
	viewBox: '0 0 24 24',
})`
	width: 36px;
	height: 36px;
`;
export const Circle = styled.circle.attrs({ cx: '12', cy: '12' })<{
	delay?: number;
	index: number;
}>`
	fill: none;
	stroke-linecap: round;
	stroke-width: 2;
	stroke: #29b6f6;
	animation: ${dash} ease-in-out infinite;
	animation-duration: ${({ delay }) => `${delay ? `${15 / delay}s` : '1.5s'}`};
	animation-direction: ${({ index }) =>
		index % 2 ? 'alternate' : 'alternate-reverse'};
`;
