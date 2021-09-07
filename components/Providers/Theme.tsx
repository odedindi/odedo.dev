// ================== react ===================
import * as React from 'react';
// ================== style ===================
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
// ================== hooks ===================
import useDarkMode from 'use-dark-mode';
// ============================================

const HiddenDiv = styled.div`
	visibility: hidden;
`;

const Theme: React.FC = ({ children }) => {
	const { value: isDarkMode } = useDarkMode(false);

	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	const body = (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
	if (isMounted) return body;
	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			<HiddenDiv>{children}</HiddenDiv>
		</ThemeProvider>
	);
};

export default Theme;
