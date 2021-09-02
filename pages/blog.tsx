// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/portfolio';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from '../components/Layout';
// ============================================

const BlogPage: NextPage = () => {
	const { t } = useTranslation('portfolio');

	const ideasForArticles = [
		'what-lint-code-and-why-linting-important',
		'https://www.perforce.com/blog/qac/what-lint-code-and-why-linting-important',
		

        'bootstrapping a React app with my favorite labraries',
		'bootstrapping a Next app with my favorite labraries',

		'bootstrapping Express server',
        'bootstrapping DRF server',

        'demonstating maping using leaflet',
		'demonstating animation using gsap',
        'demonstating animation using three.js',

        'collaborating on an open source project',

        'using a github repo',
        'husky js',
        '',

        'programing theory',
        'databases theory',

        'data types',
        'big O etc..'
	];
	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<div>
					<h2>blogin</h2>
				</div>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'portfolio',
			'footer',
		])),
	},
});

export default BlogPage;
