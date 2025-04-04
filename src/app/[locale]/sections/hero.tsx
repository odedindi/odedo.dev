"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { useCanvasAnimation } from "@/hooks/use-canvas-animation";

export default function Hero() {
	const t = useTranslations("hero");
	const canvasRef = useRef<HTMLCanvasElement>(null);
	useCanvasAnimation(canvasRef);

	return (
		<>
			<canvas
				ref={canvasRef}
				className="absolute inset-0  dark:opacity-70 opacity-40"
			/>

			<AnimatePresence>
				<motion.div
					className="absolute top-20 right-10 md:right-20 lg:right-40 z-10 hidden md:block"
					initial={{ y: -500, x: 500, opacity: 0, rotate: -100 }}
					animate={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
					exit={{ y: -100, opacity: 0 }}
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 10,
						duration: 1.5,
						delay: 1.5,
					}}
					viewport={{ once: true }}
				>
					<div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
						<Image
							src="/assets/me.jpg"
							alt="my photo"
							width={160}
							height={160}
							className="drop-shadow-lg rounded-lg"
						/>
					</div>
				</motion.div>
			</AnimatePresence>

			<div className="container px-4 py-24 md:py-32">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-3xl mx-auto text-center"
				>
					<motion.h2
						className="text-xl md:text-2xl font-medium text-gray-900 dark:text-muted-foreground mb-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
					>
						{t("greeting")}
					</motion.h2>

					<motion.h1
						className="text-4xl md:text-6xl font-bold mb-4"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						{t("name")}
					</motion.h1>

					<motion.h3
						className="relative text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary to-purple-300 dark:to-violet-200 text-transparent bg-clip-text"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.5 }}
					>
						{t("title")}
					</motion.h3>

					<motion.p
						className="text-lg md:text-xl text-gray-900 dark:text-muted-foreground mb-8 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.5 }}
					>
						{t("description")}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.5 }}
					>
						<Button
							size="lg"
							onClick={(e) => {
								e.preventDefault();
								const projectsSection = document.getElementById("projects");
								if (projectsSection) {
									projectsSection.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className="relative overflow-hidden hover:bg-gradient-to-r from-purple-600 to-violet-600 duration-300"
						>
							<span className="relative z-10">{t("cta")}</span>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					repeat: Number.POSITIVE_INFINITY,
					duration: 2,
					ease: "easeInOut",
				}}
			>
				<a
					href="#skills"
					aria-label="Scroll down"
					onClick={(e) => {
						e.preventDefault();
						const skillsSection = document.getElementById("skills");
						if (skillsSection) {
							skillsSection.scrollIntoView({ behavior: "smooth" });
						}
					}}
				>
					<ArrowDown className="size-8" />
				</a>
			</motion.div>
		</>
	);
}
