import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient();
	return (
		<QueryClientProvider client={client}>
			<Hydrate>
				{children}
				<ReactQueryDevtools />
			</Hydrate>
		</QueryClientProvider>
	);
};

export default ReactQueryProvider;
