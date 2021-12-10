import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const SlogenWrapper = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: relative;
	top: 0.95rem;
	left: 16.2rem;
	letter-spacing: 0.025rem;

	${device.tablet} {
		position: relative;
		top: 2rem;
		left: 8.775rem;
	}
	${device.phone} {
		display: none;
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
`;
