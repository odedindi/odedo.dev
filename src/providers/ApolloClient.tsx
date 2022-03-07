import * as React from 'react';
import { ApolloProvider } from '@apollo/client';

import {
	InMemoryCache,
	ApolloClient,
	HttpLink,
	NormalizedCacheObject,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const initializeApollo = () =>
	new ApolloClient({
		link: new HttpLink({
			uri: '/api/graphql',
		}),
		ssrMode: false,
		cache: new InMemoryCache(),
	});

const useApollo = () => apolloClient ?? initializeApollo();

const ClearClientCache: React.FC<{
	apolloClient: ApolloClient<NormalizedCacheObject>;
}> = ({ apolloClient }) => {
	React.useEffect(() => {
		// clean cache when component get destroyed
		return () => {
			apolloClient.resetStore();
		};
	}, [apolloClient]);
	return null;
};

const ApolloClientProvider: React.FC = ({ children }) => {
	const client = useApollo();
	return (
		<ApolloProvider client={client}>
			<ClearClientCache apolloClient={client} />
			{children}
		</ApolloProvider>
	);
};

export default ApolloClientProvider;
