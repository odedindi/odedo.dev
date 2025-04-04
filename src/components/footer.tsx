"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { Github } from "./icons/github";
import { LinkedIn } from "./icons/linkedin";
import { X } from "./icons/x";

const isEven = (n: number) => n % 2 === 0;

const socialLinks = [
	{
		name: "github",
		href: "https://github.com/odedindi",
		Icon: Github,
	},
	{
		name: "linkedin",
		href: "https://linkedin.com/in/odedw/",
		Icon: LinkedIn,
	},
	{
		name: "twitter",
		href: "https://x.com/odedindi",
		Icon: X,
	},
] as const;

export function Footer() {
	const t = useTranslations("footer");

	return (
		<footer className="border-t py-8">
			<div className="container px-4 m-auto">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">{t("copyright")}</p>

					<div className="flex items-center gap-4">
						{socialLinks.map(({ name, href, Icon }, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.2, rotate: isEven(i) ? 5 : -5 }}
								whileTap={{ scale: 0.9 }}
							>
								<Link
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-muted-foreground hover:text-foreground transition-colors"
									aria-label={t(`social.${name}`)}
								>
									<Icon className="size-5" />
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
