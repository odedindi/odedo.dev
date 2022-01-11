import styled, { keyframes } from 'styled-components';

const write = keyframes`
	from, 30% { clip-path: polygon(-20% 0%, -15% 0%, -15% 100%, -20% 100%) }
	70%, to { clip-path: polygon(-15% 0%, 120% 0%, 120% 100%, -15% 100%) }
  `;

export const SlogenWrapper = styled.section`
	letter-spacing: 0.0235rem;
`;

export const MyName = styled.h1`
	color: ${({ theme }) => theme.colors.text.primary};
	font-size: ${({ theme }) => theme.fontSizes.h1};
	letter-spacing: 0.2rem;
`;

export const SVG = styled.svg.attrs({ className: 'center' })`
	stroke-dasharray: 1000;
	stroke-dashoffset: 1000;

	g {
		fill-opacity: 0;
	}
`;
export const GContainer = styled.g.attrs({
	stroke: 'none',
	strokeWidth: '1',
	fill: 'none',
	fillRule: 'evenodd',
})``;

export const SignatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
