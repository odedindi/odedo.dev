import * as React from 'react';

import ContactSection from './ContactSection';
import SyntaxHighlighter from './SyntaxHighlighter';
import { Center } from '@mantine/core';
import styled from 'styled-components';

const Aside = styled.aside`
	width: 100%;
`;

const Sidebar: React.FC = () => (
	<Center>
		<Aside>
			<ContactSection />
			{process.env.NODE_ENV === 'development' ? <SyntaxHighlighter /> : null}
		</Aside>
	</Center>
);

export default Sidebar;
