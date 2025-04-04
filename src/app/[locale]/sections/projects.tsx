"use client";

import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

import { ImageWithFallback } from "@/components/image-with-fallback";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Github } from "../../../components/icons/github";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

function ProjectCard(project: {
	image: string;
	title: string;
	description: string;
	liveUrl: string;
	codeUrl: string;
	technologies: string[];
}) {
	const t = useTranslations("projects");
	return (
		<Card className="h-full flex flex-col overflow-hidden group border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
			<div className="relative h-48 overflow-hidden">
				<ImageWithFallback
					src={project.image}
					alt={project.title}
					className="object-cover transition-transform duration-350 group-hover:scale-110 w-full h-full"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
			</div>
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex-grow">
				<div className="flex flex-wrap gap-2">
					{project.technologies.map((tech, techIndex) => (
						<Badge
							key={techIndex}
							variant="secondary"
							className="transition-all hover:bg-primary/20"
						>
							{tech}
						</Badge>
					))}
				</div>
			</CardContent>
			<CardFooter className="flex gap-2">
				{project.liveUrl.length ? (
					<Button
						variant="default"
						size="sm"
						asChild
						className="hover:bg-gradient-to-r from-purple-600 to-violet-600 dark:to-violet-800 duration-300"
					>
						<a
							href={project.liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className=" flex items-center gap-2"
						>
							<ExternalLink className="size-4" />
							{t("viewProject")}
						</a>
					</Button>
				) : null}
				{project.codeUrl.length ? (
					<Button
						variant="outline"
						size="sm"
						asChild
						className="transition-all hover:border-primary/50"
					>
						<a
							href={project.codeUrl}
							target="_blank"
							rel="noopener noreferrer"
							className=" flex items-center gap-2"
						>
							<Github className="size-4" />
							{t("viewCode")}
						</a>
					</Button>
				) : null}
			</CardFooter>
		</Card>
	);
}

export default function Projects() {
	const messages = useMessages();
	const t = useTranslations("projects");

	const items = useMemo(
		() => Object.values(messages.projects.items),
		[messages.projects],
	);

	return (
		<div className="container px-4 m-auto">
			<motion.div
				className="text-center mb-16"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.6 }}
			>
				<h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					{t("subtitle")}
				</p>
			</motion.div>

			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				variants={container}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, margin: "-100px" }}
			>
				{items.map((project, index) => (
					<motion.div
						key={index}
						variants={item}
						className="relative"
						whileHover={{
							y: -10,
							transition: { duration: 0.3 },
						}}
					>
						<ProjectCard {...project} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
