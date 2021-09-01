import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
	NProgress.configure({ showSpinner: false });
	Router.events.on('routeChangeStart', () => NProgress.start());
	Router.events.on('routeChangeComplete', () => NProgress.done());
	Router.events.on('routeChangeError', () => NProgress.done());

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
};
export default appWithTranslation(MyApp);
