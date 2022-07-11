import * as React from 'react';
import * as S from './styles';

import { useGithubStats } from 'src/hooks';

import { ActionIcon, Anchor, Group, Text } from '@mantine/core';
import { Share1Icon, StarIcon } from '@modulz/radix-icons';

export const Footer = () => {
	const owner = 'odedindi';
	const repo = 'MyCV';
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
			{/* <Group>
				{statButtons.map(({ link, title, value }) => (
					<StatButton key={title} link={link} title={title} value={value} />
				))}
			</Group> */}
			<Text>
				&copy; 2022{' '}
				<Anchor href="https://odedo.dev" underline={false}>
					ODEDINDI
				</Anchor>
			</Text>
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
