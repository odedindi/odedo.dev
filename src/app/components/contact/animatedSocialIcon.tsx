import { forwardRef } from "react";
import { ActionIcon } from "@mantine/core";
import gsap from "gsap";
import classes from "./animatedSocialIcon.module.css";
import { SocialIcon, SocialIconProps } from "react-social-icons";

const AnimatedSocialIcon = forwardRef<
	HTMLButtonElement,
	Pick<SocialIconProps, "network" | "url" | "onClick">
>(function AnimatedSocialIcon(props, ref) {
	return (
		<ActionIcon
			className={classes.actionIconWrapper}
			variant="transparent"
			title={props.network}
			ref={ref}
			onMouseEnter={({ currentTarget }) => {
				gsap.to(currentTarget, { y: -10, scale: 1.1, duration: 0.2 });
			}}
			onMouseLeave={({ currentTarget }) => {
				gsap.to(currentTarget, { y: 0, scale: 1 });
			}}
		>
			<SocialIcon {...props} />
		</ActionIcon>
	);
});

export default AnimatedSocialIcon;
