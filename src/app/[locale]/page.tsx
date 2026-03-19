import { type Locale, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { About } from "@/app/[locale]/sections/about";
import { Contact } from "@/app/[locale]/sections/contact";
import Hero from "@/app/[locale]/sections/hero";
import Projects from "@/app/[locale]/sections/projects";
import { Skills } from "@/app/[locale]/sections/skills";
import { JsonLd } from "@/components/json-ld";
import { Navigation } from "@/components/navigation";
import { PixelCursor } from "@/components/pixel-cursor";
import { ScanlineOverlay } from "@/components/scanline-overlay";
import { routing } from "@/i18n/routing";
import { projects, siteConfig, socialLinks } from "@/lib/site-config";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://odedo.dev";

function buildJsonLd(locale: Locale) {
	const profilePage = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		dateCreated: "2024-01-01T00:00:00+01:00",
		dateModified: new Date().toISOString(),
		inLanguage: locale,
		mainEntity: {
			"@type": "Person",
			"@id": `${SITE_URL}/#person`,
			name: siteConfig.name,
			alternateName: "odedo",
			jobTitle: siteConfig.title,
			description:
				"Full-Stack Developer based in Obwalden, Switzerland. Building AI-powered web applications with Next.js, TypeScript, and modern tooling.",
			url: SITE_URL,
			image: {
				"@type": "ImageObject",
				url: `${SITE_URL}/assets/me.jpg`,
				contentUrl: `${SITE_URL}/assets/me.jpg`,
			},
			homeLocation: {
				"@type": "Place",
				name: siteConfig.location,
			},
			knowsAbout: [
				"Next.js",
				"React",
				"TypeScript",
				"Node.js",
				"GraphQL",
				"AI development",
				"LLM integration",
				"Full-Stack Development",
			],
			sameAs: socialLinks.map((s) => s.href),
			hasOccupation: {
				"@type": "Occupation",
				name: siteConfig.title,
				description: siteConfig.tagline,
			},
			workExample: projects.map((p) => ({
				"@type": "SoftwareApplication",
				name: p.title,
				description: p.description,
				applicationCategory: "WebApplication",
				operatingSystem: "Web Browser",
				...(p.liveUrl ? { url: p.liveUrl } : {}),
				...(p.githubUrl ? { codeRepository: p.githubUrl } : {}),
				programmingLanguage: p.tags,
				author: {
					"@type": "Person",
					"@id": `${SITE_URL}/#person`,
				},
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "CHF",
				},
			})),
		},
	};

	return profilePage;
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
	const { locale } = await params;
	const requestLocale = hasLocale(routing.locales, locale)
		? locale
		: routing.defaultLocale;
	setRequestLocale(requestLocale);
	const jsonLd = buildJsonLd(requestLocale);

	return (
		<>
			<JsonLd schema={jsonLd} />
			<main className="relative min-h-screen overflow-x-hidden">
				<PixelCursor />
				<ScanlineOverlay />
				<Navigation />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
