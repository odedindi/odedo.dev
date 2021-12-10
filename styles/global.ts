import { css, createGlobalStyle } from 'styled-components';

const theme = {
	colors: {
		primary: '#0070f3',
		logo: {
			logo: '#2f4454',
			dark: '#2f3847',
			bright: '#c57f1e',
		},
		dark: '#59253a',
		bright: '#0677a1',
		links: '#472f38',
		redAndBlue: {
			1: '#4285f4',
			2: '#5c2018',
			3: '#bc4639',
			4: '#d4a59a',
			background: '#f3e0dc',
		},
		serious: {
			bright: '#265077',
			background: '#022140',
			3: '#494b68',
			4: '#1e4258',
			5: '#2d5f5d',
		},
	},
	fontSizes: {
		title: '2.25rem',
		paragraph: '1.25rem',
		copyRights: '1rem',
	},
};

const GlobalStyle = createGlobalStyle`
* {
	transition: all 500ms;
}
html,
body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
		sans-serif;
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
