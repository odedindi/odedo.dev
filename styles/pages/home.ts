import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const PageWrapper = styled.main`
	position: relative;
	bottom: 4rem;
	${device.tablet} {
		width: 10rem;
	}
`;
