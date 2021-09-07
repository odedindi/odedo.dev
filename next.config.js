/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

module.exports = withPWA({
	pwa: {
		disable: process.env.NODE_ENV === 'development',
		dest: 'public',
	},
	reactStrictMode: true,
	i18n,
	react: {
		useSuspense: true,
	},
});
