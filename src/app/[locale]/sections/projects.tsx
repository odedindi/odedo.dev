import { fetchContributions } from "@/lib/github";
import { siteConfig } from "@/lib/site-config";

import { ProjectsClient } from "./projects-client";

export default async function Projects() {
	const currentYear = new Date().getFullYear();
	const calendar = await fetchContributions(
		siteConfig.githubUsername,
		currentYear,
	);

	return <ProjectsClient calendar={calendar} year={currentYear} />;
}
