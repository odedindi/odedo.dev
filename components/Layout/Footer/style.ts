import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
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

export const CopyRights = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.small};
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
`;
