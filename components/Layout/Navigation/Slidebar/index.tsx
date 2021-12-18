// =============== React & Next ===============
import * as React from 'react';
import Link from 'next/link';
// ================== styles ==================
import * as S from './style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// ================ components ================
import Button from 'components/Button';
import LanguageChanger from 'components/LanguageChanger';
import Modal from 'components/Modal/custom';
// ============================================

type SlidebarProps = {
	isOpen: boolean;
	toggle: () => void;
	pages: { pageKey: PageKey; route: Page }[];
};

const Slidebar = ({ isOpen, pages, toggle }: SlidebarProps) => {
	const { t } = useTranslation('navigation');
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<S.DarkModeTogglerWrapper>
				<Button type="DarkModeToggler" />
			</S.DarkModeTogglerWrapper>
			<S.Menu>
				{pages
					.sort((a, b) =>
						a.pageKey > b.pageKey ? 1 : a.pageKey < b.pageKey ? -1 : 0,
					)
					.map(({ pageKey, route }) => (
						<Link key={pageKey} passHref href={route}>
							<S.MenuItem onClick={toggle}>{t(`${pageKey}`)}</S.MenuItem>
						</Link>
					))}
			</S.Menu>
			<S.LanguageChangerWrapper>
				<LanguageChanger />
			</S.LanguageChangerWrapper>
		</Modal>
	);
};

export default Slidebar;
