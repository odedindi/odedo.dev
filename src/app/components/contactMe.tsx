"use client";
import type { FC, MouseEventHandler } from "react";
import { ActionIcon, Box, Group } from "@mantine/core";
import gsap from "gsap";
import { useEffect, useRef, useCallback } from "react";
import classes from "./contactMe.module.css";
import { SocialIcon } from "react-social-icons";

type ContactSource = "linkedin" | "github" | "discord" | "email";

type ContactLinks = {
	[typeParameter in ContactSource]: string;
};
const contactLinks: Partial<ContactLinks> = {
	linkedin: "https://www.linkedin.com/in/odedw/",
	github: "https://github.com/odedindi",
	discord: "https://discordapp.com/users/804035729201037353",
	email: "mailto:oded.winberger@gmail.com",
};

const ContactMe: FC = () => {
	const refs = useRef<HTMLDivElement[]>([]);
	const addRef = (ref: HTMLDivElement) => {
		if (ref && !refs.current.includes(ref)) refs.current.push(ref);
	};
	useEffect(() => {
		const contactMeAnimation = gsap.fromTo(
			refs.current,
			{ x: 1280, alpha: 0 },
			{ x: 0, alpha: 1, ease: "power4", duration: 1, stagger: 0.2 },
		);
		return () => {
			contactMeAnimation.kill();
		};
	}, []);

	const onEnter: MouseEventHandler<HTMLDivElement> = useCallback(
		({ currentTarget }) =>
			gsap.to(currentTarget, { y: -10, scale: 1.1, duration: 0.2 }),
		[],
	);

	const onLeave: MouseEventHandler<HTMLDivElement> = useCallback(
		({ currentTarget }) => gsap.to(currentTarget, { y: 0, scale: 1 }),
		[],
	);
	return (
		<Box className={classes.base}>
			<Group justify="center">
				{Object.entries(contactLinks).map(([contactSource, href]) => (
					<Box
						key={contactSource}
						ref={addRef}
						onMouseEnter={onEnter}
						onMouseLeave={onLeave}
					>
						<ActionIcon
							className={classes.iconContainer}
							variant="transparent"
							title={contactSource}
						>
							<SocialIcon network={contactSource} url={href} />
						</ActionIcon>
					</Box>
				))}
			</Group>
		</Box>
	);
};
export default ContactMe;
