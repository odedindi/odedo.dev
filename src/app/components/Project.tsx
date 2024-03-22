/* eslint-disable @next/next/no-img-element */
"use client";
import type { FC } from "react";
import { Text, Grid, Card, Box } from "@mantine/core";
import classes from "./project.module.css";

type ProjectProps = {
	title: string;
	description: string;
	imageSrc: string;
	link: string;
};

const Project: FC<ProjectProps> = ({ title, description, imageSrc, link }) => (
	<Grid grow className={classes.grid}>
		<Grid.Col span={6}>
			<Text>{description}</Text>
		</Grid.Col>
		<Grid.Col span={6}>
			<Box className={classes.cardWrapper}>
				<Card
					shadow="md"
					padding="lg"
					radius="lg"
					className={classes.card}
					rel="noopener noreferrer"
					target="_blank"
					href={link}
					component="a"
				>
					<Card.Section className={classes.cardImage}>
						<img src={imageSrc} alt={title} height={100} />
					</Card.Section>
					<Card.Section className={classes.cardContent}>
						<Text>{title}</Text>
					</Card.Section>
				</Card>
			</Box>
		</Grid.Col>
	</Grid>
);

export default Project;
