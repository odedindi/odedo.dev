import express from 'express';
import next from 'next';

import i18next from 'i18next';
import { handle, LanguageDetector } from 'i18next-express-middleware';
import Backend from 'i18next-node-fs-backend';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const requestHandler = app.getRequestHandler();

(async () => {
	await app.prepare();
	await i18next
		.use(Backend)
		.use(LanguageDetector)
		.init({
			// debug: true,
			backend: {
				loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
				addPath: __dirname + '/locales/{{lng}}/{{ns}}.missing.json',
			},
			fallbackLng: 'en',
			preload: ['en', 'de'],
			saveMissing: true,
		});

	const server = express();
	server.use(handle(i18next));

	// handle nextjs routing
	server.get('*', (req: express.Request, res: express.Response) =>
		requestHandler(req, res),
	);

	server.listen(port);
	console.log(`🚀 Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
