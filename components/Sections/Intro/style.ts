import styled, { css } from 'styled-components';
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
const Img = styled.img`
	position: absolute;
	width: 35%;
	max-width: 390px;
	height: auto;
	border-radius: 1rem;

	display: block;
	border: 0.125rem solid rgba(255, 255, 255, 0.2);
	filter: grayscale(0);

	${device.tablet} {
		width: 75vw;
	}
`;
export const Image = styled(Img)<{ position?: 'front' | 'back' }>`
	z-index: ${({ position }) => (position === 'back' ? 1 : 2)};
	left: ${({ position }) => (position === 'back' ? '25%' : '10%')};
	bottom: ${({ position }) => (position === 'back' ? '45%' : '35%')};

	${device.tablet} {
		left: ${({ position }) => (position === 'back' ? '80%' : '40%')};
		bottom: ${({ position }) => (position === 'back' ? '60vh' : '50vh')};
		display: ${({ position }) => (position === 'back' ? 'none' : null)};
	}
`;
