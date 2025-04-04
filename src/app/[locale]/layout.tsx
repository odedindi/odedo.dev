import type { Metadata } from "next";
import { type Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

import type { PropsWithChildren } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

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
			className="scroll-smooth"
		>
			<body
				className={`${inter.className} antialiased transition-all duration-200 ease`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>
						<main className="min-h-screen">
							<Header />
							{children}
							<Footer />
						</main>
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
