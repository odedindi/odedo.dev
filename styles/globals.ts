import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
		sans-serif;
}

a {
	color: inherit;
	text-decoration: none;
}

h1 {
	font-size: 2.25rem;
}

* {
	box-sizing: border-box;
}
`;

const theme = {
	colors: {
		primary: '#0070f3',
		dark: '#3d1e9d',
		bright: '#1e7e9d',
		links: '9d3d1e',
	},
	fontSizes: {
		title: '2.25rem',
		paragraph: '1.25rem',
		copyRights: '1rem',
	},
	breakPoints: {
		phone: '600px',
		tablet: '1024px',
	},
};

export { GlobalStyle, theme };
