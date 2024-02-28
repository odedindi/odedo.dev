/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next';
import { Container, Anchor, Group, Space, Text } from '@mantine/core';

import Layout from 'src/components/Layout';
// import { NavMenu } from 'src/components/NavMenu';
import ProjectCard from 'src/components/ProjectCard';
import dynamic from 'next/dynamic';
import { useMe } from 'src/hooks';
import Link from 'next/link';
import ContactMe from 'src/components/ContactMe';
import { getStaticPropsTranslations } from 'src/utils/i18n';
import { useTranslation, Trans } from 'next-i18next';
import { FC, PropsWithChildren, ReactNode } from 'react';

const Tooltip = dynamic(() => import('src/components/Tooltip'), { ssr: false });

const Home: NextPage = () => {
	const { t } = useTranslation('common');
	const me = useMe().data?.me;

	return (
		<Layout
			pageTitle={me?.tagline}
			headerProps={{
				withAvatar: true,
				title: t('title'), //'Hey there you tech-savvy wanderer!',
				subtitle: t('subtitle'), //'Thanks for looking me up.',
			}}
		>
			{/* <NavMenu /> */}

			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Space h="xl" />
				{t('preface', { returnObjects: true }).map((p, i, arr) => (
					<span key={i}>
						<Text>{p}</Text>
						{i < arr.length - 1 ? <Space h="md" /> : null}
					</span>
				))}
				<Space h="md" />
				<Text>
					<Trans
						i18nKey={'examples.landpro'}
						components={[
							<LinkWithTooltip
								key={'landpro'}
								tooltipContent={
									<img
										src="https://land-pro.vercel.app/_next/image?url=%2Fassets%2Flogos%2Flogo.png&w=64&q=75"
										alt="landpro logo"
									/>
								}
								href="https://land-pro.vercel.app/"
							/>,
						]}
					/>
				</Text>
				<Space h="md" />
				<Text>
					<Trans
						i18nKey={'examples.solr'}
						components={[
							<LinkWithTooltip
								key={'landpro'}
								tooltipContent={
									<img
										src="https://solr.vercel.app/icons/apple-touch-icon.png"
										alt="solr"
										width="75px"
									/>
								}
								href="https://solr.vercel.app/"
							/>,
						]}
					/>
				</Text>
				<Space h="xl" />
				<Group position="apart" style={{ gap: '24px' }}>
					<ProjectCard
						title={t('projectCards.landpro.title')}
						// description={t('projectCards.landpro.description')}
						imageProps={{
							src: 'https://land-pro.vercel.app/favicon.png',
							alt: 'langpro logo',
						}}
						linkProps={{ href: 'https://land-pro.vercel.app/' }}
					/>
					<ProjectCard
						title={t('projectCards.solr.title')}
						// // description={t('projectCards.solr.description')}
						imageProps={{
							src: 'https://solr.vercel.app/icons/apple-touch-icon.png',
							alt: 'solr',
						}}
						linkProps={{ href: 'https://solr.vercel.app/' }}
					/>
				</Group>
			</Container>
			<Space h={'xl'} />
			<ContactMe />
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: { ...(await getStaticPropsTranslations(locale)) },
});

const LinkWithTooltip: FC<
	PropsWithChildren<{ tooltipContent: ReactNode; href: string }>
> = ({ tooltipContent, href, children }) => (
	<Tooltip key={'landpro'} content={tooltipContent}>
		<Anchor
			component={Link}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</Anchor>
	</Tooltip>
);
