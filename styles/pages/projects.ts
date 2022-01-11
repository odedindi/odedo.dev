import styled from 'styled-components';
import { device } from 'utils/mediaQueries';

export const PageWrapper = styled.main`
	background: red;
	padding: 0 1rem 5rem 1rem;
	height: 100%;
	width: 100%;

	display: flex;

	flex-direction: column;

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

export const ProjectsCardWrapper = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	flex-flow: row wrap;

	justify-content: space-around;
	align-items: center;
`;
