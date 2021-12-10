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

	enum Routes {
		home = '/',
		portfolio = '/portfolio',
		about = '/about',
	}
	const pages = (isDev ? Object.keys(Routes) : ['home', 'about']).map(
		(page) => ({ page: page, route: Routes[page as Page] }),
	);

	return (
		<S.Nav>
			<Link passHref href="/">
				<S.Logo />
			</Link>

			<S.MenuIcon onClick={toggle} icon={faBars} />

			<Slidebar
				toggle={toggle}
				isOpen={isOpen}
				pages={pages.filter(({ page }) => pathname !== Routes[page as Page])}
			/>
		</S.Nav>
	);
};

export default Navigation;
