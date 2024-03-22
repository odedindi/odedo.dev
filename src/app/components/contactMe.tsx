"use client";
import { ActionIcon, Box, Group } from "@mantine/core";
import gsap from "gsap";
import { useEffect, useRef, useCallback } from "react";
import type { FC, MouseEventHandler } from "react";
import classes from "./contactMe.module.css";
import { SocialIcon } from "react-social-icons";

const ContactMe: FC = () => {
	const contactMeRef = useRef<HTMLDivElement>(undefined!);
	useEffect(() => {
		const CSSPlugin = require("gsap/CSSPlugin");
		gsap.registerPlugin(CSSPlugin);

		const contactMeAnimation = gsap.fromTo(
			contactMeRef.current,
			{
				x: 300,
				opacity: 0,
				ease: "power4",
				duration: 2.5,
			},
			{ x: 0, opacity: 1, duration: 1 },
		);
		return () => {
			contactMeAnimation.kill();
		};
	}, []);
	return (
		<Box ref={contactMeRef} className={classes.base}>
			<ContactMeButtons />
		</Box>
	);
};
export default ContactMe;

type ContactSource = "facebook" | "linkedin" | "github" | "discord" | "email";

type ContactLinks = {
	[typeParameter in ContactSource]: string;
};
const contactLinks: Partial<ContactLinks> = {
	// facebook: 'https://www.facebook.com/oded.winberger/',
	linkedin: "https://www.linkedin.com/in/odedw/",
	github: "https://github.com/odedindi",
	// discord: 'https://discordapp.com/users/804035729201037353',
	email: "mailto:oded.winberger@gmail.com",
};

type SocialMediaButtonProps = {
	id: string;
	href: string;
};

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ id, href }) => (
	<ActionIcon
		className={classes.iconContainer}
		variant="transparent"
		title={id}
	>
		<SocialIcon id={id} url={href} />
	</ActionIcon>
);

const ContactMeButtons: FC = () => {
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
		<Group justify="center">
			{Object.entries(contactLinks).map(([contactSource, href]) => (
				<Box key={contactSource} onMouseEnter={onEnter} onMouseLeave={onLeave}>
					<SocialMediaButton id={contactSource} href={href} />
				</Box>
			))}
		</Group>
	);
};
