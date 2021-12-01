import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const SlogenWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 10rem;
	position: relative;
	top: 1.75rem;
	left: 10.3rem;
	letter-spacing: 0.12rem;

	${device.tablet} {
		position: relative;
		top: 3.625rem;
		left: 3.075rem;
	}
`;

export const Slogen = styled.p`
	height: 1rem;
	border-radius: 1rem;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.logo.bright};
`;

export const MyName = styled.h1`
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: ${({ theme }) => theme.fontSizes.h1};
	letter-spacing: 0.1rem;
	${device.tablet} {
		line-height: 2.125rem;
		width: 15rem;
	}
	${device.phone} {
		width: 10rem;
	}
`;
