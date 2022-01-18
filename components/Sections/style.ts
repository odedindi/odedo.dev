import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

const dark = '#242423';

export const Section = styled.section`
	display: flex;
	align-items: stretch;
	min-height: 100vh;
	overflow: hidden;

	&:nth-of-type(even) {
		background: #c4cdc4;
	}

	${device.tablet} {
		display: block;
		position: relative;
	}
`;

const Container = styled.div`
	flex-basis: 50%;

	${device.tablet} {
		display: block;
		width: 100%;
		height: 100vh;
	}
`;

export const ContentContainer = styled(Container)`
	position: relative;
	z-index: 1;

	${device.tablet} {
		position: relative;
		z-index: 1;
	}
`;

export const ImageContainer = styled(Container)`
	position: relative;
	overflow: hidden;

	${device.tablet} {
		position: absolute;
		z-index: 0;
		left: 0;
		top: 0;
	}
`;

export const ContentColumn = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	height: 100%;
	padding: 6vw 6vw 10vw;

	${device.tablet} {
		width: 80%;
	}
`;

export const Title = styled.h2`
	margin: 0 0 2vw;
	font-size: 9vw;
	letter-spacing: -0.8vw;

	@media all and (max-width: 768px) {
		margin: 0 0 6vw;
		font-size: 18vw;
	}
`;

export const TitleBlock = styled.span`
	display: block;
`;

export const TextWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-direction: row;

	@media all and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const P = styled.p`
	max-width: 22vw;
	order: 2;
	margin-left: 32px;

	@media all and (max-width: 768px) {
		order: 1;
		max-width: 40vw;
		margin: 0 0 10vw 10vw;
	}
`;

export const NextSectionLink = styled.a`
	position: absolute;
	right: -113px;
	bottom: 3.5vw;
	display: block;
	width: 140px;
	height: 140px;
	background: ${dark};
	overflow: hidden;

	div {
		position: absolute;
		left: 26px;
		bottom: 0;
		width: 1px;
		height: 100%;
	}
	@media all and (max-width: 768px) {
		display: none;
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

export const DevToolsContainer = styled.section`
	width: auto;
	max-width: 75vw;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;

	padding: auto;

	${device.desktop} {
		max-width: 100%;
	}
`;
