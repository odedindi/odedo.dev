"use client";

import { motion } from "framer-motion";

import { ExternalLink } from "lucide-react";
import { memo, useState } from "react";

import { Github } from "@/components/icons/github";
import type { Project } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface ProjectListItemProps {
	project: Project;
	isInView?: boolean;
	index: number;
}

export const ProjectListItem = memo(function ProjectListItem({
	project,
	isInView,
	index,
}: ProjectListItemProps) {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	return (
		<motion.article
			key={project.id}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: index * 0.15 }}
			onMouseEnter={() => setHoveredProject(project.id)}
			onMouseLeave={() => setHoveredProject(null)}
			className={"group relative border border-border bg-card overflow-hidden"}
		>
			{/* Project Header Bar */}
			<div className="h-1 w-full" style={{ backgroundColor: project.color }} />

			<div className="p-6 flex flex-col h-full">
				{/* Title Row */}
				<div className="flex items-start justify-between mb-4">
					<div>
						<motion.h3
							className="font-(family-name:--font-pixel) text-sm text-foreground mb-2"
							animate={{
								color:
									hoveredProject === project.id ? project.color : undefined,
							}}
						>
							{project.title}
						</motion.h3>
					</div>
					<div className="flex gap-2">
						{project.githubUrl && (
							<motion.a
								href={project.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-muted-foreground hover:text-(--tag-color) transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label={`View ${project.title} on GitHub`}
								style={{ "--tag-color": project.color } as React.CSSProperties}
							>
								<Github className="w-4 h-4 fill-current" />
							</motion.a>
						)}
						{project.liveUrl && (
							<motion.a
								href={project.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 text-muted-foreground hover:text-(--tag-color) transition-colors"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								aria-label={`View ${project.title} live site`}
								style={{ "--tag-color": project.color } as React.CSSProperties}
							>
								<ExternalLink className="w-4 h-4" />
							</motion.a>
						)}
					</div>
				</div>

				{/* Description */}
				<p className="font-(family-name:--font-pixel) text-muted-foreground text-xs leading-relaxed mb-6 flex-1">
					{project.description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mb-6">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className={cn(
								"font-(family-name:--font-pixel) px-2 py-1 text-[0.5rem] border border-border text-muted-foreground hover:border-(--tag-color) hover:text-(--tag-color) transition-colors cursor-default",
							)}
							style={{ "--tag-color": project.color } as React.CSSProperties}
						>
							{tag}
						</span>
					))}
				</div>

				{/* Stats */}
				<div className="flex gap-6 pt-4 border-t border-border">
					{Object.entries(project.stats).map(([key, value]) => (
						<div key={key}>
							<div
								className="font-(family-name:--font-pixel) text-sm"
								style={{ color: project.color }}
							>
								{value}
							</div>
							<div className="font-(family-name:--font-pixel) text-[0.5rem] text-muted-foreground uppercase">
								{key}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Hover Effect - Pixel corners */}
			<motion.div
				className="absolute inset-0 pointer-events-none"
				initial={{ opacity: 0 }}
				animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
			>
				<div
					className="absolute top-0 left-0 w-4 h-4"
					style={{ backgroundColor: project.color }}
				/>
				<div
					className="absolute bottom-0 right-0 w-4 h-4"
					style={{ backgroundColor: project.color }}
				/>
			</motion.div>
		</motion.article>
	);
});
