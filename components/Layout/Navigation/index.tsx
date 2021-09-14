// =============== React & Next ===============
import { useRouter } from 'next/router';
// ================== hooks ===================
// ================ constants =================
import { isDev } from 'utils/constants';
// ================== styles ==================
import * as S from '../style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// =============== components =================
import Button from 'components/Button';
// ============================================

const Navigation = () => {
	const { t } = useTranslation('navigation');
	const { pathname, push } = useRouter();

	enum Routes {
		home = '/',
		blog = '/blog',
		portfolio = '/portfolio',
		about = '/about',
	}
	const pages = isDev ? Object.keys(Routes) : ['home', 'about'];

	return (
		<S.NavigationWrapper>
			<S.LinksWrapper>
				{pages.map((page) => {
					if (pathname !== Routes[page as Page])
						return (
							<Button
								id={page}
								key={page}
								type="Main"
								text={t(`${page}`)}
								onClick={() => push(Routes[page as Page])}
							/>
						);
				})}
			</S.LinksWrapper>
			<S.DarkModeTogglerWrapper>
				<Button type="DarkModeToggler" />
			</S.DarkModeTogglerWrapper>
		</S.NavigationWrapper>
	);
};

export default Navigation;
