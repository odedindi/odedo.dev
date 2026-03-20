"use client";

export function ScanlineOverlay() {
	return (
		<div
			className="fixed inset-0 pointer-events-none z-9997 opacity-[0.03]"
			style={{
				background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.3) 2px,
          rgba(0, 0, 0, 0.3) 4px
        )`,
			}}
		/>
	);
}
