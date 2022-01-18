import styled from 'styled-components';

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
