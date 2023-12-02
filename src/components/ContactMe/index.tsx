import { capitalize } from 'lodash';

import { SocialIcon } from 'react-social-icons';

import { ActionIcon, Box, Group } from '@mantine/core';
import gsap from 'gsap';
import React from 'react';

type ContactSource = 'facebook' | 'linkedin' | 'github' | 'discord' | 'email';

type ContactLinks = {
	[typeParameter in ContactSource]: string;
};
const contactLinks = {
	// facebook: 'https://www.facebook.com/oded.winberger/',
	linkedin: 'https://www.linkedin.com/in/odedw/',
	github: 'https://github.com/odedindi',
	// discord: 'https://discordapp.com/users/804035729201037353',
	email: 'mailto:oded.winberger@gmail.com',
};

type SocialMediaButtonProps = {
	id: string;
	href: string;
};

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ id, href }) => (
	<ActionIcon
		variant="transparent"
		sx={({ colors, colorScheme }) => ({
			backgroundColor: colorScheme === 'dark' ? colors.gray[0] : undefined,
			width: '1.25rem',
			height: '1.25rem',
			borderRadius: '50%',
			border: 0,
		})}
		title={capitalize(id)}
	>
		<SocialIcon
			id={id}
			url={href}
			style={{ width: '1.75rem', height: '1.75rem' }}
		/>
	</ActionIcon>
);

const ContactMeButtons: React.FC = () => {
	const onEnter: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
		({ currentTarget }) => gsap.to(currentTarget, { y: -10, scale: 1.2 }),
		[],
	);

	const onLeave: React.MouseEventHandler<HTMLDivElement> = React.useCallback(
		({ currentTarget }) => gsap.to(currentTarget, { y: 0, scale: 1 }),
		[],
	);
	return (
		<Group position="center">
			{Object.entries(contactLinks).map(([contactSource, href]) => (
				<Box key={contactSource} onMouseEnter={onEnter} onMouseLeave={onLeave}>
					<SocialMediaButton id={contactSource} href={href} />
				</Box>
			))}
		</Group>
	);
};
export default ContactMeButtons;
