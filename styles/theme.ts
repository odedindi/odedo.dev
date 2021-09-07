const exampleTheme = {
	light: {
		bg: {
			primary: '#eff0f5',
			secondary: '#ffffff',
			inset: '#e2e4e8',
			input: 'rgba(65,67,78,0.12)',
		},
		text: {
			primary: '#050505',
			secondary: '#2f3037',
			tertiary: '#525560',
			quarternary: '#9194a1',
			placeholder: 'rgba(82,85,96,0.5)',
			onPrimary: '#ffffff',
		},
		// ...
	},

	dark: {
		bg: {
			primary: '#050505',
			secondary: '#111111',
			inset: '#111111',
			input: 'rgba(191,193,201,0.12)',
		},
		text: {
			primary: '#fbfbfc',
			secondary: '#e3e4e8',
			tertiary: '#a9abb6',
			quarternary: '#6c6f7e',
			placeholder: 'rgba(145,148,161,0.5)',
			onPrimary: '#050505',
		},
		// ...
	},
};

const light = {
	colors: {
		background: {
			primary: '#F2EDE7',
			secondary: '#CED7D5',
			menu: '#0677a1',
			paragraph: '#CED7D5',
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
			primary: '#59253a',
			secondary: '#0677a1',
		},
	},
};
const dark = {
	colors: {
		background: {
			primary: '#2f4454',
			secondary: '#2E343B',
			menu: '#859D96',
			paragraph: '#1D1C1D',
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
			primary: '#8a6675',
			secondary: '#82bad0',
		},
	},
};

const defaultTheme = {
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

export const lightTheme = { ...defaultTheme, ...light };
export const darkTheme = { ...defaultTheme, ...dark };
