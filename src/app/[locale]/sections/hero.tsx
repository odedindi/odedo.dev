"use client";

import { motion, useScroll, useTransform, useWillChange } from "framer-motion";

import { ArrowDown } from "lucide-react";
import { useCallback, useRef } from "react";

import { FloatingPixels } from "@/components/floating-pixels";
import { PixelAvatar } from "@/components/pixel-avatar";
import { TypewriterText } from "@/components/typewriter-text";
import { Button } from "@/components/ui/button";
import { heroConfig, siteConfig, socialLinks } from "@/lib/site-config";

export default function Hero() {
	const containerRef = useRef<HTMLElement>(null);
	const willChange = useWillChange();

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const leftX = useTransform(scrollYProgress, [0, 1], [0, -100]);
	const rightX = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

	const scrollToSection = useCallback((sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<section
			ref={containerRef}
			id="hero"
			className="relative min-h-screen flex"
		>
			{/* Left Side - Minimalist */}
			<motion.div
				className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-32 relative z-10"
				style={{ x: leftX, opacity }}
			>
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="max-w-xl"
				>
					<motion.p
						className="font-[family-name:var(--font-pixel)] text-[10px] text-primary mb-4 tracking-wider"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						{heroConfig.subtitle}
					</motion.p>

					<h1 className="font-sans text-5xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
						<span className="block">{siteConfig.name.split(" ")[0]}</span>
						<span className="block text-primary">
							{siteConfig.name.split(" ")[1]}
						</span>
					</h1>

					<div className="h-16 mb-8">
						<TypewriterText />
					</div>

					<motion.p
						className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						{siteConfig.tagline}
					</motion.p>

					<motion.div
						className="flex items-center gap-4 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8 }}
					>
						<Button
							className="font-[family-name:var(--font-pixel)] text-[10px] px-6 py-5"
							onClick={() => scrollToSection("projects")}
						>
							View Work
						</Button>
						<Button
							variant="outline"
							className="font-[family-name:var(--font-pixel)] text-[10px] px-6 py-5"
							onClick={() => scrollToSection("contact")}
						>
							Contact
						</Button>
					</motion.div>

					<motion.div
						className="flex items-center gap-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					>
						{socialLinks.map((social, index) => (
							<motion.a
								key={index}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-primary transition-colors"
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
								aria-label={social.name}
							>
								<social.icon
									className={`fill-white ${social.name === "LinkedIn" ? "size-7.5 [&_rect]:fill-transparent" : "size-5"}`}
								/>
							</motion.a>
						))}
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Right Side - Interactive Rich Design */}
			<motion.div
				className="hidden lg:flex w-1/2 relative overflow-hidden"
				style={{ x: rightX, opacity }}
			>
				<div className="absolute inset-0 retro-grid" />
				<FloatingPixels />

				<div className="relative z-10 flex items-center justify-center w-full">
					<PixelAvatar />
				</div>

				{/* Decorative Elements */}
				<motion.div
					style={{ willChange }}
					className="absolute top-20 right-20 font-[family-name:var(--font-pixel)] text-[10px] text-primary/40"
					animate={{ opacity: [0.4, 1, 0.4] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					{heroConfig.decorativeTexts[0].text}
				</motion.div>

				<motion.div
					style={{ willChange }}
					className="absolute bottom-40 left-20 font-[family-name:var(--font-pixel)] text-[8px] text-accent/40"
					animate={{ opacity: [0.3, 0.8, 0.3] }}
					transition={{ duration: 3, repeat: Infinity, delay: 1 }}
				>
					{heroConfig.decorativeTexts[1].text}
				</motion.div>

				<motion.div
					style={{ willChange }}
					className="absolute top-1/3 right-32 font-[family-name:var(--font-pixel)] text-[8px] text-muted-foreground/30"
					animate={{ opacity: [0.2, 0.6, 0.2] }}
					transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
				>
					{heroConfig.decorativeTexts[2].text}
				</motion.div>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.button
				style={{ willChange }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 1.5, repeat: Infinity }}
				onClick={() => scrollToSection("about")}
				aria-label="Scroll to about section"
			>
				<ArrowDown className="w-6 h-6 text-primary" />
			</motion.button>
		</section>
	);
}
