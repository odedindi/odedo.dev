"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

import { Canvas } from "@react-three/fiber";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import HilbertLinesScene from "@/components/Three/HilbertLinesScene";
import { Button } from "@/components/ui/button";

export default function Hero() {
	const t = useTranslations("hero");

	const ref = useRef<HTMLDivElement>(null!);

	return (
		<div ref={ref} className="relative h-[calc(100vh-4rem)] w-full">
			<Canvas
				className="absolute inset-0"
				eventSource={ref}
				eventPrefix="client"
			>
				<perspectiveCamera position={[0, 0, 300]} fov={-45} />
				<HilbertLinesScene />
			</Canvas>

			<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
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
							className="text-xl md:text-2xl font-medium text-current/75 dark:text-muted/75 mb-2"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							{t("greeting")}
						</motion.h2>

						<motion.h1
							className="text-4xl md:text-6xl font-bold mb-4 text-current dark:text-muted"
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
					<Link href="#skills" aria-label="Scroll down">
						<ArrowDown className="size-8" />
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
