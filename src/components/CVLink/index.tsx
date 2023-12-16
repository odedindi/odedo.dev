import * as React from 'react';
import Link from 'next/link';
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

type CVLinkProps = {
	href: string;
	label: string;
	top?: number;
};
export const CVLink: React.FC<CVLinkProps> = ({ href, label, top = 20 }) => {
	const { dir } = useMantineTheme();

	const linkPosition = {
		top,
		left: dir === 'ltr' ? 25 : undefined,
		right: dir === 'rtl' ? 25 : undefined,
	};
	return (
		<Affix position={linkPosition}>
			<Anchor
				component={Link}
				href={href}
				target="_blank"
				rel="noreferrer noopener"
				underline={false}
				variant="gradient"
				gradient={blueTealGradient}
				lineClamp={2}
				sx={(theme) => ({ fontSize: theme.fontSizes.xs })}
			>
				<TextWithTypeWriterEffect text={label} />
			</Anchor>
		</Affix>
	);
};

export default CVLink;
