/* eslint-disable @next/next/no-img-element */
import { Text, Card, Group, Badge, useMantineTheme } from '@mantine/core';
import React, { FC, ImgHTMLAttributes } from 'react';

type ProjectCardProps = {
	title: string;
	description?: string;
	tag?: string;
	linkProps?: {
		href?: string;
	};
	imageProps?: ImgHTMLAttributes<HTMLImageElement>;
};
const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	tag,
	linkProps,
	imageProps,
}) => {
	const theme = useMantineTheme();

	const secondaryColor =
		theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
	const card = (
		<Card
			shadow="sm"
			padding="lg"
			radius="lg"
			style={{ cursor: 'pointer' }}
			component={linkProps?.href ? 'a' : 'div'}
		>
			<Card.Section
				style={{
					display: 'flex',
					justifyContent: 'center',
					padding: '16px 0',
				}}
			>
				{imageProps ? (
					<img
						src={imageProps.src}
						alt={imageProps.alt}
						height={100}
						style={{
							objectFit: 'contain',
							margin: 'auto',
							...imageProps.style,
						}}
					/>
				) : null}
			</Card.Section>

			<Group
				position="apart"
				style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
			>
				<Text weight={500}>{title}</Text>
				{tag ? (
					<Badge color="pink" variant="light">
						{tag}
					</Badge>
				) : null}
			</Group>

			{description ? (
				<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
					{description}
				</Text>
			) : null}
		</Card>
	);
	return (
		<div style={{ width: 340, margin: 'auto' }}>
			<Card
				shadow="md"
				padding="lg"
				radius="lg"
				style={{ cursor: 'pointer', textDecoration: 'none' }}
				rel="noopener noreferrer"
				target="_blank"
				href={linkProps?.href}
				component={linkProps?.href ? 'a' : 'div'}
			>
				<Card.Section
					style={{
						display: 'flex',
						justifyContent: 'center',
						paddingTop: '16px',
					}}
				>
					{imageProps ? (
						<img
							src={imageProps.src}
							alt={imageProps.alt}
							height={100}
							style={imageProps.style}
						/>
					) : null}
				</Card.Section>

				<Group
					position="apart"
					style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
				>
					<Text weight={500}>{title}</Text>
					{tag ? (
						<Badge color="pink" variant="light">
							{tag}
						</Badge>
					) : null}
				</Group>

				{description ? (
					<Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
						{description}
					</Text>
				) : null}
			</Card>
		</div>
	);
};
export default ProjectCard;
