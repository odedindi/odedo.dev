import styled from 'styled-components';
import { sharedTransition } from 'styles/global';

export const Stats = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	justify-content: center;
	justify-items: center;
	align-items: center;
	gap: 1rem;
	padding: 0.8rem 0;
`;

export const Stat = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})`
	width: max-content;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	color: ${({ theme }) => theme.colors.text.primary};
	${sharedTransition('color, background-color')}
	&:hover {
		text-decoration: none;
	}
`;

export const Icon = styled.span`
	font-size: 1rem;
	line-height: 1rem;
	svg {
		height: 1rem;
		width: 1rem;
	}
`;

export const Value = styled.span``;
