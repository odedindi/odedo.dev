import React, { PropsWithChildren } from 'react';
import { AppShell, Box } from '@mantine/core';
import { Header, HeaderProps } from './Header';
import SEOProvider from 'src/providers/SEO';

type LayoutProps = {
	pageTitle?: string;
	hideHeader?: boolean;
	headerProps?: HeaderProps;
};

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
	children,
	pageTitle,

	hideHeader,
	headerProps,
}) => (
	<>
		<SEOProvider title={pageTitle} />
		<AppShell
			padding="md"
			header={hideHeader ? undefined : <Header {...headerProps} />}
			sx={{
				minHeight: '90vh',
				minWidth: '320px',
				overflow: 'hidden',
				paddingTop: hideHeader ? undefined : '2rem',
			}}
		>
			<Box>{children}</Box>
		</AppShell>
	</>
);

export default Layout;
