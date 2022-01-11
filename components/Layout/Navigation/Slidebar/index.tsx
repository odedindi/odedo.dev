// =============== React & Next ===============
import * as React from 'react';
import Link from 'next/link';
// ================== styles ==================
import * as S from './style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// ================ components ================
import Button from 'components/Button';
import Modal from 'components/Modal/custom';
// ============================================

type SlidebarProps = {
	isOpen: boolean;
	toggle: () => void;
	pages: { pageKey: PageKey; route: PageRoute }[];
};

const Slidebar = ({ isOpen, pages, toggle }: SlidebarProps) => {
	const { t } = useTranslation('navigation');
	return (
		<Modal isOpen={isOpen} toggle={toggle}>
			<S.Menu>
				{pages
					.sort((a, b) =>
						a.pageKey === 'dictionaries' ||
						b.pageKey === 'dictionaries' ||
						a.pageKey < b.pageKey
							? -1
							: a.pageKey > b.pageKey
							? 1
							: 0,
					)
					.map(({ pageKey, route }) => (
						<Link key={pageKey} passHref href={route}>
							<S.MenuItem onClick={toggle}>{t(`${pageKey}`)}</S.MenuItem>
						</Link>
					))}
			</S.Menu>
		</Modal>
	);
};

export default Slidebar;
