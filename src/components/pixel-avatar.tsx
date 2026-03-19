"use client";

import { motion, useWillChange } from "framer-motion";

import { useState } from "react";

import { avatarConfig, themeColors } from "@/lib/site-config";

export function PixelAvatar() {
	const [isHovered, setIsHovered] = useState(false);
	const willChange = useWillChange();
	const { pattern, colors, pixelSize, codeSnippet } = avatarConfig;

	return (
		<motion.div
			className="relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			whileHover={{ scale: 1.05 }}
		>
			{/* Glow effect */}
			<motion.div
				className="absolute inset-0 blur-3xl"
				style={{ backgroundColor: "oklch(0.75 0.2 160 / 0.3)" }}
				initial={{
					scale: 1,
					opacity: 0.3,
				}}
				animate={{
					scale: isHovered ? 1.2 : 1,
					opacity: isHovered ? 0.5 : 0.3,
				}}
			/>

			{/* Main avatar container */}
			<div
				className="relative"
				style={{
					display: "grid",
					gridTemplateRows: `repeat(${pattern.length}, ${pixelSize}px)`,
					gap: 0,
				}}
			>
				{pattern.map((row, rowIndex) => (
					<div
						key={rowIndex}
						style={{
							display: "grid",
							gridTemplateColumns: `repeat(${row.length}, ${pixelSize}px)`,
							gap: 0,
						}}
					>
						{row.map((colorIndex, colIndex) => (
							<motion.div
								key={`${rowIndex}-${colIndex}`}
								style={{
									width: pixelSize,
									height: pixelSize,
									backgroundColor: colors[colorIndex],
								}}
								initial={{ opacity: 0, scale: 0 }}
								animate={{
									opacity: 1,
									scale: 1,
								}}
								transition={{
									delay: (rowIndex * row.length + colIndex) * 0.01,
									duration: 0.2,
								}}
								whileHover={{
									backgroundColor:
										colorIndex !== 0 ? themeColors.primary : "transparent",
									transition: { duration: 0.1 },
								}}
							/>
						))}
					</div>
				))}
			</div>

			{/* Status indicator */}
			{/* <motion.div
				style={{ willChange }}
				className="absolute -bottom-8 left-1/2 -translate-x-1/2"
				animate={{ opacity: [0.5, 1, 0.5] }}
				transition={{ duration: 1.5, repeat: Infinity }}
			>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 bg-primary" />
					<span className="font-[family-name:var(--font-pixel)] text-[8px] text-primary">
						AVAILABLE
					</span>
				</div>
			</motion.div> */}

			{/* Code snippet floating */}
			<motion.div
				style={{ willChange }}
				className="absolute -right-32 top-1/4 font-mono text-[10px] text-muted-foreground/50 whitespace-pre hidden xl:block"
				initial={{
					x: 0,
					opacity: 0.3,
				}}
				animate={{
					x: [0, 10, 0],
					opacity: [0.3, 0.6, 0.3],
				}}
				transition={{ duration: 3, repeat: Infinity }}
			>
				{codeSnippet}
			</motion.div>
		</motion.div>
	);
}
