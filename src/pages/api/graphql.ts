import { server } from '../../graphql/server';
const allowCors = (fn: any) => async (req: any, res: any) => {
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://studio.apollographql.com',
	);

	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,OPTIONS,PATCH,DELETE,POST,PUT',
	);
	res.setHeader('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	return await fn(req, res);
};

export const config = {
	api: {
		bodyParser: false,
	},
};
// @ts-ignore
await server.start();
const handler = server.createHandler({
	path: '/api/graphql',
});
export default allowCors(handler);
