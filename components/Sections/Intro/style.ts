import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const Intro = styled.section`
	height: 100vh;
	position: relative;
	padding: 5vw;
	background: #c0d7d8;
	overflow: hidden;
	opacity: 0;
`;
export const SignatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	right: 1rem;
	top: 2rem;
	transform: scale(0.9);
	${device.tablet} {
		display: none;
	}
`;
export const Content = styled.div`
	position: absolute;
	right: 6.5%;
	bottom: 25%;
	z-index: 3;

	${device.tablet} {
		right: auto;
	}
`;
export const ContactMeWrapper = styled(Content)`
	${device.tablet} {
		right: 50%;
	}
`;

export const P = styled.p`
	max-width: 35vw;
	margin-left: 25vw;
	padding: 0 1.5rem;
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
	border-radius: 1rem;

	${device.tablet} {
		width: 75vw;
	}
`;
export const Image1 = styled(Image)`
	z-index: 2;
	left: 10%;
	bottom: 35%;

	${device.tablet} {
		left: 40%;
		bottom: 50vh;
	}
`;
export const Image2 = styled(Image)`
	z-index: 1;
	left: 25%;
	bottom: 45%;
	${device.tablet} {
		display: none;
		left: 80%;
		bottom: 60vh;
	}
`;

export const ZoomImg = styled.img`
	pointer-events: none;
	position: relative;
	top: 50%;
	left: 50%;
`;

export const Zoom = styled.div`
	position: absolute;
	width: 250px;
	height: 250px;
	box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5),
		5px 5px 10px 5px rgba(0, 0, 0, 0.2);
	border-radius: 50%;
	top: 0;
	left: 0;
	overflow: hidden;
	pointer-events: none;
	visibility: hidden;
	opacity: 0;
`;
