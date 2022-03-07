import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export const DarkModeToggler = () => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<ActionIcon
			variant="outline"
			color={isDark ? 'yellow' : 'blue'}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{isDark && <SunIcon style={{ width: 18, height: 18 }} />}
			{!isDark && <MoonIcon style={{ width: 18, height: 18 }} />}
		</ActionIcon>
	);
};

export default DarkModeToggler;
