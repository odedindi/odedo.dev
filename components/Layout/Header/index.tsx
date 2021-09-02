// =============== React & Next ===============
import Head from 'next/head';
// ============================================

type HeaderProps = {
	title: string;
};
const Header = ({ title }: HeaderProps) => (
	<>
		<Head>
			<title>{`Oded Winberger Software & Web - ${title}`}</title>
			<meta charSet="utf-8" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="theme-color" content="#fff" />
			<meta name="description" content="Oded Winberger Software & Web" />
			<meta name="keywords" content="Oded Winberger Software & Web" />
			<meta name="application-name" content="Oded Winberger Software & Web" />
			<meta
				name="apple-mobile-web-app-title"
				content="Oded Winberger Software & Web"
			/>
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="default" />
			<meta name="format-detection" content="telephone=no" />
			<meta name="mobile-web-app-capable" content="yes" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/assets/icons/apple/apple-touch-icon-180x180.png"
			/>
			<link
				data-react-helmet="true"
				rel="icon"
				type="image/png"
				href="/favicon.png"
			/>
			<link rel="shortcut icon" type="image/png" href="/favicon.png" />
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
				rel="stylesheet"
			/>
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
				rel="stylesheet"
			/>
		</Head>
	</>
);

export default Header;
