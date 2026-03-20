import {
	Bot,
	Code2,
	Cog,
	type LucideIcon,
	Mail,
	MapPin,
	Server,
	Zap,
} from "lucide-react";
import type { FC } from "react";

import { Github } from "@/components/icons/github";
import { Linkedin } from "@/components/icons/linkedin";
import { X } from "@/components/icons/x";

// ============================================================================
// SITE CONFIGURATION
// Central source of truth for all personal data and content.
// Rendering logic lives in components; only data lives here.
// ============================================================================

export const siteConfig = {
	name: "Oded Winberger",
	firstName: "Oded",
	lastName: "Winberger",
	title: "Full-Stack Developer",
	tagline: "Building software with clean code and modern tooling.",
	email: "odedindi@gmail.com",
	location: "Obwalden, Switzerland",
	availability: "Open to new opportunities",
	responseTime: "Within 24 hours",
	yearStarted: 2018,
	resumeUrl: "https://rxresu.me/oded.winberger/software-developer",
	githubUsername: "odedindi",
};

// ============================================================================
// NAVIGATION
// ============================================================================

export interface NavItem {
	label: string;
	href: string;
}

export const navItems: NavItem[] = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Contact", href: "#contact" },
];

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export interface SocialLink {
	name: string;
	href: string;
	icon: FC<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
	{ name: "GitHub", href: "https://github.com/odedindi", icon: Github },
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/oded-winberger/",
		icon: Linkedin,
	},
	{ name: "Twitter", href: "https://twitter.com/odedindi", icon: X },
];

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroConfig = {
	subtitle: "FULL-STACK DEVELOPER",
	decorativeTexts: [
		{ text: "// BUILDING THE FUTURE", position: "top-right" as const },
		{ text: "<AI_POWERED />", position: "bottom-left" as const },
		{ text: "AI.generate()", position: "middle-right" as const },
	],
};

// ============================================================================
// TYPEWRITER PHRASES
// ============================================================================

export const typewriterPhrases: string[] = [
	"Shipping pixel-perfect UIs",
	"Crafting scalable backends",
	"Integrating LLMs & agents",
	"Building for tomorrow",
];

// ============================================================================
// ABOUT SECTION
// ============================================================================

export interface Stat {
	value: string;
	label: string;
}

export const stats: Stat[] = [
	{
		value: `${new Date().getFullYear() - siteConfig.yearStarted}+`,
		label: "Years Coding",
	},
	// { value: "10+", label: "Personal projects Shipped" },
	// { value: "3", label: "AI Apps Built" },
	{ value: "CH", label: "Based In" },
];

export interface Highlight {
	icon: LucideIcon;
	title: string;
	description: string;
}

export const highlights: Highlight[] = [
	{
		icon: Code2,
		title: "Full-Stack",
		description:
			"End-to-end development with React, Next.js, Node and modern tooling.",
	},
	{
		icon: Bot,
		title: "AI Integration",
		description:
			"Building apps with LLMs, RAG, streaming, and agentic workflows.",
	},
	{
		icon: Server,
		title: "Backend",
		description:
			"GraphQL, REST, PostgreSQL, and serverless architecture at scale.",
	},
	{
		icon: Zap,
		title: "Performance",
		description:
			"Optimized code, Core Web Vitals, and fast-loading production apps.",
	},
];

export const aboutContent = {
	title: "Crafting Digital",
	titleHighlight: "Experiences",
	paragraphs: [
		"I'm a full-stack developer based in Obwalden, Switzerland who loves building things that actually work. My focus is on clean code, thoughtful UX, and integrating AI where it genuinely adds value — not just for the hype.",
		"From iGarten (a plant care app with Gemini vision AI) to Dialektli (a Swiss dialect platform), I build projects I care about. Currently leaning into AI-powered full-stack development and exploring the Swiss tech scene.",
	],
};

// ============================================================================
// SKILLS SECTION
// ============================================================================

export interface Skill {
	name: string;
	/** 0–100 scale (maps to 1–10: multiply by 10). Used as progress bar width. */
	level: number;
	/** Short description of what you actually did / can do with this skill. */
	description?: string;
}

