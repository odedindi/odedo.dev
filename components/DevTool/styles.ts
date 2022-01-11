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
	background: ${({ theme }) => theme.colors.background.devToolsContainer};
	color: ${({ theme }) => theme.colors.text.primary};

	transform: scale(0.9);
	:hover {
		border-color: ${({ theme }) => theme.colors.background.menu};
	}
	a {
		color: ${({ theme }) => theme.colors.text.onPrimary};
		text-decoration: none;
		:hover {
			border-bottom: 2px solid ${({ theme }) => theme.colors.text.onPrimary};
		}
	}
	p {
		text-align: center;
		padding: 1rem;
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
	text-align: center;
	h3,
	h4,
	h5 {
		color: ${({ theme }) => theme.colors.text.secondary};
		color: ${({ theme }) => theme.colors.text.secondary};
		border-bottom: solid 0.5px ${({ theme }) => theme.colors.text.onPrimary};
		width: 100%;
	}
`;
