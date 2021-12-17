import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const PageWrapper = styled.main`
	padding: 0 1rem 5rem 1rem;
	${device.desktop} {
		width: 98vw;
	}
	${device.tablet} {
		width: 94vw;
	}
	${device.phone} {
		width: 94vw;
	}
`;

export const AboutParagraph = styled.div`
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
		}
	}
	p {
		text-align: center;
		padding: 1rem;
	}
`;
export const AboutTitle = styled.section`
	margin: 0 0 30px 0;
	line-height: 40px;
	margin-bottom: 20px;
	text-align: center;
	h3,
	h4 {
		color: ${({ theme }) => theme.colors.text.onPrimary};
	}
`;
export const DevToolsIconWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;

	justify-content: center;
	align-items: center;
	transform: scale(0.75);
`;

export const DevToolsIconsWrapper = styled.section`
	max-width: 25rem;
	padding: 0.25rem 1rem;
	border-radius: 0.5rem;

	background: ${({ theme }) => theme.colors.background.secondary};
	border: solid 1px ${({ theme }) => theme.colors.background.menu};

	:hover {
		border-color: ${({ theme }) => theme.colors.background.secondary};
	}
`;
