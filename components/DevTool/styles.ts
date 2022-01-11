import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const DevToolsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 3.5rem;
	width: auto;
	padding: 0 2.5rem 0 2.5rem;
	color: ${({ theme }) => theme.colors.text.primary};

	${device.tablet} {
	}

	a {
		color: ${({ theme }) => theme.colors.text.onPrimary};
		text-decoration: none;
		:hover {
			border-bottom: 2px solid ${({ theme }) => theme.colors.text.onPrimary};
		}
	}

	.title {
		margin: 0 0 30px 0;
		line-height: 40px;
		margin-bottom: 20px;
		text-align: center;
		h3,
		h4,
		h5 {
			color: ${({ theme }) => theme.colors.text.secondary};
			color: ${({ theme }) => theme.colors.text.secondary};
			border-bottom: solid 0.5px ${({ theme }) => theme.colors.text.onPrimary};
			width: 100%;
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
	transform: scale(0.9);
	a {
		padding: 0 0.25rem;
	}
`;

export const DevToolsIconsWrapper = styled.section`
	min-width: 14rem;
	max-width: 25rem;
	/* padding: 0.25rem 0; */
	border-radius: 0.5rem;
	transform: scale(0.8);
	/* display: flex;
	align-items: center; */
	background: ${({ theme }) => theme.colors.background.secondary};
	border: solid 1px ${({ theme }) => theme.colors.background.secondary};

	:hover {
		border-color: ${({ theme }) => theme.colors.background.menu};
	}
`;
