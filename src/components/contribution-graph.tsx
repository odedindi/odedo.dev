"use client";

import { motion } from "framer-motion";

import { useIsMounted } from "@/hooks/useIsMounted";
import type { ContributionCalendar } from "@/lib/github";
import { LEVEL_MAP } from "@/lib/github";

interface ContributionGraphProps {
	isInView: boolean;
	calendar: ContributionCalendar | null;
	year: number;
}

const LEVEL_CLASSES: Record<number, string> = {
	0: "bg-secondary",
	1: "bg-primary/30",
	2: "bg-primary/55",
	3: "bg-primary/80",
	4: "bg-primary",
};

export function ContributionGraph({
	isInView,
	calendar,
	year,
}: ContributionGraphProps) {
	const isMounted = useIsMounted();

	const weeks = calendar?.weeks ?? [];
	const totalContributions = calendar?.totalContributions ?? 0;

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ delay: 0.8 }}
			className="mt-16 p-6 border border-border bg-card"
		>
			<div className="flex items-center justify-between mb-4">
				<span className="font-(family-name:--font-pixel) text-[0.5rem] text-muted-foreground">
					CONTRIBUTION ACTIVITY
				</span>
				<span className="font-(family-name:--font-pixel) text-[0.5rem] text-primary">
					{totalContributions.toLocaleString()} commits in {year}
				</span>
			</div>

			{weeks.length === 0 ? (
				<p className="font-(family-name:--font-pixel) text-[0.5rem] text-muted-foreground">
					NO DATA AVAILABLE
				</p>
			) : (
				<div className="flex gap-1 overflow-x-auto pb-1">
					{weeks.map((week, weekIndex) => (
						<div key={weekIndex} className="flex flex-col gap-1">
							{week.contributionDays.map((day) => {
								const level = LEVEL_MAP[day.contributionLevel];
								const colorClass = LEVEL_CLASSES[level] ?? "bg-secondary";
								return isMounted ? (
									<motion.div
										key={day.date}
										className={`w-3 h-3 shrink-0 ${colorClass}`}
										title={`${day.contributionCount} contributions on ${day.date}`}
										initial={{ opacity: 0, scale: 0 }}
										animate={isInView ? { opacity: 1, scale: 1 } : {}}
										transition={{
											delay:
												0.8 +
												(weekIndex * 7 + week.contributionDays.indexOf(day)) *
													0.002,
											duration: 0.2,
										}}
									/>
								) : (
									<div
										key={day.date}
										className={`w-3 h-3 shrink-0 ${colorClass}`}
										title={`${day.contributionCount} contributions on ${day.date}`}
									/>
								);
							})}
						</div>
					))}
				</div>
			)}

			{/* Legend */}
			<div className="flex items-center gap-2 mt-3">
				<span className="font-(family-name:--font-pixel) text-[0.4rem] text-muted-foreground">
					LESS
				</span>
				{[0, 1, 2, 3, 4].map((level) => (
					<div key={level} className={`w-3 h-3 ${LEVEL_CLASSES[level]}`} />
				))}
				<span className="font-(family-name:--font-pixel) text-[0.4rem] text-muted-foreground">
					MORE
				</span>
			</div>
		</motion.div>
	);
}
