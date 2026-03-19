import type { Metadata } from "next";
import { type Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

import type { PropsWithChildren } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";

import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-geist-mono",
});
const pressStart2P = Press_Start_2P({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-pixel",
});

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("title"),
		description: t("description"),
	} satisfies Metadata;
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: PropsWithChildren<{
	params: Promise<{ locale: Locale }>;
}>) {
	const { locale } = await params;
	const direction = getLangDir(locale);
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	setRequestLocale(locale);
	const messages = await getMessages({ locale });

	return (
		<html
			lang={locale}
			dir={direction}
			suppressHydrationWarning
			className="relative scroll-smooth"
		>
			<body
				className={`${geist.variable} ${geistMono.variable} ${pressStart2P.variable} font-sans antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem={false}
						disableTransitionOnChange
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
