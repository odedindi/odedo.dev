// =============== React & Next ===============
import * as React from 'react';
import { useRouter } from 'next/router';
// ================== hooks ===================
// ================ constants =================
import { isDev } from 'utils/constants';
// ================== styles ==================
import * as S from '../style';
import styled from 'styled-components';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// =============== components =================
import Button from 'components/Button';
import ParticleEffectButton from 'react-particle-effect-button';
import AnimatedButton from 'components/AnimatedButton';

// ============================================

const Navigation = () => {
	const { t } = useTranslation('navigation');
	const { pathname, push } = useRouter();

	enum Routes {
		home = '/',
		portfolio = '/portfolio',
		about = '/about',
	}
	const pages = isDev ? Object.keys(Routes) : ['home', 'about'];

	return (
		<S.NavigationWrapper>
			<S.LinksWrapper>
				{/* {pages.map((page) => {
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
				})} */}
				{pages.map((page, index) => {
					if (pathname !== Routes[page as Page])
						return (
							<AnimatedButton
								key={index}
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
