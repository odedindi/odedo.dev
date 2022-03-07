import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	stars: number;
	forks: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const github = 'https://api.github.com/repos';
	try {
		const { owner, repo } = req.body;
		const url = `${github}/${owner}/${repo}`;
		const config = {
			method: 'GET',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		};
		const response = await fetch(url, config);
		const data = await response.json();
		const { stargazers_count: stars = 0, forks = 0 } = data;
		res.status(200).send({ stars, forks });
	} catch (error) {
		console.error(`Request to ${github} failed`);
		res.status(200).send({ stars: 420, forks: 724 });
	}
};

export default handler;
