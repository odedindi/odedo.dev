"use client";

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
				<div
					key={pixel.id}
					className="absolute pixel-float"
					style={
						{
							left: `${pixel.x}%`,
							top: `${pixel.y}%`,
							width: pixel.size,
							height: pixel.size,
							backgroundColor: colors[pixel.colorIndex],
							opacity: 0.1,
							"--duration": `${pixel.duration}s`,
							"--delay": `${pixel.delay}s`,
						} as React.CSSProperties
					}
				/>
			))}
		</div>
	);
});
