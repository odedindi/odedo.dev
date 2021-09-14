import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		fontSizes: {
			small: string;
			p: string;
			h6: string;
			h5: string;
			h4: string;
			h3: string;
			h2: string;
			h1: string;
		};
		fontWeights: {
			body: number;
			subheading: number;
			link: number;
			bold: number;
			heading: number;
		};
		lineHeights: {
			body: number;
			heading: number;
			code: number;
			logo: string;
		};
		colors: {
			background: {
				primary: string;
				secondary: string;
				menu: string;
				paragraph: string;
			};
			text: {
				primary: string;
				secondary: string;

				placeholder: string;
				onPrimary: string;
			};
			primary: string;
			logo: {
				logo: string;
				dark: string;
				bright: string;
			};
			naviAndContactButtons: {
				primary: string;
				secondary: string;
			};
		};
	}
}
