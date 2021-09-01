import { device } from 'helpers/mediaQueries';
import styled from 'styled-components';

// ============== main button ===============
const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	line-height: 1.5;
	font: 700 1.2rem;
	padding: 1em 2em;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	width: 12rem;
	z-index: 2;

	:focus,
	:active {
		color: ${({ theme }) => theme.colors.dark};
		transition: border-color 0s, width 0.25s, height 0.25s;
	}

    ${device.phone} {
		width: 75vw;
	}
`;

export const MainButton = styled(Button)`
	box-shadow: inset 0 0 0 4px ${({ theme }) => theme.colors.bright};
	color: ${({ theme }) => theme.colors.bright};
	transition: ease-in-out color 0.25s 0.0833333333s;
	position: relative;

	::before,
	::after {
		border: 0 solid transparent;
		box-sizing: border-box;
		content: '';
		pointer-events: none;
		position: absolute;
		width: 0;
		height: 0;
		bottom: 0;
		right: 0;
	}
	::before {
		border-bottom-width: 4px;
		border-left-width: 4px;
	}
	::after {
		border-top-width: 4px;
		border-right-width: 4px;
	}
	:hover {
		color: ${({ theme }) => theme.colors.dark};
	}
	:hover::before,
	:hover::after {
		border-color: ${({ theme }) => theme.colors.dark};
		transition: border-color 0s, width 0.25s, height 0.25s;
		width: 100%;
		height: 100%;
	}
	:hover::before {
		transition-delay: 0s, 0s, 0.25s;
	}
	:hover::after {
		transition-delay: 0s, 0.25s, 0s;
	}
`;

// =============== contact me ===============
export const ContactMeButtonsWrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 15rem;
	margin-top: -6.75rem;

	${device.xs} {
		flex-direction: column;
		position: absolute;
	bottom: 40px;
	left: -50px;
	width: 5rem;
	height: 12rem;
	}
`;
// ==========================================
