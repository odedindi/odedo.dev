// =============== React & Next ===============
import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// ================ constants =================
import { isDev } from 'utils/constants';
// ================== styles ==================
import * as S from './style';
// =================== icons ==================
import { faBars } from '@fortawesome/free-solid-svg-icons';
// =============== components =================
import Slidebar from './Slidebar';
// ============================================

const Navigation = () => {
	const { pathname } = useRouter();
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const routes = {
		home: '/' as Page,
		about: '/about' as Page,
		portfolio: '/portfolio' as Page,
		projects: '/projects' as Page,
		test: '/test' as Page,
	};

	const RoutesDev = {
		home: routes.home,
		about: routes.about,
		portfolio: routes.portfolio,
		test: routes.test,
	};

	const RoutesProd = {
		home: routes.home,
		about: routes.about,
	};

	const pages = isDev
		? Object.keys(RoutesDev).map((pageKey) => ({
				pageKey: pageKey as PageKey,
				route: RoutesDev[pageKey as keyof typeof RoutesDev],
		  }))
		: Object.keys(RoutesProd).map((pageKey) => ({
				pageKey: pageKey as PageKey,
				route: RoutesProd[pageKey as keyof typeof RoutesProd],
		  }));

	return (
		<S.Nav>
			<Link passHref href="/">
				<S.Logo />
			</Link>

			<S.MenuIcon onClick={toggle} icon={faBars} />

			<Slidebar
				toggle={toggle}
				isOpen={isOpen}
				pages={pages.filter(
					({ pageKey }: { pageKey: PageKey }) => pathname !== routes[pageKey],
				)}
			/>
		</S.Nav>
	);
};

export default Navigation;
