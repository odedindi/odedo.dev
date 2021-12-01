import * as React from 'react';
import Spinner from 'components/Spinner';

import Theme from './Theme';

const SEO = React.lazy(() => import('./SEO'));
const Toast = React.lazy(() => import('./Toaster'));
const QueryProvider = React.lazy(() => import('./React-Query'));

const Providers: React.FC = ({ children }) => (
	<React.Suspense fallback={<Spinner />}>
		<QueryProvider>
			<Theme>
				<SEO />
				<Toast />
				{children}
			</Theme>
		</QueryProvider>
	</React.Suspense>
);

export default Providers;
