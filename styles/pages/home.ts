import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const PageWrapper = styled.main`
	${device.tablet} {
		width: 10rem;
	}
`;

export const SlogenWrapper = styled.section`
	width: 8rem;
	position: relative;
	top: 1.3rem;
	left: 10.25rem;

	${device.tablet} {
		position: relative;
		top: 2.85rem;
		left: 4rem;
	}
`;

export const Slogen = styled.p`
	height: 1rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: ${({ theme }) => theme.colors.logo.bright};
`;

export const MyName = styled.h1`
	color: ${({ theme }) => theme.colors.logo.dark};
	${device.tablet} {
		line-height: 2.125rem;
		width: 15rem;
	}
	${device.phone} {
		width: 10rem;
	}
`;
