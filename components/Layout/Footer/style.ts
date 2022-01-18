import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: #cecece;

	height: 60vh;
`;
export const ContactMeWrapper = styled.section`
	height: 5rem;

	${device.phone} {
		position: relative;
		left: 0.75rem;
	}
`;

export const SocialMediaButtonsWrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 15rem;
`;

export const GitHubStatsWrapper = styled.section`
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Copyrights = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.h6};
	color: ${({ theme }) => theme.colors.text.primary};
`;

export const LanguageAndThemeChangersWrapper = styled.section`
	position: absolute;
	right: 2.75rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 6rem 0 0;
	${device.phone} {
		flex-direction: column;
	}
`;

export const LinkToTop = styled.a`
	position: absolute;
	left: 2.75rem;
	/* transform: translateX(-50%); */
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	background: ${({ theme }) => theme.colors.logo.dark};
	font-size: 18px;
	color: white;
	text-decoration: none;

	${device.phone} {
		transform: scale(0.7);
	}
`;
export const LinkToTopLine = styled.span`
	position: absolute;
	top: -50px;
	left: 50%;
	width: 1px;
	height: 50px;
	background: ${({ theme }) => theme.colors.logo.dark};
`;
