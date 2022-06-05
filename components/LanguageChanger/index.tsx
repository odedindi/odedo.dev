// =============== React & Next ===============
import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import { ActionIcon } from '@mantine/core';
// ============================================

const LanguageChanger = () => {
	const router = useRouter();
	const { locales, locale: activeLocale } = router;
	const otherLocales = locales!.filter((locale) => locale !== activeLocale);

	return (
		<>
			{otherLocales.map((locale) => {
				const { pathname, query, asPath } = router;
				return (
					<ActionIcon<typeof Link>
						component={Link}
						key={locale}
						href={{ pathname, query }}
						as={asPath}
						locale={locale}>
						<S.Flag
							src={`/flags/${locale}.png`}
							alt={`${locale} flag`}
							layout="fixed"
							height="25rem"
							width="25rem"
						/>
					</ActionIcon>
				);
			})}
		</>
	);
};

export default LanguageChanger;
