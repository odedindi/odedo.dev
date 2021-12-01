import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const PageWrapper = styled.main`
	padding: 0 1rem 0 1rem;
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
		border-bottom: 0.25rem solid
			${({ theme }) => theme.colors.background.primary};
		margin-bottom: 20px;
		text-align: center;
	}
	p {
		text-align: center;
		padding: 1rem;
	}
`;

export const DevToolsIconsWrapper = styled.section`
	padding: 0 2rem;
`;
