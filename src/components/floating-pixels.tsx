"use client";

import { motion } from "framer-motion";

import { memo } from "react";

import { useIsMounted } from "@/hooks/useIsMounted";
import { floatingPixelsConfig } from "@/lib/site-config";

export const FloatingPixels = memo(function FloatingPixels() {
	const isMounted = useIsMounted();
	const { pixels, colors } = floatingPixelsConfig;

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
});
