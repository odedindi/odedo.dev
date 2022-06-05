import * as React from 'react';
import DirProvider from './LanguageDirection';
import MantineStylesProvider from './Mantine';

import QueryProvider from './React-Query';
import SEO from './SEO';
import Theme from './Theme';

const Providers: React.FC = ({ children }) => (
	<QueryProvider>
		<DirProvider>
			<MantineStylesProvider>
				<Theme>
					<SEO />
					{children}
				</Theme>
			</MantineStylesProvider>
		</DirProvider>
	</QueryProvider>
);

export default Providers;
