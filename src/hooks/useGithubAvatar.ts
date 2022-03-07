import { useQuery } from 'react-query';

type GetGithubAvatar = (body: { owner: string }) => Promise<{
	avatar: string;
}>;
export const getGithubAvatar: GetGithubAvatar = async (body) => {
	const url = `/api/github/avatar`;
	const config = {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(body),
	};
	const response = await fetch(url, config);
	const { avatar } = await response.json();
	return { avatar };
};

type StatsResult = {
	avatar: string;
};

export const useGithubAvatar = (owner: string) =>
	useQuery<StatsResult>(
		['api', 'github', 'avatar'],
		async () => await getGithubAvatar({ owner }),
		{ staleTime: Infinity },
	);
