"use client";

import { RefObject, useEffect } from "react";

class GlowyNode {
	x: number;
	y: number;
	size: number;
	speedX: number;
	speedY: number;
	color: string;
	originalY: number;
	waveAmplitude: number;
	waveFrequency: number;
	waveOffset: number;

	constructor(canvas: HTMLCanvasElement | null, hue: number) {
		this.x = Math.random() * (canvas?.width ?? 0);
		this.y = Math.random() * (canvas?.height ?? 0);
		this.originalY = this.y;
		this.size = Math.random() * 4 + 1;
		this.speedX = (Math.random() - 0.5) * 0.7;
		this.speedY = (Math.random() - 0.5) * 0.1;
		this.waveAmplitude = Math.random() * 20 + 5;
		this.waveFrequency = Math.random() * 0.02 + 0.01;
		this.waveOffset = Math.random() * Math.PI * 2;
		// Use a more vibrant color palette
		const h = hue + Math.random() * 60;
		const s = 70 + Math.random() * 30;
		const l = 50 + Math.random() * 20;
		const a = Math.random() * 0.5 + 0.2;
		this.color = `hsla(${h}, ${s}%, ${l}%, ${a})`;
	}

	update(canvas: HTMLCanvasElement, frame: number) {
		if (!canvas) return;
		// Basic movement
		this.x += this.speedX;

		// Wavy motion using sine wave
		this.y =
			this.originalY +
			Math.sin(frame * this.waveFrequency + this.waveOffset) *
				this.waveAmplitude;
		this.originalY += this.speedY;

		// Wrap around screen edges
		if (this.x > canvas.width) this.x = 0;
		else if (this.x < 0) this.x = canvas.width;

		if (this.originalY > canvas.height) this.originalY = 0;
		else if (this.originalY < 0) this.originalY = canvas.height;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}
export function useCanvasAnimation(
	canvasRef: RefObject<HTMLCanvasElement | null>,
) {
	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let animationFrameId: number;
		let particles: GlowyNode[] = [];
		let hue = 0;
		let frame = 0;

		const initParticles = () => {
			particles = Array.from({ length: 120 }, () => new GlowyNode(canvas, hue));
		};

		const animate = () => {
			// Create a subtle fade effect instead of clearing completely
			ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			// Slowly shift the hue for color variation
			hue = (hue + 0.5) % 360;
			frame++;

			// Draw connections with curved lines
			for (let i = 0; i < particles.length; i++) {
				const pa = particles[i];
				pa.update(canvas, frame);
				pa.draw(ctx);

				for (let j = i + 1; j < particles.length; j++) {
					const pb = particles[j];
					const dx = pa.x - pb.x;
					const dy = pa.y - pb.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 120) {
						ctx.beginPath();
						// Create gradient for connections
						const gradient = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
						gradient.addColorStop(0, pa.color);
						gradient.addColorStop(1, pb.color);
						ctx.strokeStyle = gradient;
						ctx.lineWidth = 0.8 * (1 - distance / 120);
						// Create curved connections
						const midX = (pa.x + pb.x) / 2;
						const midY = (pa.y + pb.y) / 2 + Math.sin(frame * 0.01) * 15;
						ctx.moveTo(pa.x, pa.y);
						ctx.quadraticCurveTo(midX, midY, pb.x, pb.y);
						ctx.stroke();
					}
				}
			}
			// Add occasional new particles
			if (frame % 60 === 0) {
				if (particles.length < 150) {
					const newParticle = new GlowyNode(canvas, hue);
					newParticle.x = Math.random() * canvas.width;
					newParticle.y = 0;
					newParticle.originalY = 0;
					particles.push(newParticle);
				}
			}
			animationFrameId = requestAnimationFrame(animate);
		};

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();
		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	}, [canvasRef]);
}
