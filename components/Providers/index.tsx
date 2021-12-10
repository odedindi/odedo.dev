import * as React from 'react';

import Theme from './Theme';
import SEO from './SEO';
import Toast from './Toaster';
import QueryProvider from './React-Query';

const Providers: React.FC = ({ children }) => (
	<QueryProvider>
		<Theme>
			<SEO />
			<Toast />
			{children}
		</Theme>
	</QueryProvider>
);

export default Providers;
