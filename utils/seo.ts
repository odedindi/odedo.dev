import { baseUrl } from './constants';

const baseEmail = 'oded.winberger@gmail.com';

const defaultSEO = {
	title: 'Oded Winberger',
	description:
		'Software & Web, Full Stack developer, passionate about front end and UI, diving good books and family time. live in central Switzerland. Currently developing a project that aims at mitigating climate change and another project that aims at increasing exposure to different APIs.',
};

type SEOProps = {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
};

const extendSEO = (options: SEOProps) => ({
	...defaultSEO,
	...options,
	url: `${baseUrl}/${options.url}`,
});

export { baseEmail, baseUrl, defaultSEO, extendSEO };
