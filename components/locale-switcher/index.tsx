// =============== React & Next ===============
import { useRouter } from 'next/router';
import Link from 'next/link';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import CreateAnimation from 'components/CreateAnimation';
// ============================================

const LocaleSwitcher = () => {
	const router = useRouter();
	const { locales, locale: activeLocale } = router;
	const otherLocales = locales!.filter(
		(locale) => locale !== activeLocale,
	);
	return (
		<ul>
			{otherLocales.map((locale) => {
				const { pathname, query, asPath } = router;
				return (
					<li key={locale}>
						<CreateAnimation type="Hover">
							<Link
								passHref
								href={{ pathname, query }}
								as={asPath}
								locale={locale}>
								<S.FlagWrapper>
									<S.Flag
										src={`/assets/flags/${locale}.png`}
										alt={`${locale} flag`}
										layout="responsive"
										height="50%"
										width="50%"
									/>
								</S.FlagWrapper>
							</Link>
						</CreateAnimation>
					</li>
				);
			})}
		</ul>
	);
};

export default LocaleSwitcher;
