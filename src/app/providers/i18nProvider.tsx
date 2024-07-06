"use client";

import { I18nextProvider } from "react-i18next";
import initI18next from "@/app/i18n";
import { type Namespace, createInstance } from "i18next";
import type { FC, PropsWithChildren } from "react";
import type { Language } from "next/router";

const I18nProvider: FC<
	PropsWithChildren<{ lng: Language; ns?: Namespace }>
> = ({ children, lng, ns }) => {
	const i18n = createInstance();

	initI18next({ lng, ns, i18n }).catch(console.error);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
