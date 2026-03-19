import { type Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { About } from "@/app/[locale]/sections/about";
import { Contact } from "@/app/[locale]/sections/contact";
import Hero from "@/app/[locale]/sections/hero";
import Projects from "@/app/[locale]/sections/projects";
import { Skills } from "@/app/[locale]/sections/skills";
import { Navigation } from "@/components/navigation";
import { PixelCursor } from "@/components/pixel-cursor";
import { ScanlineOverlay } from "@/components/scanline-overlay";

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
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
	);
}
