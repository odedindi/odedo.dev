import * as React from 'react';

import GSAPTimeLingProvider from './GSAPTimeline';
import Mdx from './Mdx';
import QueryProvider from './React-Query';
import SEO from './SEO';
import Theme from './Theme';
import Toast from './Toaster';

const Providers: React.FC = ({ children }) => (
	<QueryProvider>
		<Theme>
			<Mdx>
				<GSAPTimeLingProvider>
					<SEO />
					<Toast />
					{children}
				</GSAPTimeLingProvider>
			</Mdx>
		</Theme>
	</QueryProvider>
);

export default Providers;
