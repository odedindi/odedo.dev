// =============== React & Next ===============
import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import CreateAnimation from 'components/CreateAnimation';
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
					<Link
						key={locale}
						passHref
						href={{ pathname, query }}
						as={asPath}
						locale={locale}>
						<div>
							<CreateAnimation type="Hover">
								<S.Flag
									src={`/flags/${locale}.png`}
									alt={`${locale} flag`}
									layout="fixed"
									height="25rem"
									width="25rem"
								/>
							</CreateAnimation>
						</div>
					</Link>
				);
			})}
		</>
	);
};

export default LanguageChanger;
