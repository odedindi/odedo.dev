// =============== React & Next ===============
import * as React from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/blog';
import * as Style from 'components/Mdx/style';

// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from '../components/Layout';
// ============================================

import githubCms from '../lib/github-cms';
// import { promises as fsPromises } from 'fs';
import ms from 'ms';
import Link from 'next/link';

const BlogPage: NextPage = ({ postList }: any) => {
	const { t } = useTranslation('blog');

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
		'big O etc..',
	];
	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<div>
					<h2>blogin</h2>
				</div>

				<Style.MdxPostList>
					{postList.map((post: any) => (
						<div key={post.slug} className="post-link">
							<Link href="/post/[slug]" as={`/post/${post.slug}`}>
								<a>
									<div className="time">
										{ms(Date.now() - post.createdAt, { long: true })} ago
									</div>
									<div className="title">{post.title}</div>
								</a>
							</Link>
						</div>
					))}
				</Style.MdxPostList>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const postList = await githubCms.getPostList();

	return {
		props: {
			...(await serverSideTranslations(locale as string, [
				'navigation',
				'blog',
				'footer',
			])),
			postList,
		},
		revalidate: 2,
	};
};

export default BlogPage;
