// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './styles';
import { useMantineTheme } from '@mantine/core';
// ================== querys ==================
import { useQuery } from 'react-query';
// ================== icons ===================
import { ForkOutlined, StarOutlined } from '@ant-design/icons';
// ================== utils ===================
import { getGithubStats } from 'utils/getGithubstats';
// ================ components ================
import CreateAnimation from 'components/CreateAnimation';
// ============================================

type StatsResult = {
	stars: number;
	forks: number;
};

type GithubStatsButton = {
	link: string;
	title: string;
	value: number | string;
};

const GithubStats = () => {
	const owner = 'odedindi';
	const repo = 'odedo.dev';
	const { data } = useQuery<StatsResult>(
		['api', 'github', 'stats'],
		async () => await getGithubStats({ owner, repo }),
		{
			staleTime: Infinity,
		},
	);

	const statButtons: GithubStatsButton[] = [
		{
			link: `https://github.com/${owner}/${repo}/stargazers`,
			title: 'star',
			value: data?.stars ?? '—',
		},
		{
			link: `https://github.com/${owner}/${repo}/network/members`,
			title: 'fork',
			value: data?.forks ?? '—',
		},
	];

	const StatButton = ({ link, title, value }: GithubStatsButton) => (
		<CreateAnimation type="Hover">
			<S.Stat href={link} dark={useMantineTheme().colorScheme === 'dark'}>
				<S.Icon>
					{title === 'star' ? <StarOutlined /> : <ForkOutlined />}
				</S.Icon>
				<S.Value>{value}</S.Value>
			</S.Stat>
		</CreateAnimation>
	);

	return (
		<S.Stats>
			{statButtons.map(({ link, title, value }) => (
				<StatButton key={title} link={link} title={title} value={value} />
			))}
		</S.Stats>
	);
};

export default GithubStats;
