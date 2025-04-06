import { type Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { Contact } from "@/app/[locale]/sections/contact";
import Hero from "@/app/[locale]/sections/hero";
import Projects from "@/app/[locale]/sections/projects";
import Resume from "@/app/[locale]/sections/resume";
import { Skills } from "@/app/[locale]/sections/skills";

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: Locale }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<>
			<section id="home">
				<Hero />
			</section>
			<section id="skills" className="py-20  bg-muted/50 dark:bg-gray-900/25">
				<Skills />
			</section>
			<section id="projects" className="py-20">
				<Projects />
			</section>
			<section id="resume" className="py-20 bg-muted/50 dark:bg-gray-900/25">
				<Resume />
			</section>
			<section id="contact" className="py-20">
				<Contact />
			</section>
		</>
	);
}
