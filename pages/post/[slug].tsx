import * as React from 'react';
import * as S from 'components/Mdx/style';
import { useRouter } from 'next/router';

import ms from 'ms';

import Markdown from 'markdown-to-jsx';

import githubCms from '../../lib/github-cms';
import Head from 'next/head';

import { baseUrl } from 'utils/constants';
import PageLayout from 'components/Layout';

const Youtube = (props: any) => {
	const { videoId, width = '100%', height = 366 } = props;
	const src = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="youtube-container">
			<iframe
				width={width}
				height={height}
				src={src}
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen={true}
			/>
		</div>
	);
};

const Post = ({ post }: any) => {
	const router = useRouter();

	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);
	if (!isMounted) return null;

	if (router.isFallback) {
		return (
			<>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				404 - Page not found! loading...
			</>
		);
	}

	return (
		<PageLayout title={post.title}>
			<Head>
				<meta name="description" content={post.summary} />

				<meta name="twitter:card" content="summary_large_image" />

				<meta property="og:site_name" content="My Blog App" />
				<meta property="og:url" content={post.url} />
				<meta property="og:title" content={post.title} />
				<meta property="og:description" content={post.summary} />
				{post.image && <meta property="og:image" content={post.image} />}
			</Head>
			<S.MdxPost>
				<div className="time">
					Published {ms(Date.now() - post.createdAt, { long: true })} ago
				</div>
				<h1>{post.title}</h1>

				<Markdown
					options={{
						overrides: {
							Youtube: { component: Youtube },
						},
					}}>
					{post.content}
				</Markdown>
			</S.MdxPost>
		</PageLayout>
	);
};

export const getStaticPaths = async () => {
	const postList = await githubCms.getPostList();
	const paths = postList.map((post: any) => ({
		params: {
			slug: post.slug,
		},
	}));

	return {
		paths,
		fallback: true,
	};
};

export async function getStaticProps({ params }: any) {
	let post = null;

	try {
		post = await githubCms.getPost(params.slug);
	} catch (err: any) {
		if (err.status !== 404) {
			throw err;
		}
	}

	post.url = `${baseUrl}post/${post.slug}`;
	post.summary = `${post.content.substr(0, 100)}`;

	return {
		props: {
			post,
		},
		revalidate: 2,
	};
}

export default Post;
