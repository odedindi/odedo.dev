import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Card = styled.div<{ width?: string }>`
	width: calc(30% - 2rem);
	max-width: ${({ width }) => (width ? width : '4.5rem')};
	cursor: pointer;

	${device.desktop} {
		width: calc(33.333333% - 2rem);
	}
	${device.tablet} {
		width: calc(50% - 2rem);
	}
	${device.phone} {
		width: 100%;
		margin: 0 0 2rem 0;
	}
`;

export const CardContainer = styled.div<{ height?: string }>`
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-perspective: 1000px;
	perspective: 1000px;

	.front,
	.back {
		background-size: cover;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 0.5rem;
		background-position: center;
		-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		text-align: center;
		min-height: ${({ height }) => (height ? height : '4.5rem')};
		height: auto;
		color: #fff;
		font-size: 1.5rem;
	}

	.back {
		background: #cedce7;
		background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.6;
		background-color: #000;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}
	:hover .front,
	:hover .back {
		-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.front {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	:hover .back {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	:hover .front {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
`;

export const ContentWrapper = styled.div`
	-webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
	transform: translateY(-50%) translateZ(60px) scale(0.94);
	top: 50%;
	position: absolute;
	left: 0;
	width: 100%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	outline: 1px solid transparent;
	-webkit-perspective: inherit;
	perspective: inherit;
	z-index: 2;
`;
export const Title = styled.span`
	color: rgba(255, 255, 255);
	text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3);
	font-weight: 300;
`;
