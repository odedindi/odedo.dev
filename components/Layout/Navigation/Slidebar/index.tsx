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
	pages: { page: string; route: string }[];
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
					.sort((a, b) => (a.page > b.page ? 1 : a.page < b.page ? -1 : 0))
					.map(({ page, route }) => (
						<Link key={page} passHref href={route}>
							<S.MenuItem onClick={toggle}>{t(`${page}`)}</S.MenuItem>
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