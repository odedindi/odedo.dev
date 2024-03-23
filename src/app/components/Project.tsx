/* eslint-disable @next/next/no-img-element */
"use client";
import type { FC } from "react";
import { Text, Grid, Card, Box, Anchor } from "@mantine/core";
import classes from "./project.module.css";
import { SocialIcon } from "react-social-icons";

type ProjectProps = {
	title: string;
	description: string;
	imageSrc: string;
	link: string;
	tecStack?: string;
	repo?: string;
};

const Project: FC<ProjectProps> = ({
	title,
	description,
	imageSrc,
	link,
	tecStack,
	repo,
}) => (
	<Grid grow className={classes.grid}>
		<Grid.Col span={4}>
			<Text>{description}</Text>
		</Grid.Col>
		<Grid.Col span={6}>
			<Box className={classes.cardWrapper}>
				<Card shadow="lg" padding="lg" radius="md" bg="dark.5">
					<Card.Section className={classes.cardImage}>
						<img src={imageSrc} alt={title} height={100} width={100} />
					</Card.Section>
					<Card.Section className={classes.cardContent}>
						<Grid grow>
							<Grid.Col span={9}>
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
