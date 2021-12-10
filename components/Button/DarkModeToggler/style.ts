import styled, { css, keyframes } from 'styled-components';

/** sunny side **/
const blueBackground = '#c2e9f6';
const blueBorder = '#72cce3';
const blueColor = '#96dcee';
const yellowBackground = '#fffaa8';
const yellowBorder = '#f5eb71';
/** dark side **/
const indigoBackground = '#808fc7';
const indigoBorder = '#5d6baa';
const indigoColor = '#6b7abb';
const grayBorder = '#e8e8ea';
const grayDots = '#e8e8ea';
/** general **/
const white = '#fff';

const sunRise = keyframes`  
0% {
    left: 45px;
    width: 2.1rem;
  }
  60% {
    left: 20px;
    width: 4rem;
  }
  100% {
    left: 2px;
  }`;

const sunSet = keyframes`  
    0% {
    left: 2px;
  }
  60% {
    left: 4px;
    width: 4rem;
  }
  100% {
    left: 51px;
    width: 2.1rem;
  }`;
export const Checkbox = styled.input.attrs({
	type: 'checkbox',
})`
	display: none;
`;

export const Switch = styled.label<{ checked: boolean }>`
	cursor: pointer;
	/** Placeholder element, starting at blue **/
	width: 6rem;
	height: 3rem;
	background: ${blueColor};
	border-radius: 100px;
	border: 5px solid ${blueBorder};
	display: flex;
	position: relative;
	transition: all 350ms ease-in;
	/** The sun cloud and moon stars **/
	/** Sun/Moon element **/
	/** Gray dots on the moon **/

	:before {
		animation-name: ${sunRise};
		animation-duration: 350ms;
		animation-fill-mode: forwards;
		transition: all 350ms ease-in;
		content: '';
		width: 2.1rem;
		height: 2.1rem;
		border: 2.5px solid ${yellowBorder};
		top: 3px;
		left: 4px;
		position: absolute;
		border-radius: 2.1rem;
		background: ${yellowBackground};
	}
	//makteshim
	:after {
		transition-delay: 0ms;
		transition: all 250ms ease-in;
		position: absolute;
		content: '';
		box-shadow: ${grayDots} -13px 0 0 2px, ${grayDots} -24px 14px 0 -2px;
		left: 77px;
		top: 7px;
		width: 7.5px;
		height: 7.5px;
		background: transparent;
		border-radius: 50%;
		opacity: 0;
	}
	${({ checked }) =>
		checked
			? css`
					background: ${indigoColor};
					border-color: ${indigoBorder};
					:before {
						background: ${white};
						border-color: ${grayBorder};
						animation-name: ${sunSet};
						animation-duration: 350ms;
						animation-fill-mode: forwards;
					}
					:after {
						transition-delay: 350ms;
						opacity: 1;
					}
			  `
			: null}
`;

export const Background = styled.span<{ checked: boolean }>`
	width: 0.3rem;
	height: 0.15rem;
	border-radius: 5px;
	position: relative;
	background: ${white};
	left: 67.5px;
	top: 12px;
	transition: all 150ms ease-in;

	:before {
		content: '';
		position: absolute;
		width: 1rem;
		height: 0.15rem;
		border-radius: 5px;
		background: ${white};
		top: -3px;
		left: -12px;
		transition: all 150ms ease-in;
	}
	:after {
		content: '';
		position: absolute;
		width: 1rem;
		height: 0.15rem;
		border-radius: 5px;
		background: ${white};
		left: -3px;
		top: 2.5px;

		transition: all 150ms ease-in;
	}
	${({ checked }) =>
		checked
			? css`
					background: ${blueBackground};
					left: 25px;
					width: 5px;

					:before {
						width: 3px;
						height: 3px;
						top: 7px;
					}
					:after {
						width: 3px;
						height: 3px;
						left: -20px;
						top: 3px;
					}
			  `
			: null}
`;
