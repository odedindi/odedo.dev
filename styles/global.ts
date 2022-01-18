import { css, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	transition: all 0.25s ease-in-out;
}
html,
body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
		sans-serif;
	/* height: auto; */
	background: ${({ theme }) => theme.colors.background.primary};
}

body {
	overflow-x: hidden;
}
a {
	color: inherit;
	text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
	line-height: ${({ theme }) => theme.lineHeights.heading};
	margin: 0;
}

h1 {
	font-size: ${({ theme }) => theme.fontSizes.h1};
}
h2 {
	font-size: ${({ theme }) => theme.fontSizes.h2};
}
h3 {
	font-size: ${({ theme }) => theme.fontSizes.h3};
}
h4 {
	font-size: ${({ theme }) => theme.fontSizes.h4};
}
h5 {
	font-size: ${({ theme }) => theme.fontSizes.h5};
}
h6 {
	font-size: ${({ theme }) => theme.fontSizes.h6};
}

p {
	font-size: ${({ theme }) => theme.fontSizes.p};
	line-height: ${({ theme }) => theme.lineHeights.body};
	margin: 0;
}

* {
	box-sizing: border-box;
}
`;

export default GlobalStyle;

export const sharedTransition = (properties: string) => css`
	transition-duration: var(--transition-duration);
	transition-timing-function: linear;
	transition-property: ${properties};
`;
