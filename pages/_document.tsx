import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import rtlPlugin from 'stylis-plugin-rtl';
import { ServerStyles, createStylesServer } from '@mantine/next';

export default class MyDocument extends Document {
	static getInitialProps = async (
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					// eslint-disable-next-line react/display-name
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			const stylesServer = createStylesServer({
				key: 'odedindi',
				stylisPlugins: [rtlPlugin],
			});

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						<ServerStyles html={initialProps.html} server={stylesServer} />
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};
	render() {
		const { locale } = this.props;
		const dir: 'rtl' | 'ltr' =
			locale === 'he' || locale === 'ara' ? 'rtl' : 'ltr';
		return (
			<Html dir={dir} lang={locale}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
