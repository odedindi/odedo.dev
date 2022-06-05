// ================== react ===================
import * as React from 'react';
// ================== style ===================
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';
// ================== hooks ===================
import { useColorScheme, useHotkeys } from '@mantine/hooks';
import { useLanguageDirection } from './LanguageDirection';
// ============================================

const MantineStylesProvider: React.FC = ({ children }) => {
	const { isRtl } = useLanguageDirection();
	const dir = isRtl ? 'rtl' : 'ltr';

	if (process.env.NODE_ENV !== 'production') {
		console.log('isRtl: ', isRtl, 'dir: ', dir);
	}

	const preferredColorScheme = useColorScheme('dark');
	const [colorScheme, setColorScheme] =
		React.useState<ColorScheme>(preferredColorScheme);
	const toggleColorScheme = (
		value: ColorScheme = colorScheme === 'dark' ? 'light' : 'dark',
	): void => setColorScheme(value);

	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{ colorScheme, dir: dir }}
				emotionOptions={
					isRtl
						? // rtl cache
						  { key: 'odedindi-rtl', stylisPlugins: [rtlPlugin] }
						: // ltr cache
						  { key: 'odedindi' }
				}>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

export default MantineStylesProvider;
