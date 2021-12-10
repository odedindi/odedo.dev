import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Nav = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	height: 5rem;
	z-index: 998;
	transition: 0.75s all ease-in-out;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
	font-size: 2rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.naviAndContactButtons.primary};

	position: absolute;
	top: 1.75rem;
	right: 1.75rem;
	&:hover {
		transition: 0.5s ease-in-out;
		color: ${({ theme }) => theme.colors.naviAndContactButtons.secondary};
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	position: sticky;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const DarkModeTogglerWrapper = styled.section`
	scale: 0.6;
	/* padding-top: 1.25rem; */
`;

export const Logo = styled.img.attrs(() => ({
	alt: '',
	src: '/logo.png',
}))`
	width: 2.5rem;
	height: 2.5rem;

	position: absolute;
	top: 1.5rem;
	left: 1.75rem;

	:hover {
		cursor: pointer;
		transition: 0.2s ease-in-out;
		transform: scale(1.5, 1.5);
	}
`;
