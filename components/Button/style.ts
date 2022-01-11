import { device } from 'utils/mediaQueries';
import styled, { css } from 'styled-components';

// ============== main button ===============
const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	line-height: ${({ theme }) => theme.lineHeights.code};
	font: 700 1.2rem;
	padding: 1em 2em;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
	width: 12rem;

	:focus,
	:active {
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
		transition: border-color 0s, width 0.25s, height 0.25s;
	}

	${device.phone} {
		width: 90vw;
	}
`;

export const MainButton = styled(Button)<{ disabled?: boolean }>`
	box-shadow: inset 0 0 0 4px
		${({ theme }) => theme.colors.naviAndContactButtons.primary};
	color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
	transition: ease-in-out color 0.125s 0.5s;
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
		border-bottom-width: 5px;
		border-left-width: 5px;
	}
	::after {
		border-top-width: 5px;
		border-right-width: 5px;
	}
	:hover {
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
	}
	:hover::before,
	:hover::after {
		border-color: ${({ theme }) =>
			theme.colors.naviAndContactButtons.secondary};
		transition: border-color 0s, width 0.5s, height 0.25s;
		width: 100%;
		height: 100%;
	}
	:hover::before {
		transition-delay: 0s, 0s, 0.25s;
	}
	:hover::after {
		transition-delay: 0.25s, 0.25s, 0s;
	}
	${({ disabled }) =>
		disabled
			? css`
					cursor: not-allowed;
					:hover,
					:hover:before,
					:hover:after {
						color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
						border: none;
						border-color: ${({ theme }) =>
							theme.colors.naviAndContactButtons.primary};
						transition: none;
					}
			  `
			: null}
`;

// =============== contact me ===============
export const ContactMeButtonsWrapper = styled.section`
	display: flex;
	flex-flow: row;
	justify-content: space-evenly;
	align-items: center;
	width: 15rem;

	${device.phone} {
		flex-flow: row wrap;
		justify-content: space-evenly;
		width: 5rem;
		gap: 0.25rem;
	}
`;
// =============== color mode ===============
export const ColorModeToggleBoxWrapper = styled.span`
	position: relative;
	padding: 0 4px;
	display: flex;
	align-items: center;
`;
export const ColorModeToggleBox = styled.input.attrs({ type: 'checkbox' })`
	width: 30px;
	height: 10px;
	background: #555;
	position: relative;
	border-radius: 5px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	cursor: pointer;
	vertical-align: 2px;
	outline: none;
`;

type LabelProps = {
	isDarkMode: boolean;
};
export const ColorModeToggleBoxLabel = styled.label<LabelProps>`
	display: inline-block;
	width: 1.125rem;
	height: 1.125rem;
	border-radius: 50%;
	transition: all 0.5s ease;
	cursor: pointer;
	position: absolute;
	background: #fff;
	opacity: ${({ isDarkMode }) => (isDarkMode ? 0.6 : 0.9)};
	background-color: #f6f6f6;
	left: ${({ isDarkMode }) => (isDarkMode ? '18px' : '3px')};
`;

type ColorModeToggler = { darkMode: boolean };
export const ColorModeToggler = styled.div<ColorModeToggler>`
	display: flex;
	margin: 0 auto;
	& > button {
		font-size: 1.2em;
		background: none;
		border: none;
		cursor: pointer;
		transition: color 0.3s ease-in-out;
		color: ${({ darkMode }) => (!darkMode ? '#ffe600' : '999')};

		&:last-child {
			transition: color 0.3s ease-in-out;
			color: ${({ darkMode }) => (!darkMode ? '#666' : 'lightblue')};
		}

		&:focus {
			outline: none;
		}
	}
`;
export const ColorModeButton = styled.button`
	color: #006688;
	background-color: transparent;
	border: none;
	font-size: 1em;
	padding: 0;
`;

// ==========================================
