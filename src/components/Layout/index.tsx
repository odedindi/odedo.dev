import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { AppShell, Box } from '@mantine/core';
import { Header } from './Header';
import { Footer } from 'src/components/Layout/Footer';

type LayoutProps = { pageTitle?: string };

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	children,
	pageTitle,
}) => (
	<>
		<Head>
			<title>{pageTitle}</title>
		</Head>
		<AppShell padding="md" header={<Header />} sx={{ minHeight: '90vh' }}>
			<Box sx={{}}>{children}</Box>
		</AppShell>
		<Footer />
	</>
);

export default Layout;
