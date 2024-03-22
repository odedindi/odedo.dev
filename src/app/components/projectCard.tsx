"use client";
import { Text, Card, Badge, Box } from "@mantine/core";
import React, { FC, ImgHTMLAttributes } from "react";
import classes from "./projectCard.module.css";

type ProjectCardProps = {
	title: string;
	tag?: string;
	linkProps?: {
		href?: string;
	};
	image?: Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">;
};
const ProjectCard: FC<ProjectCardProps> = ({
	title,
	tag,
	linkProps,
	image,
}) => (
	<Box className={classes.base}>
		<Card
			shadow="md"
			padding="lg"
			radius="lg"
			className={classes.card}
			rel="noopener noreferrer"
			target="_blank"
			href={linkProps?.href}
			component={linkProps?.href ? "a" : "div"}
		>
			<Card.Section className={classes.cardImage}>
				{image ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img src={image.src} alt={image.alt} height={100} />
				) : null}
			</Card.Section>

			<Card.Section className={classes.cardContent}>
				<Text>{title}</Text>
				{tag ? (
					<Badge color="pink" variant="light">
						{tag}
					</Badge>
				) : null}
			</Card.Section>
		</Card>
	</Box>
);

export default ProjectCard;
