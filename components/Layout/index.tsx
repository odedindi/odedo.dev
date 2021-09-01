// ================== styles ==================
import * as S from './style';
// ================ components ================
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import Navigation from 'components/Layout/Navigation';
// ============================================

type PageLayoutProps = {

	title: string;
	children: React.ReactNode;
};

const PageLayout = ({
	children,
	title,
}: PageLayoutProps) => (
	<S.LayoutWrapper>
		<Header title={title} />
		{/* <Navigation /> */}
		<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		<Footer />
	</S.LayoutWrapper>
);

export default PageLayout;
