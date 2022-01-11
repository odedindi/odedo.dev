import * as L from 'assets/logos';

const langLogos: DevTool[] = [
	{
		id: 'HTML',
		logo: L.html,
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	},
	{
		id: 'CSS',
		logo: L.css,
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	},
	{
		id: 'JavaScript',
		logo: L.js,
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		id: 'TypeScript',
		logo: L.ts,
		link: 'https://www.typescriptlang.org/docs/',
	},
	{
		id: 'Python',
		logo: L.python,
		link: 'https://www.python.org/doc/',
	},
];
const frontLogos: DevTool[] = [
	{
		id: 'React.js',
		logo: L.react,
		link: 'https://reactjs.org/docs/getting-started.html',
	},
	{
		id: 'Next.js',
		logo: L.next,
		link: 'https://nextjs.org/docs/getting-started',
	},
	{
		id: 'Gatsby',
		logo: L.gatsby,
		link: 'https://www.gatsbyjs.com/docs',
	},
	{
		id: 'RxJS',
		logo: L.rxjs,
		link: 'https://rxjs.dev/api',
	},
	{
		id: 'Recoil',
		logo: L.recoil,
		link: 'https://recoiljs.org/docs/introduction/getting-started',
	},
	{
		id: 'Redux',
		logo: L.redux,
		link: 'https://redux.js.org/introduction/getting-started',
	},
	{
		id: 'SASS',
		logo: L.sass,
		link: 'https://sass-lang.com/documentation',
	},
	{
		id: 'Styled-Components',
		logo: L.styledComponents,
		link: 'https://styled-components.com/docs',
	},
	{
		id: 'MaterialUI',
		logo: L.materialUI,
		link: 'https://material-ui.com/',
	},
	{
		id: 'Antd',
		logo: L.antd,
		link: 'https://ant.design/docs/react/introduce',
	},
	{
		id: 'Chart.js',
		logo: L.chartjs,
		link: 'https://www.chartjs.org/docs/latest/',
	},
	{
		id: 'D3',
		logo: L.d3,
		link: 'https://github.com/d3/d3/wiki',
	},
	{
		id: 'Three.js',
		logo: L.three,
		link: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene',
	},
	{
		id: 'Gsap',
		logo: L.gsap,
		link: 'https://greensock.com/docs/v3/GSAP',
	},
];
const backLogos: DevTool[] = [
	{
		id: 'Node.js',
		logo: L.node,
		link: 'https://nodejs.org/en/docs/',
	},
	{
		id: 'Express.js',
		logo: L.express,
		link: 'https://expressjs.com/en/5x/api.html',
	},
	{
		id: 'Nest.js',
		logo: L.nestjs,
		link: 'https://docs.nestjs.com/',
	},
	{
		id: 'Django',
		logo: L.django,
		link: 'https://docs.djangoproject.com/en/3.2/contents/',
	},
	{
		id: 'Docker',
		logo: L.docker,
		link: 'https://docs.docker.com/',
	},
	{
		id: 'Nginx',
		logo: L.nginx,
		link: 'http://nginx.org/en/docs/',
	},
	{
		id: 'DigitalOcean',
		logo: L.digitalOcean,
		link: 'https://docs.digitalocean.com/',
	},
	{
		id: 'Vercel',
		logo: L.vercel,
		link: 'https://vercel.com/docs',
	},
	{
		id: 'Heroku',
		logo: L.heroku,
		link: 'https://devcenter.heroku.com/categories/reference',
	},
];
const databaseLogos: DevTool[] = [
	{
		id: 'Prisma',
		logo: L.prisma,
		link: 'https://www.prisma.io/',
	},
	{
		id: 'PostgressQL',
		logo: L.postgressQL,
		link: 'https://www.postgresql.org/docs/',
	},
	{
		id: 'GraphQL',
		logo: L.graphQL,
		link: 'https://graphql.org/learn/',
	},
	{
		id: 'MongoDB',
		logo: L.mongoDB,
		link: 'https://docs.mongodb.com/',
	},
];
const designLogos: DevTool[] = [
	{
		id: 'Figma',
		logo: L.figma,
		link: 'https://www.figma.com/developers',
	},
	{
		id: 'Gimp',
		logo: L.gimp,
		link: 'https://docs.gimp.org/2.10/en/',
	},
];
const versionControlLogos: DevTool[] = [
	{
		id: 'Github',
		logo: L.github,
		link: 'https://docs.github.com/en',
	},
	{
		id: 'Gitlab',
		logo: L.gitlab,
		link: 'https://docs.gitlab.com/',
	},
];
const ideLogos: DevTool[] = [
	{
		id: 'PyCharm',
		logo: L.pyCharm,
		link: 'https://www.jetbrains.com/pycharm/guide/',
	},
	{
		id: 'VSCode',
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

const logosToBeUsedAsImageSource: LogoId[] = [
	'Antd',
	'Chart.js',
	'Gsap',
	'Nest.js',
	'Prisma',
	'Recoil',
	'RxJS',
	'Styled-Components',
	'Three.js',
	'Vercel',
];
const titlesAndIcons = [
	{
		title: 'languages',
		devTools: langLogos,
	},
	{
		title: 'frontend',
		devTools: frontLogos,
	},
	{
		title: 'backend',
		devTools: backLogos,
	},
	{
		title: 'databases',
		devTools: databaseLogos,
	},
	{
		title: 'design',
		devTools: designLogos,
	},
	{
		title: 'versionControl',
		devTools: versionControlLogos,
	},
	{
		title: 'ides',
		devTools: ideLogos,
	},
	{
		title: 'packageManagers',
		devTools: packagesManagerLogos,
	},
];

export const myDevTools = { logosToBeUsedAsImageSource, titlesAndIcons };
export default myDevTools;
