"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

import { SectionTitle } from "./section-title";

export default function Resume() {
	const t = useTranslations("resume");

	return (
		<div className="container px-4 m-auto">
			<SectionTitle title={t("title")} description={t("description")} />
			<motion.div
				className="flex justify-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 5 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Button
					size="lg"
					className=" flex items-center gap-2 hover:bg-gradient-to-r from-purple-600 to-violet-600 duration-300"
					asChild
				>
					<a
						href="https://rxresu.me/oded.winberger/software-developer"
						download
					>
						<FileText className="size-5" />
						{t("download")}
					</a>
				</Button>
			</motion.div>
		</div>
	);
}
