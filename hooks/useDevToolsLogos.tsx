import * as L from 'assets/logos';

export const useDevToolsLogos = () => {
	const logosToBeUsedAsImageSource: LogoId[] = [
		'antd',
		'gsap',
		'nestjs',
		'prisma',
		'recoil',
		'styledComponents',
		'three',
		'vercel',
	];

	const langLogos: DevTool[] = [
		{
			id: 'html',
			logo: L.html,
			link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
		},
		{
			id: 'css',
			logo: L.css,
			link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
		},
		{
			id: 'js',
			logo: L.js,
			link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
		},
		{
			id: 'ts',
			logo: L.ts,
			link: 'https://www.typescriptlang.org/docs/',
		},
		{
			id: 'python',
			logo: L.python,
			link: 'https://www.python.org/doc/',
		},
	];
	const frontLogos: DevTool[] = [
		{
			id: 'react',
			logo: L.react,
			link: 'https://reactjs.org/docs/getting-started.html',
		},
		{
			id: 'next',
			logo: L.next,
			link: 'https://nextjs.org/docs/getting-started',
		},
		{
			id: 'gatsby',
			logo: L.gatsby,
			link: 'https://www.gatsbyjs.com/docs',
		},
		{
			id: 'recoil',
			logo: L.recoil,
			link: 'https://recoiljs.org/docs/introduction/getting-started',
		},
		{
			id: 'redux',
			logo: L.redux,
			link: 'https://redux.js.org/introduction/getting-started',
		},
		{
			id: 'sass',
			logo: L.sass,
			link: 'https://sass-lang.com/documentation',
		},
		{
			id: 'styledComponents',
			logo: L.styledComponents,
			link: 'https://styled-components.com/docs',
		},
		{
			id: 'materialUI',
			logo: L.materialUI,
			link: 'https://material-ui.com/',
		},
		{
			id: 'antd',
			logo: L.antd,
			link: 'https://ant.design/docs/react/introduce',
		},
		{
			id: 'd3',
			logo: L.d3,
			link: 'https://github.com/d3/d3/wiki',
		},
		{
			id: 'three',
			logo: L.three,
			link: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene',
		},
		{
			id: 'gsap',
			logo: L.gsap,
			link: 'https://greensock.com/docs/v3/GSAP',
		},
	];
	const backLogos: DevTool[] = [
		{
			id: 'node',
			logo: L.node,
			link: 'https://nodejs.org/en/docs/',
		},
		{
			id: 'express',
			logo: L.express,
			link: 'https://expressjs.com/en/5x/api.html',
		},
		{
			id: 'nestjs',
			logo: L.nestjs,
			link: 'https://docs.nestjs.com/',
		},
		{
			id: 'django',
			logo: L.django,
			link: 'https://docs.djangoproject.com/en/3.2/contents/',
		},
		{
			id: 'docker',
			logo: L.docker,
			link: 'https://docs.docker.com/',
		},
		{
			id: 'nginx',
			logo: L.nginx,
			link: 'http://nginx.org/en/docs/',
		},
		{
			id: 'digitalOcean',
			logo: L.digitalOcean,
			link: 'https://docs.digitalocean.com/',
		},
		{
			id: 'vercel',
			logo: L.vercel,
			link: 'https://vercel.com/docs',
		},
		{
			id: 'heroku',
			logo: L.heroku,
			link: 'https://devcenter.heroku.com/categories/reference',
		},
	];
	const databaseLogos: DevTool[] = [
		{
			id: 'prisma',
			logo: L.prisma,
			link: 'https://www.prisma.io/',
		},
		{
			id: 'postgressQL',
			logo: L.postgressQL,
			link: 'https://www.postgresql.org/docs/',
		},
		{
			id: 'graphQL',
			logo: L.graphQL,
			link: 'https://graphql.org/learn/',
		},
		{
			id: 'mongoDB',
			logo: L.mongoDB,
			link: 'https://docs.mongodb.com/',
		},
	];
	const designLogos: DevTool[] = [
		{
			id: 'figma',
			logo: L.figma,
			link: 'https://www.figma.com/developers',
		},
		{
			id: 'gimp',
			logo: L.gimp,
			link: 'https://docs.gimp.org/2.10/en/',
		},
	];
	const versionControlLogos: DevTool[] = [
		{
			id: 'github',
			logo: L.github,
			link: 'https://docs.github.com/en',
		},
		{
			id: 'gitlab',
			logo: L.gitlab,
			link: 'https://docs.gitlab.com/',
		},
	];
	const ideLogos: DevTool[] = [
		{
			id: 'pyCharm',
			logo: L.pyCharm,
			link: 'https://www.jetbrains.com/pycharm/guide/',
		},
		{
			id: 'vsCode',
			logo: L.vsCode,
			link: 'https://code.visualstudio.com/docs',
		},
	];
	const packagesManagerLogos: DevTool[] = [
		{
			id: 'npm',
			logo: L.npm,
			link: 'https://docs.npmjs.com/',
		},
		{
			id: 'yarn',
			logo: L.yarn,
			link: 'https://classic.yarnpkg.com/en/docs/',
		},
	];

	return {
		logosToBeUsedAsImageSource,
		langLogos,
		frontLogos,
		backLogos,
		databaseLogos,
		designLogos,
		versionControlLogos,
		ideLogos,
		packagesManagerLogos,
	};
};

export default useDevToolsLogos;
