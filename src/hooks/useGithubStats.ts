import { useQuery } from 'react-query';

type GetGithubStats = (body: { owner: string; repo: string }) => Promise<{
	stars: number;
	forks: number;
}>;
export const getGithubStats: GetGithubStats = async (body) => {
	const url = `/api/github/stats`;
	const config = {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(body),
	};
	const response = await fetch(url, config);
	const { stars, forks } = await response.json();
	return { stars, forks };
};

type StatsResult = {
	stars: number;
	forks: number;
};

export const useGithubStats = (owner: string, repo: string) =>
	useQuery<StatsResult>(
		['api', 'github', 'stats'],
		async () => await getGithubStats({ owner, repo }),
		{ staleTime: Infinity },
	);
