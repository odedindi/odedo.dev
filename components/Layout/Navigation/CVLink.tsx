import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

// import confetti from 'canvas-confetti';
// import { random } from 'lodash';

import { Affix, Anchor, useMantineTheme } from '@mantine/core';
import TextWithTypeWriterEffect from 'animations/TextWithTypeWriterEffect';
import { blueTealGradient } from 'styles/gradients';

// const confettiConfig: confetti.Options = {
// 	shapes: ['circle', 'square'],
// 	angle: random(0, 1, true) > 0.5 ? 45 : 135,
// 	scalar: 0.75,
// 	gravity: random(0, 1, true) > 0.5 ? -0.25 : 0.25,
// };

const cvUrl = 'https://odedwinberger-cv.vercel.app/';

export const CVLink: React.FC = () => {
	const { t } = useTranslation();
	const { locale } = useRouter();
	const { dir } = useMantineTheme();

	const linkPosition = {
		top: 20,
		left: dir === 'ltr' ? 25 : undefined,
		right: dir === 'rtl' ? 25 : undefined,
	};
	return (
		<Affix position={linkPosition}>
			<Link href={cvUrl} passHref>
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
					})}>
					<TextWithTypeWriterEffect text={t(`intro.cv.link`)} />
				</Anchor>
			</Link>
		</Affix>
	);
};

export default CVLink;
