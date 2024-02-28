/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	experimental: {
		// 	topLevelAwait: true,
	},
	i18n,
};
