import { defaultSEO, extendSEO } from './seo';

const routes = {
	home: {
		label: 'Home',
		path: '/',
		seo: defaultSEO,
	},
	about: {
		label: 'About',
		path: '/about',
		seo: extendSEO({
			title: 'About',
			url: 'about',
		}),
	},
	projects: {
		label: 'Projects',
		path: '/projects',
		seo: extendSEO({
			title: 'Projects',
			description: 'What I’m working on.',
			url: 'projects',
		}),
	},
	blog: {
		label: 'Blog',
		path: '/blog',
		seo: extendSEO({
			title: 'Blog',
			description: 'Thinking out loud about software design and development.',
			// image: 'meta/overthought.png',
			url: 'Blog',
		}),
	},
	bookmarks: {
		label: 'Bookmarks',
		path: '/bookmarks',
		seo: extendSEO({
			title: 'Bookmarks',
			description: 'Internet things, saved for later.',
			// image: 'meta/bookmarks.png',
			url: 'bookmarks',
		}),
	},
	ama: {
		label: 'Ask Me Anything',
		path: '/ama',
		seo: extendSEO({
			title: 'Ask Me Anything',
			description: 'Answering questions, just for fun.',
			// image: 'meta/ama.png',
			url: 'ama',
		}),
	},
	stack: {
		label: 'Stack',
		path: '/stack',
		seo: extendSEO({
			title: 'Stack',
			description: 'My favorite tools and software.',
			// image: 'meta/stack.png',
			url: 'stack',
		}),
	},
	portfolio: {
		label: 'Portfolio',
		path: '/portfolio',
		seo: extendSEO({
			title: 'My Portfolio',
			description: 'My Software and web projects so far.',
			// image: 'meta/portfolio.png',
			url: 'portfolio',
		}),
	},
};

export default routes;
