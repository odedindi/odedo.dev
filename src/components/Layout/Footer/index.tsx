import * as React from 'react';
import * as S from './styles';

import { useGithubStats } from 'src/hooks';

import { ActionIcon, Group, Title } from '@mantine/core';
import { Share1Icon, StarIcon } from '@modulz/radix-icons';

export const Footer = () => {
	const owner = 'odedindi';
	const repo = 'odedo.dev';
	const { data: stats } = useGithubStats(owner, repo);
	const statButtons: GithubStatsButton[] = [
		{
			link: `https://github.com/${owner}/${repo}/stargazers`,
			title: 'star',
			value: stats?.stars ?? '—',
		},
		{
			link: `https://github.com/${owner}/${repo}/network/members`,
			title: 'fork',
			value: stats?.forks ?? '—',
		},
	];
	return (
		<S.Footer>
			<Title
				sx={(theme) => ({
					color:
						theme.colorScheme === 'dark'
							? theme.colors.cyan[9]
							: theme.colors.teal[5],
					fontSize: theme.fontSizes.xl,
				})}
			>
				&copy; {new Date().getFullYear()} ODEDINDI
			</Title>
			<Group>
				{statButtons.map(({ link, title, value }) => (
					<StatButton key={title} link={link} title={title} value={value} />
				))}
			</Group>
		</S.Footer>
	);
};

type GithubStatsButton = {
	link: string;
	title: string;
	value: number | string;
};

const StatButton = ({ link, title, value }: GithubStatsButton) => (
	<ActionIcon
		component={'a'}
		href={link}
		target="_blank"
		rel="noopener noreferrer"
	>
		{title === 'star' ? <StarIcon /> : <Share1Icon />}
		<span>{value}</span>
	</ActionIcon>
);
