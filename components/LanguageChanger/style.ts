import styled from 'styled-components';

import Image from 'next/image';

export const FlagWrapper = styled.div`
	height: 2rem;
	width: 2rem;
`;
export const Flag = styled(Image)`
	border-radius: 5rem;
	overflow: hidden;
	cursor: pointer;
`;
