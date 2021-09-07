// =============== React & Next ===============
import Head from 'next/head';
// ============================================

type HeaderProps = {
	title: string;
};
const Header = ({ title }: HeaderProps) => (
	<>
		<Head>
			<title>{`Oded Winberger - ${title}`}</title>
		</Head>
	</>
);

export default Header;
