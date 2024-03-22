import type { Metadata } from "next";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { dir } from "i18next";
import Main from "../components/appShell";
import { FC } from "react";

import i18nConfig from "../../../i18n.config";
import { Language } from "next/router";

const defaultSEOProps = {
	title: "Oded Winberger",
	description:
		"Kind of a place to store my stuff, host live projects, that sort of a thing.",
	image: "/assets/odi.png",
	favicon: "/favicon.ico",
	url: "https://odedo.dev",
};

export const metadata: Metadata = {
	title: defaultSEOProps.title,
	description: defaultSEOProps.description,
	abstract: "My personal website",
	openGraph: {
		type: "website",
		title: defaultSEOProps.title,
		description: defaultSEOProps.description,
		locale: "de",
		url: defaultSEOProps.url,
		siteName: "Oded Winberger website",
		images: [{ url: "https://odedo.dev/assets/Oded.jpg" }],
	},
	keywords: ["oded", "winberger", "odedo", "odedo.dev"],
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
	params: { lng: Language };
}>;

const RootLayout: FC<RootLayoutProps> = ({ children, params: { lng } }) => {
	return (
		<html
			lang={lng}
			dir={dir(lng ?? i18nConfig.defaultLocale)}
			data-mantine-color-scheme="dark" // support users with disabled JavaScript
		>
			<head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#fff" />
				<meta name="author" content="Oded Winberger" />
				<link rel="canonical" href={defaultSEOProps.url} />
				<link
					rel="alternate"
					href={`${defaultSEOProps.url}/de`}
					hrefLang="de"
				/>
				<link
					data-react-helmet="true"
					rel="icon"
					href={defaultSEOProps.favicon}
				/>
				<ColorSchemeScript defaultColorScheme="dark" />
			</head>
			<body>
				<MantineProvider defaultColorScheme="dark">
					<Main>{children}</Main>
				</MantineProvider>
			</body>
		</html>
	);
};
export default RootLayout;

export const generateStaticParams = async () =>
	i18nConfig.locales.map((lng) => ({ lng }));
