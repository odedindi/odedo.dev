import styled from 'styled-components';

const colors = {
	moon1: '#EDDDD4',
	moon2: '#FCFAFA',

	sun1: '#FFFFFF',
	sun2: '#FFBE0B',
	sun3: '#FB5607',
};
const animationSpeed = '1s';
const width = 50;
const height = width / 2;

export const Toggle = styled.div`
	box-shadow: 0 0 10px rgba(black, 0.1);
	width: ${`${width}px`};
	height: ${`${height}px`};
	border: 5px solid rgba(${colors.moon2}, 0.125);
	background: rgba(${colors.moon2}, 0.05);
	padding: 20px;
	position: relative;
	border-radius: ${`${width}px`};
	cursor: pointer;
`;

export const Switch = styled.div`
	height: ${`${height - 10}px`};
	width: ${`${width / 2 - 10}px`};
	background: yellow;
	border-radius: ${`${width}px`};
	/* pointer-events: none; */

	transition: left ${animationSpeed} ease, box-shadow ${animationSpeed} ease,
		border ${animationSpeed} ease, top ${animationSpeed} ease;
	background: ${colors.moon1}; /* Old browsers */
	background: linear-gradient(
		135deg,
		rgba(${colors.moon1}, 1) 0%,
		rgba(${colors.moon2}, 1) 50%,
		rgba(${colors.moon1}, 1) 51%,
		rgba(${colors.moon2}, 1) 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
	box-shadow: 0 0 25px 5px ${colors.moon1};
	border: 5px solid rgba(${colors.moon1}, 0.5);

	&::before {
		content: '';
		height: ${`${height - 1}px`};
		width: ${`${width / 2 - 1}px`};
		background: red;

		border-radius: ${`${width}px`};
		background: ${colors.sun1}; /* Old browsers */
		background: radial-gradient(
			ellipse at center,
			rgba(${colors.sun1}, 1) 0%,
			rgba(${colors.sun2}, 1) 50%,
			rgba(${colors.sun3}, 1) 100%
		); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

		transition: opacity ${animationSpeed} ease;
		opacity: 0;
	}

	&[data-time='day'] {
		box-shadow: 0 0 10px 10px ${colors.sun3};
		border: 1px solid rgba(${colors.sun3}, 1) !important;

		&::before {
			opacity: 1;
		}
	}
`;
