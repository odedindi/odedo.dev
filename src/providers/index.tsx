import { FC, PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import ApolloClientProvider from './ApolloClient';
import ReactQueryProvider from './React-Query';

const Styles = dynamic(() => import('./Styles'), { ssr: false });

export const Providers: FC<PropsWithChildren> = ({ children }) => (
	<>
		<ReactQueryProvider>
			<ApolloClientProvider>
				<Styles>{children}</Styles>
			</ApolloClientProvider>
		</ReactQueryProvider>
	</>
);

export default Providers;
