import * as React from 'react';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';

import {
	useColorScheme,
	useHotkeys,
	useLocalStorageValue,
} from '@mantine/hooks';

export const StylesProvider: React.FC = ({ children }) => {
	const preferredColorScheme = useColorScheme();
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: 'OdedWinbergerCV-color-scheme',
		defaultValue: preferredColorScheme,
	});

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const toggleColorScheme = (newScheme?: ColorScheme) =>
		setColorScheme(newScheme || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme }}
			>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default StylesProvider;
