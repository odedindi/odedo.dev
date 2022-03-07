/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	webpack: (config, options) => {
		config.experiments = {
			topLevelAwait: true,
			layers: true,
		};
		return config;
	},
};