export interface SkillCategory {
	name: string;
	color: string;
	skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
	{
		name: "Frontend",
		color: "oklch(0.75 0.2 160)",
		skills: [
			{
				name: "TypeScript",
				level: 90,
				description:
					"Generics, conditional types, discriminated unions — used throughout every project.",
			},
			{
				name: "React / Next.js",
				level: 90,
				description:
					"App Router, RSC, Server Actions, streaming — shipped across 5 production projects.",
			},
			{
				name: "Angular",
				level: 50,
				description:
					"Built real features on a past project — components, services, RxJS, routing. Not current, would need to re-ramp.",
			},
			{
				name: "CSS & UI Libraries",
				level: 85,
				description:
					"Vanilla CSS foundation, Tailwind as primary layer, MUI / Mantine / shadcn for component-level work — all shipped in production.",
			},
			{
				name: "SEO",
				level: 70,
				description:
					"Technical SEO: structured data (JSON-LD), Core Web Vitals, sitemap, og:image — shipped with measurable results.",
			},
			{
				name: "Accessibility (a11y)",
				level: 70,
				description:
					"Semantic HTML, ARIA roles, keyboard navigation, color contrast — tested with screen readers.",
			},
			{
				name: "Effect-TS",
				level: 40,
				description:
					"Self-teaching: Effect, pipe, Schema, typed error handling — working through the mental model, not yet in production.",
			},
		],
	},
	{
		name: "Backend",
		color: "oklch(0.7 0.22 330)",
		skills: [
			{
				name: "Node.js (TypeScript)",
				level: 80,
				description:
					"Production APIs with auth, rate limiting, background jobs, and error recovery.",
			},
			{
				name: "GraphQL",
				level: 70,
				description:
					"Schema design from scratch, resolvers, mutations, Prisma ORM — Dialektli.",
			},
			{
				name: "REST API Design",
				level: 75,
				description:
					"RESTful services, route design, middleware chains, request validation.",
			},
			{
				name: "PostgreSQL",
				level: 65,
				description:
					"Schema design, relational modeling, Prisma migrations — shipped in production.",
			},
			{
				name: "MongoDB",
				level: 45,
				description:
					"Document model, collections, queries, aggregation pipeline — side project experience.",
			},
			{
				name: "Prisma",
				level: 70,
				description:
					"Schema-first ORM — migrations, relations, type-safe queries, used across multiple production projects.",
			},
			{
				name: "Testing",
				level: 70,
				description:
					"Unit and integration tests with Jest / Vitest and Testing Library — part of regular development workflow.",
			},
		],
	},
	{
		name: "AI & LLMs",
		color: "oklch(0.8 0.15 200)",
		skills: [
			{
				name: "LLM Integration",
				level: 75,
				description:
					"Vercel AI SDK, Gemini / OpenAI APIs — streaming, structured output, tool calling, multi-modal, prompt engineering. Shipped in production.",
			},
			{
				name: "Google ADK",
				level: 50,
				description:
					"Used heavily in a work hackathon to prototype agentic product directions. Not yet in production.",
			},
			{
				name: "AI Agents",
				level: 78,
				description:
					"Plan, build, and orchestrate agents daily — tool use, multi-step reasoning, context window management (summarization, token budgets), MCP protocol.",
			},
			{
				name: "RAG",
				level: 45,
				description:
					"Solid theoretical understanding — embeddings, vector DBs, retrieval pipelines. Not yet built end-to-end.",
			},
		],
	},
	{
		name: "Infrastructure",
		color: "oklch(0.85 0.18 90)",
		skills: [
			{
				name: "Git",
				level: 80,
				description:
					"Power user — rebase, squash, bisect, reflog recovery, cherry-pick, hooks, worktrees.",
			},
			{
				name: "CI/CD Pipelines",
				level: 78,
				description:
					"GitHub Actions and GitLab CI — full pipelines: lint, test, build, deploy, triggered on PR and merge.",
			},
			{
				name: "Docker",
				level: 60,
				description:
					"Dockerfiles, docker-compose for multi-service stacks, working staging deployments.",
			},
			{
				name: "Cloud Deployment",
				level: 60,
				description:
					"Production deploys on Vercel and DigitalOcean — custom domains, env management.",
			},
			{
				name: "Developer Tooling",
				level: 65,
				description:
					"Built a TypeScript + Bun Windows executable to fully automate company dev setup: tooling, terminal, DB, and IIS config.",
			},
			{
				name: "Linux / Server Admin",
				level: 50,
				description:
					"SSH, file permissions, process management, nginx, cron jobs — can manage a VPS with a guide.",
			},
		],
	},
];

