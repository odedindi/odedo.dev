import {
	Anchor,
	Center,
	Divider,
	Group,
	Skeleton,
	Text,
	Title,
} from '@mantine/core';
import { useMyContacts } from 'src/hooks';

import Link from 'next/link';

export const ContactSection: React.FC = () => {
	const myContacts = useMyContacts().data?.myContacts;

	if (!myContacts) return <Skeleton height={8} radius="xl" width="80%" />;

	const { email, website, github, linkedin } = myContacts;
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
				type: 'Website',
				link: {
					href: website,
					text: new URL(website).host,
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
				<Group direction="column">
					{contactsSection.contact.map(({ type, link: { href, text } }) => (
						<Text key={type}>
							<strong>{type}: </strong>
							<Link passHref href={href}>
								<Anchor rel="noreferrer noopener" target="_blank">
									{text}
								</Anchor>
							</Link>
						</Text>
					))}
				</Group>
			</Center>
			<Divider mt={15} />
		</>
	);
};

export default ContactSection;
