"use client";

import { motion, useInView } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";

import { ContributionGraph } from "@/components/contribution-graph";
import { Button } from "@/components/ui/button";
import type { ContributionCalendar } from "@/lib/github";
import { projects } from "@/lib/site-config";
import { ProjectListItem } from "@/components/project-list-item";

interface ProjectsClientProps {
	calendar: ContributionCalendar | null;
	year: number;
}

export function ProjectsClient({ calendar, year }: ProjectsClientProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

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
						<p className="font-(family-name:--font-pixel) text-[0.75rem] text-primary mb-4 tracking-wider">
							QUEST LOG
						</p>
						<h2 className="font-(family-name:--font-pixel) text-2xl lg:text-3xl font-bold text-foreground text-balance">
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
							className="font-(family-name:--font-pixel) text-[0.75rem] mt-4 md:mt-0"
							onClick={scrollToContact}
						>
							Contact Me <ArrowRight className="w-4 h-4 ml-2" />
						</Button>
					</motion.div>
				</motion.div>

				{/* Projects Grid */}
				<div className="grid lg:grid-cols-2 gap-6">
					{projects.map((project, index) => (
						<ProjectListItem
							key={project.id}
							project={project}
							index={index}
							isInView={isInView}
						/>
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
