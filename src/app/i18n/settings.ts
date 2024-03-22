import type { Namespace, InitOptions } from "i18next";
import type { Language } from "next/router";
import i18nConfig from "../../../i18n.config";
import translationEn from "./locales/en/translation.json";
import translationDe from "./locales/de/translation.json";
import translationHe from "./locales/he/translation.json";

export const defaultNS = "translation";

export const resources = {
	en: { translation: translationEn },
	de: { translation: translationDe },
	he: { translation: translationHe },
};

export const getOptions = (
	lng: Language = i18nConfig.defaultLocale,
	ns: Namespace = defaultNS,
): InitOptions => ({
	debug: process.env.NODE_ENV === "development",
	supportedLngs: i18nConfig.locales,
	fallbackLng: i18nConfig.defaultLocale,
	lng,
	fallbackNS: defaultNS,
	defaultNS,
	ns,
	resources,
	preload: resources ? [] : i18nConfig.locales,
});
