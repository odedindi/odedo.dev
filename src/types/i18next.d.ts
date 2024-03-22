import "i18next";
import translation from "../app/i18n/locales/en/translation.json";
import { defaultNS, resources } from "../app/i18n/settings";

declare module "i18next" {
	export interface CustomTypeOptions {
		defaultNS: defaultNS;
		resources: (typeof resources)["en"];
	}
}
