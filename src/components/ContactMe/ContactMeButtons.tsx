import { SocialIcon } from 'react-social-icons';

import { ActionIcon, Box, Group } from '@mantine/core';
import gsap from 'gsap';
import { useCallback } from 'react';
import type { FC, MouseEventHandler } from 'react';

type ContactSource = 'facebook' | 'linkedin' | 'github' | 'discord' | 'email';

type ContactLinks = {
	[typeParameter in ContactSource]: string;
};
const contactLinks: Partial<ContactLinks> = {
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
			textTransform: 'capitalize',
		})}
		title={id}
	>
		<SocialIcon
			id={id}
			url={href}
			style={{ width: '1.75rem', height: '1.75rem' }}
		/>
	</ActionIcon>
);

const ContactMeButtons: FC = () => {
	const onEnter: MouseEventHandler<HTMLDivElement> = useCallback(
		({ currentTarget }) => gsap.to(currentTarget, { y: -10, scale: 1.2 }),
		[],
	);

	const onLeave: MouseEventHandler<HTMLDivElement> = useCallback(
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
