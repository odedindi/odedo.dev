import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface SectionTitleProps {
	title: string;
	description?: string;
}

export function SectionTitle({ title, description }: SectionTitleProps) {
	return (
		<motion.div
			className="text-center mb-16 bg-red"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
		>
			<h2
				className={cn("text-3xl md:text-4xl font-bold", description && "mb-4")}
			>
				{title}
			</h2>
			<p className="text-lg text-muted-foreground mb-8">{description}</p>
		</motion.div>
	);
}
