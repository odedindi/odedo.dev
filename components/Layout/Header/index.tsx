// =============== React & Next ===============
import Head from 'next/head';
// ============================================

type HeaderProps = {
	title: string;
};
const Header = ({ title }: HeaderProps) => (
	<>
		<Head>
			<title>{title}</title>

			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
				rel="stylesheet"
			/>

			<link
				href="https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css"
				rel="stylesheet"
			/>
			{/* <link data-react-helmet='true' rel='icon' href='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media' /> */}
		</Head>
	</>
);

export default Header;
