import styled from 'styled-components';

import { Link as LinkIcon } from '@styled-icons/material';
import { device } from 'utils/mediaQueries';

export const Anchor = styled.a`
	display: none;
	color: inherit;
	margin-left: 10rem;
`;

export const AnchorIcon = styled(LinkIcon).attrs({
	width: undefined,
	height: undefined,
})`
	width: 20rem;
	opacity: 0.7;
	margin-top: -5rem;
	&:hover {
		opacity: 0.9;
	}
`;

export const InvisibleAnchor = styled.div.attrs({
	'aria-hidden': true,
})`
	position: relative;
	display: block;
	visibility: hidden;
	height: 0;
	top: -70rem;
	${device.phone} {
		top: -90rem;
	}
`;

export const AnchorHeader = styled.div`
	position: relative;
	${device.phone} {
		${Anchor} {
			display: inline-block;
		}
	}
	&:hover ${Anchor} {
		display: inline-block;
	}
`;
