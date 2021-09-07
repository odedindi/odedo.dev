import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

// ============= general layout =============
export const LayoutWrapper = styled.section`
	padding-top: 2.75rem;
	line-height: 1.5;
	height: 100vh;
	width: 98vw;

	${device.tablet} {
		width: 97vw;
	}
`;

export const ChildrenWrapper = styled.section`
	min-height: 60.25vh;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: center;

	z-index: 2;
	${device.tablet} {
		min-height: 60.25vh;
	}
	${device.phone} {
		min-height: 58vh;
	}
`;
// =============== navigation ===============
export const NavigationWrapper = styled.section`
	width: 90vw;
	z-index: 1;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 0 3.5rem;
	margin-bottom: 2.5rem;

	${device.phone} {
		padding: 0;
		flex-direction: column;
		align-items: baseline;
		position: relative;
		left: 0.75rem;
	}
`;

export const LinksWrapper = styled.section`
	align-self: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5px;
`;

export const DarkModeTogglerWrapper = styled.section`
	justify-self: flex-end;
`;
// ================= footer =================
export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 15vh;
	width: 95vw;

	${device.phone} {
		width: 90vw;
	}
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

export const CopyRightsAndLanguagesWrapper = styled.section`
	position: relative;
	bottom: 0px;
	left: 44.5%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;

	${device.tablet} {
		left: 42.5%;
	}
	${device.phone} {
		left: 35.5%;
	}
	${device.xs} {
		left: 30.5%;
	} ;
`;

export const CopyRights = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.text.primary};
`;
// ==========================================
