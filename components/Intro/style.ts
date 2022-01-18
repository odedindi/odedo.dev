import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Intro = styled.section`
	height: 100vh;
	position: relative;
	padding: 5vw;
	background: #c0d7d8;
	overflow: hidden;
`;

export const Content = styled.div`
	position: absolute;
	right: 8%;
	bottom: 15%;
	z-index: 3;

	${device.tablet} {
		right: auto;
	}
`;

export const P = styled.p`
	max-width: 35vw;
	margin-left: 25vw;

	${device.tablet} {
		max-width: 80vw;
		margin-left: 5vw;
	}
`;
const Image = styled.img`
	position: absolute;
	width: 35%;
	max-width: 390px;
	height: auto;

	${device.tablet} {
		width: 75vw;
	}
`;
export const Image1 = styled(Image)`
	z-index: 2;
	left: 10%;
	bottom: 35%;

	${device.tablet} {
		// top: 15vh;
		left: 50%;
		bottom: 50vh;
	}
`;
export const Image2 = styled(Image)`
	z-index: 1;
	left: 25%;
	bottom: 40%;

	${device.tablet} {
		// top: 2vh;
		left: 70%;
		bottom: 60vh;
	}
`;
