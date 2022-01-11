import styled from 'styled-components';

import { blmLightGrey, blmGrey } from '../colors';
import { bodyFont, headerFont } from '../fonts';
import { Header, SubHeader, Title } from '../styles';

export const Note = styled.div`
	font-family: ${bodyFont};
	background: ${blmLightGrey};
	padding: 7rem 10rem 5rem 14rem;
	border-left: 4rem solid ${blmGrey};
	margin: 45rem 0;
	border-radius: 3rem;
	> p {
		margin: 0 0 5rem 0;
	}
	${SubHeader} + &, ${Title} + & {
		margin-top: 35rem;
	}
`;

export const NoteLabel = styled.strong`
	display: block;
	font-weight: 600;
	font-family: ${headerFont};
	text-transform: uppercase;
	font-size: 90%;
	margin-bottom: 7rem;
`;
