import { device } from 'helpers/mediaQueries';
import styled from 'styled-components';


// ============= general layout =============
export const LayoutWrapper = styled.section`
	padding: 2rem 7.5rem 0 7.5rem;
	line-height: 1.5;
	height: 100vh;
	width: 100vw;
	
	${device.phone} {
		padding: 5%;

	}
`;

export const ChildrenWrapper = styled.section`
	min-height: 65vh;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: center;
	
	${device.phone} {
		min-height: 57.5vh;
	}
	`;
// =============== navigation ===============
export const NavigationWrapper = styled.section`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: space-around;

	${device.tablet} {
		flex-flow: column;
		justify-content: center;
		align-items: center;
	}
`;

export const LinksWrapper = styled.div`
	display: flex;
	gap: 5px;
	
    ${device.phone} {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: center;
	}
	`;
// ================= footer =================
export const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	min-height: 20vh;

	${device.phone} {
		width: 90vw;
	}
`;

export const SocialMediaButtonsWrapper = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	width: 15rem;
`;

export const BottomWrapper = styled.section`
	align-self: flex-end;
	position: absolute;
	bottom: 0px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	width: 5rem;
`;
export const CopyRights = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.copyRights};
`;
// ==========================================