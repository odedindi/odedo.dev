import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

export const CVLink: React.FC = () => {
	const { locale } = useRouter();
	const { dir } = useMantineTheme();

	const linkPosition = {
		top: 20,
		left: dir === 'ltr' ? 25 : undefined,
		right: dir === 'rtl' ? 25 : undefined,
	};
	return (
		<Affix position={linkPosition}>
			<Link href={'/assets/cv_oded_winberger.pdf'} passHref>
				<Anchor
					target="_blank"
					rel="noreferrer noopener"
					underline={false}
					variant="gradient"
					gradient={blueTealGradient}
					lineClamp={2}
					sx={(theme) => ({
						fontSize: theme.fontSizes.xs,
						width: locale === 'de' ? '15em' : '10em',
					})}
				>
					<TextWithTypeWriterEffect text="Download my CV here" />
				</Anchor>
			</Link>
		</Affix>
	);
};

export default CVLink;
