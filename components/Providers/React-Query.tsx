import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

const QueryProvider: React.FC = ({ children }) => {
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

export default QueryProvider;
