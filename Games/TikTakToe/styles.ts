import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from 'utils/mediaQueries';

export const GameWrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-height: 25rem;
	min-width: 40rem;

	${device.tablet} {
		flex-direction: column;
	}
`;

export const Controllers = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 1rem 0 0;
	position: relative;
	top: 0.75rem;

	p {
		color: ${({ theme }) => theme.colors.text.primary};
		strong {
			color: ${({ theme }) => theme.colors.text.onPrimary};
		}
	}
	${device.tablet} {
		padding: 0;
	}
`;

export const Board = styled.section`
	background: gray;
	border: 0.25rem darkblue solid;
	border-radius: 0.25rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	width: 15.5rem;
	margin-bottom: 1rem;
`;

export const IconWrapper = styled.div<{ winningPattern: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;

	cursor: pointer;
	font-size: 2rem;
	width: 5rem;
	height: 5rem;
	border: 0.2rem solid
		${({ winningPattern }) => (winningPattern ? 'burlywood' : 'black')};
	border-radius: 0.25rem;
	:hover {
		background: darkgray;
	}
`;

export const PlayerSign = styled(FontAwesomeIcon)<{
	winningpattern: string;
}>`
	font-size: 3rem;

	${({ winningpattern }) =>
		winningpattern === 'true'
			? css`
					color: gold;
			  `
			: null}
`;

export const ToggleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const ModeIcon = styled(FontAwesomeIcon)<{ checked: boolean }>`
	font-size: 2rem;
	color: ${({ checked, theme }) =>
		checked ? theme.colors.text.onPrimary : theme.colors.text.secondary};
`;

const slideLeft = keyframes`  
	0% {
		left: 45px;
		width: 2.1rem;
	}
	60% {
		left: 20px;
		width: 4rem;
	}
	100% {
		left: 1.5125px;
	}
`;

const slideRight = keyframes`  
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
	}
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
	display: none;
`;

export const Switch = styled.label<{ checked: boolean }>`
	cursor: pointer;
	width: 6rem;
	height: 3rem;
	background: ${({ theme }) => theme.colors.background.secondary};
	border-radius: 100px;
	border: 5px solid ${({ theme }) => theme.colors.text.onPrimary};
	display: flex;
	position: relative;
	transition: all 350ms ease-in;
	transform: scale(0.6);
	:before {
		animation-name: ${slideLeft};
		animation-duration: 350ms;
		animation-fill-mode: forwards;
		transition: all 350ms ease-in;
		content: '';
		width: 2.1rem;
		height: 2.1rem;
		top: 2.75px;
		left: 4px;
		position: absolute;
		border-radius: 2.1rem;
		background: ${({ theme }) => theme.colors.text.onPrimary};
	}
	${({ checked }) =>
		checked
			? css`
					:before {
						animation-name: ${slideRight};
						animation-duration: 350ms;
						animation-fill-mode: forwards;
					}
			  `
			: null}
`;

export const Scores = styled.section`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding-top: 0.5rem;
`;
export const Score = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h4 {
		position: relative;
		bottom: 1.25rem;
		color: ${({ theme }) => theme.colors.text.secondary};
	}
`;
