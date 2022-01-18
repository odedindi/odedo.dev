import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Providers from '../Providers';
// ============================================
import gsap from 'gsap';
type PageLayoutProps = {
	title: string;
	children: React.ReactNode;
};

const PageLayout = ({ children, title }: PageLayoutProps) => {
	const childrenWrapperRef = React.useRef<HTMLElement>(undefined!);
	React.useEffect(() => {
		gsap.set(childrenWrapperRef.current, { autoAlpha: 1 });
	}, []);

	return (
		<Providers>
			<>
				<Header title={title} />
				<Navigation />

				<S.ChildrenWrapper ref={childrenWrapperRef}>
					{children}
				</S.ChildrenWrapper>

				<Footer />
			</>
		</Providers>
	);
};

export default PageLayout;
