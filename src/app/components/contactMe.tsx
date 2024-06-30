"use client";
import { type FC, useEffect, useRef, forwardRef } from "react";
import { ActionIcon, Box, Group } from "@mantine/core";
import gsap from "gsap";
import classes from "./contactMe.module.css";
import { SocialIcon, SocialIconProps } from "react-social-icons";

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
	const refs = useRef<HTMLButtonElement[]>([]);
	const ref = (ref: HTMLButtonElement) => {
		if (ref && !refs.current.includes(ref)) refs.current.push(ref);
	};
	useEffect(() => {
		const contactMeAnimation = gsap.fromTo(
			refs.current,
			{ x: 1280, alpha: 0 },
			{ x: 0, alpha: 1, ease: "power4", duration: 1, stagger: 0.25 },
		);
		return () => {
			contactMeAnimation.kill();
		};
	}, []);

	return (
		<Box className={classes.base}>
			<Group justify="center">
				{Object.entries(contactLinks).map(([network, url], i) => (
					<AnimatedSocialIcon key={i} ref={ref} network={network} url={url} />
				))}
			</Group>
		</Box>
	);
};

export default ContactMe;

const AnimatedSocialIcon = forwardRef<
	HTMLButtonElement,
	Pick<SocialIconProps, "network" | "url">
>(function AnimatedSocialIcon({ network, url }, ref) {
	return (
		<ActionIcon
			className={classes.iconContainer}
			variant="transparent"
			title={network}
			ref={ref}
			onMouseEnter={({ currentTarget }) =>
				gsap.to(currentTarget, { y: -10, scale: 1.1, duration: 0.2 })
			}
			onMouseLeave={({ currentTarget }) =>
				gsap.to(currentTarget, { y: 0, scale: 1 })
			}
		>
			<SocialIcon network={network} url={url} />
		</ActionIcon>
	);
});
