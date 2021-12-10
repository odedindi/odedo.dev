import { device } from 'utils/mediaQueries';
import styled from 'styled-components';

export const PageWrapper = styled.main`
	padding: 0 1rem 0 1rem;
	${device.desktop} {
		/* width: 98vw; */
	}
	${device.tablet} {
		/* width: 94vw; */
	}
	${device.phone} {
		/* width: 94vw; */
	}
`;
