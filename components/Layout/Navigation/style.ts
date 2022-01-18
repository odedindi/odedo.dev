import styled, { css } from 'styled-components';
import { device } from 'utils/mediaQueries';
export const Nav = styled.header`
	position: fixed;
	top: 1.5rem;

	padding: 0 3rem;

	z-index: 10;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 100vw;

	opacity: 0;
`;

export const SignatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${device.tablet} {
		transform: scale(0.5);

		position: fixed;
		left: 3.5rem;
		top: 0.5rem;
	}
`;

const buttonWidth = '56px';
const buttonHeight = '30px';
const buttonSize = css`
	width: ${buttonWidth};
	height: ${buttonHeight};
`;
export const ButtonAnchor = styled.a`
	${buttonSize};
	display: block;
	margin: -2px 0 0 56px;

	${device.tablet} {
		margin: 18px 0 0 -6px;
	}
`;

export const ButtonSvg = styled.svg.attrs({
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: `0 0 ${buttonWidth} ${buttonHeight}`,
})`
	${buttonSize};
	pointer-events: none;

	rect {
		width: 40px;
		height: 2px;
		fill: ${({ theme }) => theme.colors.logo.bright};
	}
`;
