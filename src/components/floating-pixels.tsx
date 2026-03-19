"use client";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";

import { floatingPixelsConfig } from "@/lib/site-config";

export function FloatingPixels() {
	const [isMounted, setIsMounted] = useState(false);
	const { pixels, colors } = floatingPixelsConfig;

	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Only render on client to avoid hydration mismatch with animations
	if (!isMounted) {
		return (
			<div className="absolute inset-0 overflow-hidden pointer-events-none" />
		);
	}

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{pixels.map((pixel) => (
				<motion.div
					key={pixel.id}
					className="absolute"
					style={{
						left: `${pixel.x}%`,
						top: `${pixel.y}%`,
						width: pixel.size,
						height: pixel.size,
						backgroundColor: colors[pixel.colorIndex],
						opacity: 0.3,
					}}
					animate={{
						y: [0, -100, 0],
						opacity: [0.1, 0.5, 0.1],
						scale: [1, 1.5, 1],
					}}
					transition={{
						duration: pixel.duration,
						delay: pixel.delay,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
}
