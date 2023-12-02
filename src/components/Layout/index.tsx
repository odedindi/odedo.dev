import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { AppShell, Box } from '@mantine/core';
import { Header } from './Header';

type LayoutProps = { pageTitle?: string };

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	children,
	pageTitle,
}) => (
	<>
		<Head>
			<title>{pageTitle}</title>
			<link rel="icon" href="/favicon.ico" sizes="any" />
		</Head>
		<AppShell padding="md" header={<Header />} sx={{ minHeight: '90vh' }}>
			<Box>{children}</Box>
		</AppShell>
	</>
);

export default Layout;
