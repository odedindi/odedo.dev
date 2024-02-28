const defaultLocale = /** @type {"de" | "en"} */ ('de');
const locales = /** @type {(typeof defaultLocale)[]} */ (['de', 'en']);
module.exports = {
	i18n: {
		defaultLocale,
		locales: locales,
	},
	fallbackLng: defaultLocale,
	localePath:
		typeof window === 'undefined'
			? require('path').resolve('./public/locales')
			: '/locales',

	ns: ['common'],
	debug: process.env.NODE_ENV === 'development',
};
