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
// import { plan, scanPlans, Stream, stream, streamProps } from 'react-streams';
// import { combineSources } from 'react-streams';
// import { pluck } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';
// import { delay, mapTo, startWith } from 'rxjs/operators';
// import { fromEvent, Observable } from 'rxjs';
// import { interval, of, pipe } from 'rxjs';
// import TicTacToe from 'Projects/Games/TikTakToe';
// import RxJSDictionary from 'Projects/RxJS-Dictionary';
import Spinner from 'components/Spinner';
import FlipOverCard from 'components/FilpOverCard';
// ============================================
type Project = {
	id: string;
	title: string;
	shortDiscription?: string;
	href: string;
};

const Projects: NextPage = () => {
	const { t } = useTranslation('projects');

	const projects: Project[] = [
		{
			id: 'dictionaries',
			title: 'Programming Dictionaries',
			shortDiscription: 'RxJS, GSAP, Three.js',
			href: '/projects/dictionaries/rxjs',
		},
		{
			id: 'jsGames',
			title: 'JS Games',
			shortDiscription: 'Tic Tac Toe',
			href: '/projects/games',
		},
	];
	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<h2>Projects</h2>
				<S.ProjectsCardWrapper>
					{projects.map((project) => (
						<Link key={project.id} passHref href={project.href}>
							<FlipOverCard
								height="10rem"
								width="10rem"
								front={project.title}
								back={project.shortDiscription}
							/>
						</Link>
					))}
				</S.ProjectsCardWrapper>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'projects',
			'footer',
		])),
	},
});

export default Projects;
