/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const { i18n } = require('./next-i18next.config');

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
	},
	reactStrictMode: true,
	i18n,
	react: {
		useSuspense: true,
	},
});
