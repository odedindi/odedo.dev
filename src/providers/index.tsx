import * as React from 'react';
import dynamic from 'next/dynamic';
import ApolloClientProvider from './ApolloClient';
import SEOProvider from './SEO';
import ReactQueryProvider from './React-Query';
const Styles = dynamic(() => import('./Styles'), { ssr: false });

export const Providers: React.FC = ({ children }) => (
	<>
		<ReactQueryProvider>
			<SEOProvider />
			<ApolloClientProvider>
				<Styles>{children}</Styles>
			</ApolloClientProvider>
		</ReactQueryProvider>
	</>
);

export default Providers;
