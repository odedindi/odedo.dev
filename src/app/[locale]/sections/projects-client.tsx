"use client";

import { motion, useInView } from "framer-motion";

import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";

import { ContributionGraph } from "@/components/contribution-graph";
import { Button } from "@/components/ui/button";
import type { ContributionCalendar } from "@/lib/github";
import { projects } from "@/lib/site-config";

interface ProjectsClientProps {
	calendar: ContributionCalendar | null;
	year: number;
}

export function ProjectsClient({ calendar, year }: ProjectsClientProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);

	const scrollToContact = () => {
		const element = document.getElementById("contact");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section id="projects" className="py-32 px-8 relative" ref={ref}>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
				>
					<div>
						<p className="font-[family-name:var(--font-pixel)] text-[10px] text-primary mb-4 tracking-wider">
							QUEST LOG
						</p>
						<h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
							Featured
							<span className="text-primary"> Projects</span>
						</h2>
					</div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3 }}
					>
						<Button
							variant="outline"
							className="font-[family-name:var(--font-pixel)] text-[10px] mt-4 md:mt-0"
							onClick={scrollToContact}
						>
							Contact Me <ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					</motion.div>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid lg:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<motion.article
							key={project.id}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: index * 0.15 }}
							onMouseEnter={() => setHoveredProject(project.id)}
							onMouseLeave={() => setHoveredProject(null)}
							className={`group relative border border-border bg-card overflow-hidden ${
								project.featured ? "lg:row-span-1" : ""
							}`}
						>
							{/* Project Header Bar */}
							<div
								className="h-1 w-full"
								style={{ backgroundColor: project.color }}
							/>

							<div className="p-6">
								{/* Title Row */}
								<div className="flex items-start justify-between mb-4">
									<div>
										<motion.h3
											className="font-[family-name:var(--font-pixel)] text-sm text-foreground mb-2"
											animate={{
												color:
													hoveredProject === project.id
														? project.color
														: undefined,
											}}
										>
											{project.title}
										</motion.h3>
										{project.featured && (
											<span className="font-[family-name:var(--font-pixel)] text-[8px] px-2 py-1 bg-primary/20 text-primary">
												FEATURED
											</span>
										)}
									</div>
									<div className="flex gap-2">
										{project.githubUrl && (
											<motion.a
												href={project.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-muted-foreground hover:text-foreground transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.95 }}
												aria-label={`View ${project.title} on GitHub`}
											>
												<Github className="w-4 h-4" />
											</motion.a>
										)}
										{project.liveUrl && (
											<motion.a
												href={project.liveUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-muted-foreground hover:text-foreground transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.95 }}
												aria-label={`View ${project.title} live site`}
											>
												<ExternalLink className="w-4 h-4" />
											</motion.a>
										)}
									</div>
								</div>

								{/* Description */}
								<p className="text-muted-foreground text-sm leading-relaxed mb-6">
									{project.description}
								</p>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="px-2 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
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
												className="font-[family-name:var(--font-pixel)] text-sm"
												style={{ color: project.color }}
											>
												{value}
											</div>
											<div className="text-[10px] text-muted-foreground uppercase">
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
					))}
				</div>

				{/* GitHub Activity */}
				<ContributionGraph
					isInView={isInView}
					calendar={calendar}
					year={year}
				/>
			</div>
		</section>
	);
}
