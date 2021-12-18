import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
	storyCurrent: StoryCurrentParagraph[];
	aboutMe: AboutMeParagraph[];
}

const handler = async (_req: NextApiRequest, res: NextApiResponse<Data>) => {
	const links = {
		hacktheclimate: {
			ourTeam: 'https://climatehackathon.github.io/about/',
			website: 'https://hacktheclimate.devpost.com/',
		},
		sentinelII:
			'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2',
		landPro: 'https://landpro.ch',
	};

	try {
		const storyCurrent: StoryCurrentParagraph[] = [
			{
				header: 'storyCurrent.intro',
				content: 'storyCurrent.people',
				href: links.hacktheclimate.ourTeam,
				title: 'The Team',
			},
			{
				header: 'storyCurrent.using',
				content: 'storyCurrent.satellite',
				href: links.sentinelII,
				title: 'Sentinel-2',
			},
			{
				header: 'storyCurrent.for',
				content: 'storyCurrent.landpro',
				href: links.landPro,
				title: 'LandPro.ch',
			},
		];
		const aboutMe: AboutMeParagraph[] = [
			{
				content: 'aboutMe.first',
			},
			{
				content: 'aboutMe.second',
			},
			{
				content: 'aboutMe.third',
			},
		];

		res.status(200).send({ storyCurrent, aboutMe });
	} catch (error) {
		console.error(`Request failed`);
		res.status(500).send({ storyCurrent: [], aboutMe: [] });
	}
};

export default handler;
