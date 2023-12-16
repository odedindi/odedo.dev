import { FC, PropsWithChildren } from 'react';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';

import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';

export const StylesProvider: FC<PropsWithChildren> = ({ children }) => {
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: 'OdedWinbergerCV-color-scheme',
		defaultValue: 'dark',
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
