import styled from 'styled-components';

export const Stats = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const Stat = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})<{ dark?: boolean }>`
	width: max-content;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	color: ${({ dark }) => (dark ? 'darkcyan' : 'cyan')};
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
