import * as React from 'react';
import * as S from './styles';

import ContactSection from './ContactSection';
import SyntaxHighlighter from './SyntaxHighlighter';
import { Center } from '@mantine/core';

export const Sidebar: React.FC = () => (
	<Center>
		<S.Sidebar>
			<ContactSection />
			{process.env.NODE_ENV === 'development' ? <SyntaxHighlighter /> : null}
		</S.Sidebar>
	</Center>
);

export default Sidebar;
