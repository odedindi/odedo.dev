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

a {
	color: inherit;
	text-decoration: none;
}

h1 {
	font-size: ${({ theme }) => theme.fontSizes.h1};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}
h2 {
	font-size: ${({ theme }) => theme.fontSizes.h2};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}
h3 {
	font-size: ${({ theme }) => theme.fontSizes.h3};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}
h4 {
	font-size: ${({ theme }) => theme.fontSizes.h4};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}
h5 {
	font-size: ${({ theme }) => theme.fontSizes.h5};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}
h6 {
	font-size: ${({ theme }) => theme.fontSizes.h6};
	line-height: ${({ theme }) => theme.lineHeights.heading}
}

p {
	font-size: ${({ theme }) => theme.fontSizes.p};
	line-height: ${({ theme }) => theme.lineHeights.body};
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
