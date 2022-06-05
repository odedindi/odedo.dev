import * as React from 'react';
// ================== styles ==================
// ================ components ================
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import Providers from '../Providers';
// ============================================
import gsap from 'gsap';
import MouseTracker from 'components/MouseTracker';
import Main from './MainContentContainer';

type PageLayoutProps = {
	title: string;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => (
	<Providers>
		<Header title={title} />
		<MouseTracker numOfCircles={4} />

		<Navigation />

		<Main>{children}</Main>

		<Footer />
	</Providers>
);

export default PageLayout;
