import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Modal = styled.aside<{ isOpen: boolean }>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	position: absolute;
	top: 2.75rem;
	right: 1.75rem;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
	&:hover {
		transition: 0.5s ease-in-out;
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
	}
`;
