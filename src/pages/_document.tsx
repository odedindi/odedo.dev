/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { ServerStyles, createStylesServer } from '@mantine/next';

const stylesServer = createStylesServer();

export default class MyDocument extends Document {
	static getInitialProps = async (
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						<ServerStyles html={initialProps.html} server={stylesServer} />
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};
	render = () => (
		<Html>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
