import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const DarkModeTogglerWrapper = styled.section`
	transform: scale(0.6);
	position: absolute;
	top: 2.25rem;
	right: 2.75rem;
`;

export const Menu = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;
	${device.phone} {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const MenuItem = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};
	cursor: pointer;
	&:hover {
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
		transition: 0.2s ease-in-out;
	}
`;

export const LanguageChangerWrapper = styled.div`
	position: absolute;
	bottom: 2.25rem;
	right: 1.75rem;
`;
