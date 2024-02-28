import React, { PropsWithChildren } from 'react';
import { AppShell, Box } from '@mantine/core';
import { Header, HeaderProps } from './Header';
import SEOProvider from 'src/providers/SEO';
import SelectLanguage from '../LanguageToggler';

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
				overflow: 'hidden',
				paddingTop: hideHeader ? undefined : '2rem',
			}}
		>
			<Box>{children}</Box>
			<SelectLanguage sx={{ position: 'absolute', top: "1rem" }} />
		</AppShell>
	</>
);

export default Layout;
