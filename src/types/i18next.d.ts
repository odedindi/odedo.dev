import 'i18next';
import type common from '../../public/locales/de/common.json';

interface Resources {
	common: typeof common;
}

declare module 'i18next' {
	export interface CustomTypeOptions {
		defaultNS: 'common';
		resources: Resources;
	}
}
