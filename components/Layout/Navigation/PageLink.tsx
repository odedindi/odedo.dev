import * as React from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import { Menu, Text } from '@mantine/core';

type PageLinkProps = {
	to: string;
	icon?: React.ReactNode;
	label: string;
};
const PageLink: React.FC<PageLinkProps> = ({ icon, label, to }) => {
	const { pathname } = useRouter();

	return pathname === to ? null : (
		<Menu.Item icon={icon}>
			<Link passHref href={to}>
				<Text size="xs" color="dimmed" transform="capitalize">
					{label}
				</Text>
			</Link>
		</Menu.Item>
	);
};

export default PageLink;
