"use client";

import { motion, useInView } from "framer-motion";

import { useRef, useState } from "react";

import { skillCategories } from "@/lib/site-config";

export function Skills() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	return (
		<section
			id="skills"
			className="py-32 px-8 relative overflow-hidden"
			ref={ref}
		>
			{/* Retro grid background */}
			<div className="absolute inset-0 retro-grid opacity-30" />

			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-center mb-16"
				>
					<p className="font-[family-name:var(--font-pixel)] text-[10px] text-primary mb-4 tracking-wider">
						SKILL TREE
					</p>
					<h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
						Level Up Your
						<span className="text-accent"> Project</span>
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						A diverse tech stack refined through years of building real-world
						applications.
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid md:grid-cols-2 gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.name}
							initial={{ opacity: 0, y: 50 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: categoryIndex * 0.15 }}
							className="border border-border bg-card p-6 relative group"
						>
							{/* Category Header */}
							<div className="flex items-center gap-3 mb-6">
								<div
									className="w-3 h-3"
									style={{ backgroundColor: category.color }}
								/>
								<h3 className="font-[family-name:var(--font-pixel)] text-sm text-foreground">
									{category.name}
								</h3>
							</div>

							{/* Skills */}
							<div className="space-y-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill.name}
										initial={{ opacity: 0, x: -20 }}
										animate={isInView ? { opacity: 1, x: 0 } : {}}
										transition={{
											delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
										}}
										onMouseEnter={() => setHoveredSkill(skill.name)}
										onMouseLeave={() => setHoveredSkill(null)}
										className="relative"
									>
										<div className="flex justify-between items-center mb-2">
											<span className="text-sm text-foreground">
												{skill.name}
											</span>
											<span className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground">
												{skill.level}%
											</span>
										</div>

										{/* Progress Bar - Pixel Style */}
										<div className="h-3 bg-secondary overflow-hidden relative">
											<motion.div
												className="h-full"
												style={{ backgroundColor: category.color }}
												initial={{ width: 0 }}
												animate={isInView ? { width: `${skill.level}%` } : {}}
												transition={{
													delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.5,
													duration: 1,
													ease: "easeOut",
												}}
											/>

											{/* Pixel segments */}
											<div className="absolute inset-0 flex">
												{Array.from({ length: 20 }, (_, i) => (
													<div
														key={i}
														className="flex-1 border-r border-background/20"
													/>
												))}
											</div>
										</div>

										{/* Hover tooltip */}
										{hoveredSkill === skill.name && (
											<motion.div
												initial={{ opacity: 0, y: 5 }}
												animate={{ opacity: 1, y: 0 }}
												className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground font-[family-name:var(--font-pixel)] text-[8px] whitespace-nowrap z-10"
											>
												EXP: {skill.level * 100} XP
											</motion.div>
										)}
									</motion.div>
								))}
							</div>

							{/* Corner decorations */}
							<div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
						</motion.div>
					))}
				</div>

				{/* Achievement Banner */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={isInView ? { opacity: 1, scale: 1 } : {}}
					transition={{ delay: 1 }}
					className="mt-16 text-center"
				>
					<div className="inline-flex items-center gap-4 px-6 py-3 border border-accent bg-accent/10">
						<motion.div
							animate={{ rotate: [0, 10, -10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="text-2xl"
							aria-hidden="true"
						>
							*
						</motion.div>
						<span className="font-[family-name:var(--font-pixel)] text-[10px] text-accent">
							ACHIEVEMENT UNLOCKED: POLYGLOT DEVELOPER
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