// ============================================================================
// PROJECTS SECTION
// ============================================================================

export interface Project {
	id: number;
	title: string;
	description: string;
	tags: string[];
	color: string;
	stats: Record<string, string>;
	githubUrl?: string;
	liveUrl?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "iGarten",
		description:
			"Personal plant care app with AI superpowers. Features a Gemini vision-based plant identifier, AI-generated care schedules with structured output, and a streaming chat assistant.",
		tags: ["Next.js", "Vercel AI SDK", "Gemini", "TypeScript", "Tailwind"],
		color: "oklch(0.75 0.2 160)",
		stats: { features: "3 AI", type: "App" },
		githubUrl: "https://github.com/odedindi/iGarten",
		liveUrl: "https://igarten.vercel.app/",
	},
	{
		id: 2,
		title: "Dialektli",
		description:
			"Platform for exploring Swiss German dialects — share and discover regional words and phrases from across Switzerland. Built with a full GraphQL API and Prisma ORM.",
		tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "TypeScript"],
		color: "oklch(0.7 0.22 330)",
		stats: { dialects: "26+", stack: "Full" },
		githubUrl: "https://github.com/urbanswisstionary/dialektli/",
		liveUrl: "https://www.dialektli.ch/",
	},
	{
		id: 3,
		title: "Solr",
		description:
			"Interactive solar system guide with a 3D model of planetary orbits powered by Three.js. Includes a gallery of the sun and all planets with adjustable scale.",
		tags: ["Next.js", "Three.js", "TypeScript", "GraphQL"],
		color: "oklch(0.8 0.15 200)",
		stats: { planets: "8+", engine: "3D" },
		githubUrl: "https://github.com/odedindi/solr",
		liveUrl: "https://solr.vercel.app/",
	},
	{
		id: 4,
		title: "GeoChat",
		description:
			"Location-based real-time chat app — connect with people nearby using WebSockets and geolocation. Built with Ionic and Socket.io.",
		tags: ["Next.js", "Socket.io", "PostgreSQL", "Ionic", "RxJS"],
		color: "oklch(0.85 0.18 90)",
		stats: { tech: "RT", type: "Chat" },
		githubUrl: "https://github.com/odedindi/GeoChat",
		liveUrl: "https://geo-chat-omega.vercel.app/home",
	},
	{
		id: 5,
		title: "LandPro",
		description:
			"Climate hackathon prototype — an AI- and satellite-powered platform for carbon sequestration estimation. Uses TensorFlow + scikit-learn to classify land cover from satellite imagery. Built for the Cool Farm Alliance challenge with interactive Leaflet mapping.",
		tags: [
			"React",
			"Redux",
			"Leaflet",
			"Django REST",
			"TensorFlow",
			"scikit-learn",
		],
		color: "oklch(0.78 0.16 130)",
		stats: { focus: "AI+SAT", type: "Climate" },
		githubUrl: "https://github.com/odedindi/lpfs",
		liveUrl: "https://landpro.vercel.app/",
	},
];

// ============================================================================
// CONTACT SECTION
// ============================================================================

export interface ContactInfo {
	icon: LucideIcon;
	label: string;
	value: string;
}

export const contactInfo: ContactInfo[] = [
	{ icon: Mail, label: "Email", value: siteConfig.email },
	{ icon: MapPin, label: "Location", value: siteConfig.location },
	{ icon: Cog, label: "Status", value: "Married +3" },
];

export const contactContent = {
	title: "Let's Build",
	titleHighlight: "Together",
	description:
		"Have an interesting project or just want to chat about AI, full-stack dev, or the Swiss tech scene? I'm always happy to connect.",
};

// ============================================================================
// PIXEL AVATAR CONFIGURATION
// ============================================================================

