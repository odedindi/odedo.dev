import { ImageResponse } from "next/og";

export const alt = "Oded Winberger — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "#0a0a0a",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					padding: "80px",
					fontFamily: "monospace",
					position: "relative",
				}}
			>
				{/* Retro grid background */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage:
							"linear-gradient(rgba(74,222,128,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.07) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				/>

				{/* Top-left pixel bracket */}
				<div
					style={{
						position: "absolute",
						top: 32,
						left: 32,
						width: 24,
						height: 24,
						borderTop: "3px solid #4ade80",
						borderLeft: "3px solid #4ade80",
					}}
				/>
				{/* Top-right pixel bracket */}
				<div
					style={{
						position: "absolute",
						top: 32,
						right: 32,
						width: 24,
						height: 24,
						borderTop: "3px solid #4ade80",
						borderRight: "3px solid #4ade80",
					}}
				/>
				{/* Bottom-left pixel bracket */}
				<div
					style={{
						position: "absolute",
						bottom: 32,
						left: 32,
						width: 24,
						height: 24,
						borderBottom: "3px solid #4ade80",
						borderLeft: "3px solid #4ade80",
					}}
				/>
				{/* Bottom-right pixel bracket */}
				<div
					style={{
						position: "absolute",
						bottom: 32,
						right: 32,
						width: 24,
						height: 24,
						borderBottom: "3px solid #4ade80",
						borderRight: "3px solid #4ade80",
					}}
				/>

				{/* Decorative pixel tag top-right */}
				<div
					style={{
						position: "absolute",
						top: 80,
						right: 80,
						color: "rgba(74,222,128,0.35)",
						fontSize: 13,
						letterSpacing: 2,
					}}
				>
					// BUILDING THE FUTURE
				</div>

				{/* Content */}
				<div
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						gap: 0,
					}}
				>
					{/* Pixel subtitle */}
					<div
						style={{
							color: "#4ade80",
							fontSize: 14,
							letterSpacing: 6,
							marginBottom: 24,
							textTransform: "uppercase",
						}}
					>
						FULL-STACK DEVELOPER
					</div>

					{/* Name */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 0,
						}}
					>
						<span
							style={{
								color: "#f9fafb",
								fontSize: 88,
								fontWeight: 700,
								lineHeight: 1.05,
								letterSpacing: -2,
							}}
						>
							Oded
						</span>
						<span
							style={{
								color: "#4ade80",
								fontSize: 88,
								fontWeight: 700,
								lineHeight: 1.05,
								letterSpacing: -2,
							}}
						>
							Winberger
						</span>
					</div>

					{/* Tagline */}
					<div
						style={{
							color: "rgba(156,163,175,1)",
							fontSize: 22,
							marginTop: 32,
							maxWidth: 600,
							lineHeight: 1.5,
						}}
					>
						Building software with clean code and modern tooling.
					</div>
				</div>

				{/* Bottom row */}
				<div
					style={{
						position: "absolute",
						bottom: 64,
						left: 80,
						display: "flex",
						alignItems: "center",
						gap: 32,
						color: "rgba(156,163,175,0.6)",
						fontSize: 14,
						letterSpacing: 2,
					}}
				>
					<span>odedo.dev</span>
					<span style={{ color: "#4ade80", opacity: 0.4 }}>■</span>
					<span>Obwalden, Switzerland</span>
					<span style={{ color: "#4ade80", opacity: 0.4 }}>■</span>
					<span>Open to opportunities</span>
				</div>

				{/* Bottom-right pixel decoration */}
				<div
					style={{
						position: "absolute",
						bottom: 68,
						right: 80,
						color: "rgba(74,222,128,0.25)",
						fontSize: 13,
						letterSpacing: 2,
					}}
				>
					{"<OW/>"}
				</div>
			</div>
		),
		{ ...size },
	);
}
