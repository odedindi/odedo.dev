"use client";
import { type FC, useRef } from "react";
import { Box, Group } from "@mantine/core";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import classes from "./contactMe.module.css";
import AnimatedSocialIcon from "./animatedSocialIcon";

import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

type ContactSource = "linkedin" | "github" | "discord" | "email";

type ContactLinks = {
	[typeParameter in ContactSource]: string;
};
const contactLinks: Partial<ContactLinks> = {
	linkedin: "https://www.linkedin.com/in/odedw/",
	github: "https://github.com/odedindi",
	discord: "https://discordapp.com/users/804035729201037353",
};

const ContactMe: FC = () => {
	const refs = useRef<HTMLButtonElement[]>([]);
	const ref = (ref: HTMLButtonElement) => {
		if (ref && !refs.current.includes(ref)) refs.current.push(ref);
	};

	useGSAP(() => {
		gsap.fromTo(
			refs.current,
			{ x: 1280, alpha: 0 },
			{ x: 0, alpha: 1, ease: "power4", duration: 1, stagger: 0.25 },
		);
	});

	return (
		<Box className={classes.base}>
			<Group justify="center">
				{Object.entries(contactLinks).map(([network, url], i) => (
					<AnimatedSocialIcon key={i} ref={ref} network={network} url={url} />
				))}
				<AnimatedSocialIcon
					ref={ref}
					network={"email"}
					onClick={() => {
						gsap.to(window, {
							duration: 1.5,
							scrollTo: "#contact-form",
							ease: "Bounce.easeOut",
						});
					}}
				/>
			</Group>
		</Box>
	);
};

export default ContactMe;
