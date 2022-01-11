import styled from 'styled-components';

import { monospace } from './fonts';
import { blmGrey, blmMetal } from './colors';
import { headerFont } from './fonts';

export const Title = styled.h1`
	text-align: left;
	width: 100%;
	color: ${blmMetal};
	font-size: 42rem;
	font-weight: bold;
	font-family: ${headerFont};
`;
export const Header = styled.h2`
	font-size: 32rem;
	font-weight: 600;
	font-family: ${headerFont};
	margin: 1.5em 0 0.5em;
`;

export const SubHeader = styled.h3`
	margin: 1.5em 0 0.5em;
	font-size: 24rem;
	font-weight: 600;
	font-family: ${headerFont};
`;

export const TertiaryHeader = styled.h4`
	margin: 1.5em 0 0.5em;
	font-size: 18rem;
	font-weight: 600;
	font-family: ${headerFont};
`;

export const Code = styled.span`
	display: inline-block;
	font-family: ${monospace};
	font-size: 90%;
	line-height: 1.4;
	text-decoration: inherit;
	vertical-align: baseline;
`;

export const LabelGroup = styled.div`
	display: inline-block;
	margin-left: 0.5rem;
	position: relative;
	bottom: 3rem;
`;

export const Label = styled.small<{ isVersion?: boolean }>`
	display: inline-block;
	background: ${({ isVersion }) => (isVersion ? 'cornflowerblue' : blmGrey)};
	color: white;
	font-size: 0.75rem;
	font-family: ${headerFont};
	border-radius: 3rem;
	padding: 1rem 5rem;
	vertical-align: middle;
`;
