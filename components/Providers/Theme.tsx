// ================== react ===================
import * as React from 'react';
// ================== style ===================
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { darkTheme, lightTheme } from 'styles/theme';
// ================== hooks ===================
import useDarkMode from 'use-dark-mode';
// ============================================

const ThemeProvider: React.FC = ({ children }) => {
	const { value: isDarkMode } = useDarkMode(false);

	return (
		<StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<GlobalStyle />
			{children}
		</StyledThemeProvider>
	);
};

export default ThemeProvider;
