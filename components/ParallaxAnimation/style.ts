import styled from 'styled-components';

export const ImageWrapper = styled.div<{ toLeft?: boolean }>`
	position: absolute;
	left: 0;
	top: 50%;
	transform: ${({ toLeft }) =>
		toLeft ? 'translateY(50%)' : 'translateY(-50%)'};
	width: 100%;
	height: 160vh;

	padding-top: 50%;
`;

export const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
