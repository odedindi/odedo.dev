import deepmerge from "deepmerge";
import { type Formats, hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

const mergeArraysWithoutDuplicates = <T>(target: T[], source: T[]) =>
	Array.from(new Set([...target, ...source]));

export default getRequestConfig(async ({ requestLocale }) => {
	// Typically corresponds to the `[locale]` segment
	const requested = await requestLocale;
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale;

	const userMessages = (await import(`../../messages/${locale}.json`)).default;
	const defaultMessages = (await import(`../../messages/en.json`)).default;
	const messages = deepmerge(defaultMessages, userMessages, {
		arrayMerge: mergeArraysWithoutDuplicates,
	});
	return {
		locale,
		messages,
	};
});

export const formats = {
	dateTime: {
		short: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	number: {
		precise: {
			maximumFractionDigits: 5,
		},
	},
	list: {
		enumeration: {
			style: "long",
			type: "conjunction",
		},
	},
} satisfies Formats;
