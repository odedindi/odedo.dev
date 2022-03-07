import type { AppProps } from 'next/app';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Providers from 'src/providers';

const MyApp = ({ Component, pageProps }: AppProps) => {
	NProgress.configure({ showSpinner: false });
	Router.events.on('routeChangeStart', () => NProgress.start());
	Router.events.on('routeChangeComplete', () => NProgress.done());
	Router.events.on('routeChangeError', () => NProgress.done());

	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
};
export default MyApp;
