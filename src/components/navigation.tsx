"use client";

import { AnimatePresence, motion } from "framer-motion";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site-config";

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-background/90 backdrop-blur-sm border-b border-border"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<motion.button
							onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
							className="font-[family-name:var(--font-pixel)] text-primary text-xs tracking-wider"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{"<OW/>"}
						</motion.button>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-8">
							{navItems.map((item, index) => (
								<motion.button
									key={item.label}
									onClick={() => scrollToSection(item.href)}
									className="font-[family-name:var(--font-pixel)] text-[10px] text-muted-foreground hover:text-primary transition-colors relative group"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
								>
									{item.label}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
								</motion.button>
							))}
						</div>

						{/* CV Link */}
						{/* <div className="hidden md:flex items-center gap-4">
							<motion.a
								href={siteConfig.resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="font-[family-name:var(--font-pixel)] text-[10px] text-accent hover:text-primary transition-colors border border-accent hover:border-primary px-3 py-1.5"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								CV
							</motion.a>
						</div> */}

						{/* Mobile Menu Button */}
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setIsMobileMenuOpen(true)}
						>
							<Menu className="w-5 h-5" />
						</Button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-lg md:hidden"
					>
						<div className="flex flex-col h-full p-6">
							<div className="flex justify-end">
								<Button
									variant="ghost"
									size="icon"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<X className="w-5 h-5" />
								</Button>
							</div>

							<div className="flex flex-col items-center justify-center flex-1 gap-8">
								{navItems.map((item, index) => (
									<motion.button
										key={item.label}
										onClick={() => scrollToSection(item.href)}
										className="font-[family-name:var(--font-pixel)] text-sm text-foreground hover:text-primary transition-colors"
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
									>
										{item.label}
									</motion.button>
								))}
								{/* <motion.a
									href={siteConfig.resumeUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="font-[family-name:var(--font-pixel)] text-sm text-accent hover:text-primary transition-colors"
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: navItems.length * 0.1 }}
								>
									CV
								</motion.a> */}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
