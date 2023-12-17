import { FC, HTMLAttributeAnchorTarget } from 'react';
import Link, { LinkProps } from 'next/link';
import { Anchor } from '@mantine/core';

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
	public withRtl = (dir: 'ltr' | 'rtl') => ({
		from: this.from,
		to: this.to,
		deg: dir === 'ltr' ? this.deg : this.invertDeg(),
	});
}

const blueTealGradient = new Gradient({
	from: 'blue',
	to: 'teal',
	deg: 250,
});

type NavLinkProps = LinkProps & {
	label: string;
	target?: HTMLAttributeAnchorTarget;
	rel?: string;
	dontShow?: boolean;
};

const NavLink: FC<NavLinkProps> = ({ label, dontShow, ...props }) => (
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
			cursor: dontShow ? 'auto' : 'pointer',
			pointerEvents: dontShow ? 'none' : 'auto',
		})}
	>
		<TextWithTypeWriterEffect text={label} dontShow={dontShow} />
	</Anchor>
);

export default NavLink;
