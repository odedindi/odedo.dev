const defaultLocale = /** @type {"de" | "en"} */ ("en");
const locales = /** @type {(typeof defaultLocale)[]} */ (["en", "de"]);

const i18nConfig = {
	locales,
	defaultLocale,
};

export default i18nConfig;
