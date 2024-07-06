/* eslint-disable @next/next/no-img-element */
"use client";
import type { FC } from "react";
import { Text, Grid, Card, Box, Anchor } from "@mantine/core";
import classes from "./project.module.css";
import { SocialIcon } from "react-social-icons";
import { clsx } from "clsx";

interface ProjectProps {
	title: string;
	description: string;
	imageSrc: string;
	link: string;
	tecStack?: string;
	repo?: string;
	className?: string;
}

const Project: FC<ProjectProps> = ({
	title,
	description,
	imageSrc,
	link,
	tecStack,
	repo,
	className,
}) => (
	<Grid grow className={clsx(classes.grid, className)} gutter={"xl"}>
		<Grid.Col span={{ base: 12, md: 4 }} order={2}>
			<Text>{description}</Text>
		</Grid.Col>
		<Grid.Col span={{ base: 12, md: 8 }} order={1}>
			<Box className={classes.cardWrapper}>
				<Card shadow="lg" padding="lg" radius="md" bg="dark.5">
					<Card.Section className={classes.cardImage}>
						<img src={imageSrc} alt={title} height={100} width={100} />
					</Card.Section>
					<Card.Section className={classes.cardContent}>
						<Grid grow>
							<Grid.Col span={10}>
								<Anchor
									fz="xl"
									rel="noopener noreferrer"
									target="_blank"
									href={link}
								>
									{title}
								</Anchor>
							</Grid.Col>
							<Grid.Col span={1}>
								{repo ? (
									<SocialIcon
										url={repo}
										rel="noopener noreferrer"
										target="_blank"
									/>
								) : null}
							</Grid.Col>
						</Grid>

						<Text fz={"md"}>{tecStack}</Text>
					</Card.Section>
				</Card>
			</Box>
		</Grid.Col>
	</Grid>
);

export default Project;
