import { Namespace, ReactOptions, createInstance, i18n } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import type { Language } from "next/router";

const initI18next = async ({
	lng,
	ns,
	i18n,
}: {
	lng: Language;
	ns?: Namespace;
	i18n?: i18n;
}) => {
	const i18nInstance = i18n ?? createInstance();
	await i18nInstance
		.use(initReactI18next)
		.use(
			resourcesToBackend(
				(language: string, namespace: string) =>
					import(`./locales/${language}/${namespace}.json`),
			),
		)
		.init(getOptions(lng, ns));
	return i18nInstance;
};
export default initI18next;

export async function useTranslation(
	lng: Language,
	ns?: Namespace,
	options: ReactOptions = {},
) {
	const i18nextInstance = await initI18next({ lng, ns });
	return {
		i18n: i18nextInstance,
		resources: i18nextInstance.services.resourceStore.data,
		t: i18nextInstance.getFixedT(
			lng,
			(Array.isArray(ns) ? ns[0] : ns) as Namespace | undefined,
			options?.keyPrefix,
		),
	};
}
