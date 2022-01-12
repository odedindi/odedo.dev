import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const DevToolsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-width: 14rem;
	max-width: 35rem;
	width: auto;

	padding: 0.5rem 0;

	border-radius: 0.5rem;
	border: solid 1px transparent;
	background: ${({ theme: { colors } }) => colors.background.devToolsContainer};
	color: ${({ theme: { colors } }) => colors.text.primary};

	transform: scale(0.9);
	:hover {
		border-color: ${({ theme: { colors } }) => colors.background.menu};
	}

	${device.desktop} {
		min-width: 16rem;
	}
	${device.tablet} {
		width: 100%;
	}
`;

export const DevToolsToolTip = styled.div``;

export const DevToolsIconWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	padding: 0 0.25rem;

	transform: scale(0.8);
	a {
		padding: 0 0.25rem;
	}

	${DevToolsContainer}:hover & {
		transform: scale(1);
	}
`;

export const DevToolsTitle = styled.section`
	position: relative;
	top: 0.5rem;
	text-align: center;

	border-bottom: solid 0.5px ${({ theme: { colors } }) => colors.text.onPrimary};
	width: 90%;

	h5 {
		color: ${({ theme: { colors } }) => colors.text.secondary};
	}
`;
