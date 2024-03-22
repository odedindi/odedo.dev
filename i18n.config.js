const defaultLocale = /** @type {"de" | "en"| "he"} */ ("en");
const locales = /** @type {(typeof defaultLocale)[]} */ (["en", "de", "he"]);

const i18nConfig = {
	locales,
	defaultLocale,
};

export default i18nConfig;
