import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import {
	getMessages,
	getTranslations,
	setRequestLocale,
} from "next-intl/server";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import { notFound } from "next/navigation";
import { getLangDir } from "rtl-detect";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/lib/site-config";

import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://odedo.dev";

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

export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
	const { locale } = await params;
	const t = await getTranslations({
		locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
		namespace: "metadata",
	});

	const title = t("title");
	const description = t("description");

	return {
		metadataBase: new URL(SITE_URL),
		title: {
			default: title,
			template: `%s | ${siteConfig.name}`,
		},
		description,
		keywords: [
			"Full Stack Developer",
			"Next.js",
			"React",
			"TypeScript",
			"AI developer",
			"Switzerland",
			"Obwalden",
			siteConfig.name,
		],
		authors: [{ name: siteConfig.name, url: SITE_URL }],
		creator: siteConfig.name,
		alternates: {
			canonical: "/",
		},
		openGraph: {
			type: "website",
			locale,
			url: SITE_URL,
			siteName: `${siteConfig.name} | Portfolio`,
			title,
			description,
			images: [
				{
					url: "/opengraph-image",
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} — ${siteConfig.title}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			creator: "@odedindi",
			images: ["/opengraph-image"],
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		// To add GSC verification: go to Search Console → Settings → Ownership verification → HTML tag
		// verification: { google: "YOUR_VERIFICATION_CODE_HERE" },
		icons: {
			icon: "/favicon.ico",
		},
	} satisfies Metadata;
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: siteConfig.name,
	alternateName: "odedo",
	url: SITE_URL,
	author: {
		"@type": "Person",
		name: siteConfig.name,
		url: SITE_URL,
	},
};

export default async function LocaleLayout({
	children,
	params,
}: LayoutProps<"/[locale]">) {
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
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
					}}
				/>
			</head>
			<body
				className={`${geist.variable} ${geistMono.variable} ${pressStart2P.variable} font-sans antialiased`}
			>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem={false}
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
