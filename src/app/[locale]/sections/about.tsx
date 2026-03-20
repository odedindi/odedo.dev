"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

import { aboutContent, highlights, stats } from "@/lib/site-config";

export function About() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section id="about" className="py-32 px-8 relative" ref={ref}>
			<div className="max-w-7xl mx-auto">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left - Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<p className="font-[family-name:var(--font-pixel)] text-[10px] text-primary mb-4 tracking-wider">
							ABOUT ME
						</p>
						<h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground text-balance">
							{aboutContent.title}
							<span className="text-primary">
								{" "}
								{aboutContent.titleHighlight}
							</span>
						</h2>
						{aboutContent.paragraphs.map((paragraph, index) => (
							<p
								key={index}
								className={`text-muted-foreground leading-relaxed mb-8 ${index === 0 ? "text-lg" : ""}`}
							>
								{paragraph}
							</p>
						))}

						{/* Stats */}
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
							{stats.map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									animate={isInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: index * 0.1 + 0.4 }}
									className="text-center p-4 border border-border bg-card"
								>
									<div className="font-[family-name:var(--font-pixel)] text-xl text-primary mb-1">
										{stat.value}
									</div>
									<div className="text-[10px] text-muted-foreground uppercase tracking-wider">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right - Highlights Grid */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="grid grid-cols-2 gap-4"
					>
						{highlights.map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={isInView ? { opacity: 1, scale: 1 } : {}}
								transition={{ delay: index * 0.15 + 0.4 }}
								whileHover={{ scale: 1.02, y: -4 }}
								className="group p-6 border border-border bg-card hover:border-primary transition-all duration-300 relative overflow-hidden"
							>
								{/* Pixel corner decoration */}
								<div className="absolute top-0 right-0 w-4 h-4 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
								<div className="absolute bottom-0 left-0 w-4 h-4 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

								<item.icon className="w-8 h-8 text-primary mb-4" />
								<h3 className="font-[family-name:var(--font-pixel)] text-xs text-foreground mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">
									{item.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-3xl -translate-y-1/2 pointer-events-none" />
		</section>
	);
}
