import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Providers from '../Providers';
import TransitionLayout from './TransitionLayout';
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
			<TransitionLayout>
				<Header title={title} />
				<Navigation />

				<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
				<Footer />
			</TransitionLayout>
		</Providers>
	);
};

export default PageLayout;
