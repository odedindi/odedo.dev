"use client";

import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

import { CheckCircle, Code, Cog, Server } from "lucide-react";
import { useMemo } from "react";

import { SectionTitle } from "./section-title";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 5 },
	show: { opacity: 1, y: 0 },
};

export function Skills() {
	const messages = useMessages();
	const t = useTranslations("skills");

	const categories = useMemo(
		() => [
			{
				title: t("frontend.title"),
				items: Object.values(messages.skills.frontend.items),
				icon: <Code className="size-6" />,
			},
			{
				title: t("backend.title"),
				items: Object.values(messages.skills.backend.items),
				icon: <Server className="size-6" />,
			},
			{
				title: t("devops.title"),
				items: Object.values(messages.skills.devops.items),
				icon: <Cog className="size-6" />,
			},
		],
		[messages.skills, t],
	);

	return (
		<div className="container px-4 m-auto">
			<SectionTitle title={t("title")} />

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{categories.map((category, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 0 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: index * 0.2, duration: 0.125 }}
						whileHover={{
							y: -2.5,
							transition: { duration: 0.125 },
						}}
						className="bg-card rounded-lg p-6 shadow-sm border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
					>
						<motion.div
							className="flex items-center gap-3 mb-6"
							initial={{ x: -20, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
						>
							<motion.div
								className="p-2 rounded-full bg-primary/10 text-primary"
								whileHover={{
									rotate: 360,
									scale: 1.1,
									transition: { duration: 0.5 },
								}}
							>
								{category.icon}
							</motion.div>
							<h3 className="text-xl font-semibold">{category.title}</h3>
						</motion.div>

						<motion.ul
							className="space-y-3"
							variants={container}
							initial="hidden"
							whileInView="show"
							viewport={{ once: true }}
						>
							{category.items.map((skill, skillIndex) => (
								<motion.li
									key={skillIndex}
									className="flex items-center gap-2 group"
									variants={item}
									whileHover={{ x: 5, transition: { duration: 0.2 } }}
									initial={{ x: -20, opacity: 0 }}
									whileInView={{ x: 0, opacity: 1 }}
									viewport={{ once: true }}
									transition={{
										delay: (index + skillIndex) * 0.2 + 0.2,
										duration: 0.5,
									}}
								>
									<CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
									<span>{skill}</span>
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				))}
			</div>
		</div>
	);
}
