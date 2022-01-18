import { device } from 'utils/mediaQueries';
import styled from 'styled-components';
import Lottie from 'react-lottie';

export const ImageWrapper = styled.div<{ toLeft?: boolean }>`
	position: absolute;
	left: 0;
	top: 50%;
	transform: ${({ toLeft }) =>
		toLeft ? 'translateY(50%)' : 'translateY(-50%)'};
	width: 100%;
	height: 160vh;

	padding-top: 50%;

	${device.tablet} {
		top: 70%;
		width: 80%;
		left: 70%;
	}
`;

export const Animation = styled(Lottie)<{ height: string }>`
	height: ${({ height }) => height};
	width: 100%;
`;
