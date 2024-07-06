import "i18next";
import { defaultNS, resources } from "../app/i18n/settings";

declare module "i18next" {
	export interface CustomTypeOptions {
		defaultNS: defaultNS;
		resources: (typeof resources)["en"];
	}
}
