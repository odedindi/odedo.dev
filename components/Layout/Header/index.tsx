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
			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
				rel="stylesheet"
			/>

			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
				rel="stylesheet"
			/>
			<link rel="manifest" href="/manifest.json" />
			<meta name="theme-color" content="#fff" />
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
		</Head>
	</>
);

export default Header;
