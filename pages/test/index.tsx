// =============== React & Next ===============
import * as React from 'react';
import ReactDOM from 'react-dom';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import Modal from 'components/Modal/custom';
// ============================================

import TicTacToe from 'Games/TikTakToe';
import { MyRxJS } from './experiment';
// ============================================

const Tests: NextPage = () => {
	const { t } = useTranslation('common');

	const [isOpen, setIsOpen] = React.useState(false);
	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const games = [{ title: 'Tic-Tac-Toe', game: <TicTacToe /> }];
	return (
		<PageLayout title={t('title')}>
			<button onClick={openModal}>Open Modal</button>

			{/* <Modal title={games[0].title} isOpen={isOpen} closeModal={closeModal}>
				{games[0].game}
			</Modal> */}

			<Modal
				// title={'RxJS Counter'}
				isOpen={isOpen}
				toggle={closeModal}>
				<TicTacToe />
			</Modal>
			{/* <MyRxJS /> */}
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'common',
			'footer',
		])),
	},
});

export default Tests;
