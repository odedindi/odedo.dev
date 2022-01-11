import styled from 'styled-components';

export const Title = styled.h2`
	font-size: 1rem;
	color: ${({ theme }) => theme.colors.primary};
	margin: 0;
	padding: 0 0.5rem;
`;

export const P = styled.p`
	font-size: 0.7rem;
	letter-spacing: 0.2rem;
	margin: 0;
	padding: 0.125rem;
`;

export const Code = styled.p`
	font-weight: lighter;
	color: orange;
	margin: 0;
	padding: 0 2.5rem;
`;
export const Article = styled.article`
	padding: 0.25rem 2rem;
`;

export const Divider = styled.span`
	width: max-content;
	height: 1rem;
	padding: 0 1rem;
	background: gray;
`;

export const CardContianer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-evenly;

	max-width: 60rem;
`;
