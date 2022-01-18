import * as React from 'react';

import QueryProvider from './React-Query';
import SEO from './SEO';
import Theme from './Theme';

const Providers: React.FC = ({ children }) => (
	<QueryProvider>
		<Theme>
			<SEO />
			{children}
		</Theme>
	</QueryProvider>
);

export default Providers;
