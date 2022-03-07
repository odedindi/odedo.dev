import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	avatar: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const github = 'https://api.github.com/users';
	try {
		const { owner } = req.body;
		const url = `${github}/${owner}`;
		const config = {
			method: 'GET',
			headers: new Headers({ 'Content-Type': 'application/json' }),
		};
		const response = await fetch(url, config);
		const data = await response.json();
		const { avatar_url: avatar } = data;
		res.status(200).send({ avatar });
	} catch (error) {
		console.error(`Request to ${github} failed`);
		res.status(200).send({ avatar: 'https://robohash.org/odedindi' });
	}
};

export default handler;
