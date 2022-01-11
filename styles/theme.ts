import { DefaultTheme } from 'styled-components';
const light = {
	colors: {
		background: {
			primary: '#F2EDE7',
			secondary: '#CED7D5',
			menu: '#0677a1',
			paragraph: '#CED7D5',
			devToolsContainer: '#aaa',
		},
		text: {
			primary: '	#1D1C1D',
			secondary: '#2E343B',

			placeholder: '822F1C',
			onPrimary: '#1f8baa',
		},
		primary: '#0070f3',
		logo: {
			logo: '#2f4454',
			dark: '#2f3847',
			bright: '#c57f1e',
		},
		naviAndContactButtons: {
			primary: '#0677a1',
			secondary: '#59253a',
		},
	},
};
const dark: ThemeColors = {
	colors: {
		background: {
			primary: '#2f4454',
			secondary: '#2E343B',
			menu: '#859D96',
			paragraph: '#1D1C1D',
			devToolsContainer: '#444',
		},
		text: {
			primary: '	#F2EDE7',
			secondary: '#98b6d5',

			placeholder: '822F1C',
			onPrimary: '#E68729',
		},
		primary: '#0070f3',
		logo: {
			logo: '#2f4454',
			dark: '#2f3847',
			bright: '#c57f1e',
		},
		naviAndContactButtons: {
			primary: '#82bad0',
			secondary: '#8a6675',
		},
	},
};

const fonts = {
	fontSizes: {
		small: '0.8rem',
		p: '1rem',
		h6: '1.25rem',
		h5: '1.5rem',
		h4: '1.75rem',
		h3: '2rem',
		h2: '2.2rem',
		h1: '2.5rem',
	},
	fontWeights: {
		body: 400,
		subheading: 500,
		link: 600,
		bold: 700,
		heading: 800,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.75,
		code: 1.6,
		logo: '2.125rem',
	},
	// ...
};
export type ThemeColors = typeof light;
export type ThemeFonts = typeof fonts;
export const lightTheme: DefaultTheme = { ...fonts, ...light };
export const darkTheme: DefaultTheme = { ...fonts, ...dark };
