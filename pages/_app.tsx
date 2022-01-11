import type { AppProps } from 'next/app';
import * as React from 'react';
import { appWithTranslation } from 'next-i18next';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import 'antd/dist/antd.css';

import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	NProgress.configure({ showSpinner: false });
	Router.events.on('routeChangeStart', () => NProgress.start());
	Router.events.on('routeChangeComplete', () => NProgress.done());
	Router.events.on('routeChangeError', () => NProgress.done());

	return <Component {...pageProps} />;
};
export default appWithTranslation(MyApp);