export const avatarConfig = {
	pixelSize: 16,
	pattern: [
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
		[0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
		[1, 1, 2, 3, 2, 2, 2, 2, 3, 2, 1, 1],
		[1, 1, 2, 2, 2, 4, 4, 2, 2, 2, 1, 1],
		[1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
		[0, 1, 2, 2, 5, 5, 5, 5, 2, 2, 1, 0],
		[0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0],
		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0],
		[0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0],
		[0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0],
		[6, 6, 6, 7, 7, 6, 6, 7, 7, 6, 6, 6],
		[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
	],
	colors: {
		0: "transparent",
		1: "oklch(0.4 0.05 40)",
		2: "oklch(0.75 0.08 70)",
		3: "oklch(0.2 0.01 260)",
		4: "oklch(0.6 0.15 25)",
		5: "oklch(0.65 0.18 15)",
		6: "oklch(0.25 0.08 260)",
		7: "oklch(0.75 0.2 160)",
	} as Record<number, string>,
	codeSnippet: `const oded = {
  name: "Oded",
  skills: ["TS", "AI"],
  location: "SWITZERLAND",
};`,
};

// ============================================================================
// FLOATING PIXELS CONFIGURATION
// Pre-computed positions to avoid hydration mismatch
// ============================================================================

export const floatingPixelsConfig = {
	colors: [
		"oklch(0.75 0.2 160)",
		"oklch(0.7 0.22 330)",
		"oklch(0.8 0.15 200)",
		"oklch(0.85 0.18 90)",
	],
	pixels: [
		{ id: 0, x: 15, y: 20, size: 8, delay: 0, duration: 12, colorIndex: 0 },
		{ id: 1, x: 45, y: 10, size: 6, delay: 1, duration: 15, colorIndex: 1 },
		{ id: 2, x: 75, y: 35, size: 10, delay: 2, duration: 18, colorIndex: 2 },
		{ id: 3, x: 25, y: 60, size: 5, delay: 0.5, duration: 14, colorIndex: 3 },
		{ id: 4, x: 85, y: 55, size: 7, delay: 3, duration: 16, colorIndex: 0 },
		{ id: 5, x: 55, y: 80, size: 9, delay: 1.5, duration: 13, colorIndex: 1 },
		{ id: 6, x: 10, y: 45, size: 6, delay: 2.5, duration: 17, colorIndex: 2 },
		{ id: 7, x: 65, y: 25, size: 8, delay: 0.8, duration: 11, colorIndex: 3 },
		{ id: 8, x: 35, y: 70, size: 5, delay: 3.5, duration: 19, colorIndex: 0 },
		{ id: 9, x: 90, y: 15, size: 7, delay: 1.2, duration: 14, colorIndex: 1 },
		{
			id: 10,
			x: 20,
			y: 85,
			size: 10,
			delay: 2.2,
			duration: 16,
			colorIndex: 2,
		},
		{
			id: 11,
			x: 50,
			y: 40,
			size: 6,
			delay: 0.3,
			duration: 12,
			colorIndex: 3,
		},
		{
			id: 12,
			x: 80,
			y: 75,
			size: 8,
			delay: 4,
			duration: 15,
			colorIndex: 0,
		},
		{
			id: 13,
			x: 30,
			y: 30,
			size: 5,
			delay: 1.8,
			duration: 18,
			colorIndex: 1,
		},
		{
			id: 14,
			x: 70,
			y: 50,
			size: 9,
			delay: 2.8,
			duration: 13,
			colorIndex: 2,
		},
		{
			id: 15,
			x: 5,
			y: 65,
			size: 7,
			delay: 0.6,
			duration: 17,
			colorIndex: 3,
		},
		{
			id: 16,
			x: 40,
			y: 5,
			size: 6,
			delay: 3.2,
			duration: 11,
			colorIndex: 0,
		},
		{
			id: 17,
			x: 95,
			y: 40,
			size: 8,
			delay: 1.4,
			duration: 19,
			colorIndex: 1,
		},
		{
			id: 18,
			x: 60,
			y: 90,
			size: 5,
			delay: 2.4,
			duration: 14,
			colorIndex: 2,
		},
		{
			id: 19,
			x: 12,
			y: 12,
			size: 10,
			delay: 0.9,
			duration: 16,
			colorIndex: 3,
		},
	],
};

// ============================================================================
// THEME COLORS
// ============================================================================

export const themeColors = {
	primary: "oklch(0.75 0.2 160)",
	accent: "oklch(0.7 0.22 330)",
	cyan: "oklch(0.8 0.15 200)",
	yellow: "oklch(0.85 0.18 90)",
};
