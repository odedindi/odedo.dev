import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Navigation from 'components/Layout/Navigation';
import Providers from 'components/Providers';
// ============================================
type PageLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const PageLayout = ({ children, title }: PageLayoutProps) => {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;
	return (
		<Providers>
			<S.LayoutWrapper>
				<Header title={title} />
				<Navigation />

				<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
				<Footer />
			</S.LayoutWrapper>
		</Providers>
	);
};

export default PageLayout;
