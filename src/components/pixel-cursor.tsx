"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useState } from "react";

import { floatingPixelsConfig } from "@/lib/site-config";

const { colors } = floatingPixelsConfig;

// Spring configs for head + 4 trail dots (stiffness decreases = more lag = trail effect)
const HEAD_SPRING = { stiffness: 600, damping: 30, mass: 0.4 };
const TRAIL_CONFIGS = [
	{ stiffness: 500, damping: 28, size: 8, opacity: 0.5 },
	{ stiffness: 380, damping: 32, size: 7, opacity: 0.4 },
	{ stiffness: 280, damping: 38, size: 6, opacity: 0.3 },
	{ stiffness: 180, damping: 46, size: 5, opacity: 0.2 },
];

export function PixelCursor() {
	const [isVisible, setIsVisible] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	// Raw mouse position — updated via .set(), never triggers React re-render
	const mouseX = useMotionValue(-100);
	const mouseY = useMotionValue(-100);

	// Cursor head — tight spring
	const headX = useSpring(mouseX, HEAD_SPRING);
	const headY = useSpring(mouseY, HEAD_SPRING);

	// Trail dots — each springs to the same mouseX/mouseY with looser configs
	const t1X = useSpring(mouseX, {
		stiffness: TRAIL_CONFIGS[0].stiffness,
		damping: TRAIL_CONFIGS[0].damping,
	});
	const t1Y = useSpring(mouseY, {
		stiffness: TRAIL_CONFIGS[0].stiffness,
		damping: TRAIL_CONFIGS[0].damping,
	});
	const t2X = useSpring(mouseX, {
		stiffness: TRAIL_CONFIGS[1].stiffness,
		damping: TRAIL_CONFIGS[1].damping,
	});
	const t2Y = useSpring(mouseY, {
		stiffness: TRAIL_CONFIGS[1].stiffness,
		damping: TRAIL_CONFIGS[1].damping,
	});
	const t3X = useSpring(mouseX, {
		stiffness: TRAIL_CONFIGS[2].stiffness,
		damping: TRAIL_CONFIGS[2].damping,
	});
	const t3Y = useSpring(mouseY, {
		stiffness: TRAIL_CONFIGS[2].stiffness,
		damping: TRAIL_CONFIGS[2].damping,
	});
	const t4X = useSpring(mouseX, {
		stiffness: TRAIL_CONFIGS[3].stiffness,
		damping: TRAIL_CONFIGS[3].damping,
	});
	const t4Y = useSpring(mouseY, {
		stiffness: TRAIL_CONFIGS[3].stiffness,
		damping: TRAIL_CONFIGS[3].damping,
	});

	const trail = [
		{ x: t1X, y: t1Y, ...TRAIL_CONFIGS[0] },
		{ x: t2X, y: t2Y, ...TRAIL_CONFIGS[1] },
		{ x: t3X, y: t3Y, ...TRAIL_CONFIGS[2] },
		{ x: t4X, y: t4Y, ...TRAIL_CONFIGS[3] },
	];

	useEffect(() => {
		setIsMounted(true);
		const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
		if (!hasFinePointer) return;

		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX - 8);
			mouseY.set(e.clientY - 8);
			// Only one state update (isVisible) — not on every frame once visible
			if (!isVisible) setIsVisible(true);
		};
		const handleMouseLeave = () => setIsVisible(false);
		const handleMouseEnter = () => setIsVisible(true);

		const abortController = new AbortController(); // For cleanup in case component unmounts
		window.addEventListener("mousemove", handleMouseMove, {
			passive: true,
			signal: abortController.signal,
		});
		document.body.addEventListener("mouseleave", handleMouseLeave, {
			signal: abortController.signal,
		});
		document.body.addEventListener("mouseenter", handleMouseEnter, {
			signal: abortController.signal,
		});
		return () => {
			abortController.abort();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!isMounted || !isVisible) return null;

	return (
		<>
			{trail.map((dot, i) => (
				<motion.div
					key={i}
					className="fixed pointer-events-none z-[9998]"
					style={{
						x: dot.x,
						y: dot.y,
						width: dot.size,
						height: dot.size,
						backgroundColor: colors[i % colors.length],
						opacity: dot.opacity,
						willChange: "transform",
					}}
				/>
			))}
			<motion.div
				className="fixed pointer-events-none z-[9999] mix-blend-difference"
				style={{ x: headX, y: headY, willChange: "transform" }}
			>
				<div
					className="w-4 h-4 bg-primary"
					style={{ imageRendering: "pixelated" }}
				/>
			</motion.div>
		</>
	);
}
