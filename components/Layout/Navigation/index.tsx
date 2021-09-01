// =============== React & Next ===============
import { useRouter } from 'next/router';
// ================== styles ==================
import * as S from '../style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// =============== components =================
import Button from '../../Button';
// ============================================
const Navigation = () => {
	const { t } = useTranslation('navigation');
	const { pathname, push } = useRouter();

	enum Routes {
		home = '/',
		about = '/about',
		portfolio = '/portfolio',
	};
	

	return (
		<S.NavigationWrapper>
			<S.LinksWrapper>
				{Object.keys(Routes).map((page) => {
					if (pathname !== Routes[page as Page])
						return (
							<Button
								key={page}
								type="MainButton"
								text={t(`${page}`)}
								onClick={() => push(Routes[page as Page])}
							/>
						);
				})}
			</S.LinksWrapper>
		</S.NavigationWrapper>
	);
};

export default Navigation;
