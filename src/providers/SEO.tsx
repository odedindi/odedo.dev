import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const defaultSEO = {
	title: 'Oded Winberger CV',
	description: 'Oded Winberger GraphQL CV',
};

export type SEOProps = {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
};

const extendSEO = (options: SEOProps) => ({
	...defaultSEO,
	...options,
});

const SEOProvider: React.FC<SEOProps> = ({
	title,
	description,
	image,
	url,
}) => (
	<>
		<DefaultSeo {...extendSEO({ title, description, image, url })} />
		<Head>
			<title>{`Oded Winberger GraphQL CV`}</title>
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#fff" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta name="description" content="Oded Winberger GraphQL CV" />
			<meta name="keywords" content="Oded Winberger GraphQL CV" />
			<meta name="application-name" content="Oded Winberger GraphQL CV" />
			<link data-react-helmet="true" rel="icon" href="/favicon.ico" />
		</Head>
	</>
);

export default SEOProvider;
