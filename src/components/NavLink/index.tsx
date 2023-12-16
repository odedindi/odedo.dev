import { FC, HTMLAttributeAnchorTarget } from 'react';
import Link, { LinkProps } from 'next/link';
import { Affix, Anchor, useMantineTheme } from '@mantine/core';

import TextWithTypeWriterEffect from './TextWithTypeWriterEffect';

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

type NavLinkProps = LinkProps & {
	label: string;
	top?: number;
	left?: number;
	right?: number;
	target?: HTMLAttributeAnchorTarget;
	rel?: string;
};

const NavLink: FC<NavLinkProps> = ({
	top = 20,
	left = 25,
	right = 25,
	label,
	...props
}) => {
	const { dir } = useMantineTheme();

	return (
		<Affix
			position={{
				top: `${top}px`,
				left: dir === 'ltr' ? `${left}px` : undefined,
				right: dir === 'rtl' ? `${right}px` : undefined,
			}}
		>
			<Anchor
				component={Link}
				underline={false}
				variant="gradient"
				gradient={blueTealGradient}
				lineClamp={2}
				{...props}
				sx={(theme) => ({
					fontSize: theme.fontSizes.xs,
					transition: 'transform 0.2s linear',
					':hover': { transform: 'scale(1.25)' },
				})}
			>
				<TextWithTypeWriterEffect text={label} />
			</Anchor>
		</Affix>
	);
};
export const NavLinks: FC<{
	links: {
		href: string;
		label: string;
		target?: HTMLAttributeAnchorTarget;
	}[];
}> = ({ links }) => (
	<>
		{links.map((link, i) => (
			<NavLink key={i} {...link} top={(i + 1) * 20} left={25} right={25} />
		))}
	</>
);
export default NavLinks;
