import styled from 'styled-components';

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 10vh;

	a {
		text-decoration: none;
		transition: all 0.1s ease-in-out;
		:hover {
			transform: scale(1.4);
		}
	}
`;

export const Stats = styled.div`
	display: grid;
	grid-template-columns: max-content max-content;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const GitHubStatsWrapper = styled.section`
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

export const Copyrights = styled.p``;

export const Stat = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})`
	width: max-content;
	display: flex;
	align-items: center;
	gap: 0.25rem;

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
