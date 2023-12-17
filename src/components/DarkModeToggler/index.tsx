import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';
import { CSSProperties, FC } from 'react';

class Gradient {
	public from: string;
	public to: string;
	public deg: number;
	constructor({ from, to, deg }: { from: string; to: string; deg: number }) {
		this.from = from;
		this.to = to;
		this.deg = deg;
	}
	public invertDeg = () => this.deg + 180;

	public withRtl(dir: 'ltr' | 'rtl') {
		return {
			from: this.from,
			to: this.to,
			deg: dir === 'ltr' ? this.deg : this.invertDeg(),
		};
	}
}

const blueTealGradient = new Gradient({
	from: 'blue',
	to: 'teal',
	deg: 250,
});

export const DarkModeToggler: FC<{
	className?: string;
	style?: CSSProperties;
}> = ({ className, style }) => {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const isDark = colorScheme === 'dark';

	return (
		<ActionIcon
			className={className}
			style={style}
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
