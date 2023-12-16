import { Anchor, Center, Divider, Group, Skeleton, Title } from '@mantine/core';
import { useMyContacts } from 'src/hooks';

import Link from 'next/link';
import Tooltip from 'src/components/Tooltip';

export const ContactSection: React.FC = () => {
	const myContacts = useMyContacts().data?.myContacts;

	if (!myContacts) return <Skeleton height={8} radius="xl" width="80%" />;

	const { email, github, linkedin } = myContacts;
	const contactsSection = {
		title: 'Contact',
		contact: [
			{
				type: 'Email',
				link: {
					href: `mailto:${email}`,
					text: email,
				},
			},
			{
				type: 'GitHub',
				link: {
					href: `github`,
					text: github.toString().replace('https://', ''),
				},
			},
			{
				type: 'LinkedIn',
				link: {
					href: linkedin,
					text: linkedin.toString().replace('https://', ''),
				},
			},
		],
	};
	return (
		<>
			<Title align="center">{contactsSection.title}</Title>
			<Divider my={15} />
			<Center>
				<Group direction="column" align="center">
					{contactsSection.contact.map(({ type, link: { href, text } }) => (
						<Tooltip content={text} key={type}>
							<Anchor
								component={Link}
								href={href}
								rel="noreferrer noopener"
								target="_blank"
							>
								<strong>{type}</strong>
							</Anchor>
						</Tooltip>
					))}
				</Group>
			</Center>
			<Divider mt={15} />
		</>
	);
};

export default ContactSection;
