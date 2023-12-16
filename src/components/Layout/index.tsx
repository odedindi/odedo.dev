import React, { PropsWithChildren } from 'react';
import { AppShell, Box } from '@mantine/core';
import { Header } from './Header';
import SEOProvider from 'src/providers/SEO';

type LayoutProps = { pageTitle?: string };

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	children,
	pageTitle,
}) => (
	<>
		<SEOProvider title={pageTitle} />
		<AppShell
			padding="md"
			header={<Header />}
			sx={{ minHeight: '90vh', minWidth: '320px', overflow: 'hidden' }}
		>
			<Box>{children}</Box>
		</AppShell>
	</>
);

export default Layout;
