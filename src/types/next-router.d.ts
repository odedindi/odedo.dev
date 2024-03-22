import { NextRouter } from "next/router";
import i18nConfig from "../../i18n.config";

declare module "next/router" {
	export type Language = typeof i18nConfig.defaultLocale;
	export function useRouter(): Omit<NextRouter, "locale" | "locales"> & {
		locale: Language;
		locales: Language[];
	};
}
