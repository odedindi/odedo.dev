// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Router from 'next/router';
// ================== styles ==================
import * as S from 'styles/pages/projects';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import Signature from 'components/Signature';
// ============================================
import TicTacToe from 'Projects/Games/TikTakToe';
import Spinner from 'components/Spinner';
import FlipOverCard from 'components/FilpOverCard';
// ============================================

const Games: NextPage = () => {
	const { t } = useTranslation('projects');

	const games = [
		{
			title: 'Tic Tac Toe',
			href: '/projects/games/tictactoe',
		},
		{
			title: 'Snake',
			href: '/projects/games/snake',
		},
	];
	return (
		<PageLayout title={'title'}>
			<S.PageWrapper>
				<h2>Games</h2>
				{games.map((g) => (
					<Link key={g.title} passHref href={g.href}>
						<a>{g.title}</a>
					</Link>
				))}
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'footer',
		])),
	},
});

export default Games;
