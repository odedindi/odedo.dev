// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// =============== translation ================
// import { useTranslation } from 'next-i18next';
// ================ components ================
import Button from 'components/Button';
import GithubStats from './GithubStats';
import LanguageChanger from 'components/LanguageChanger';
// ============================================

const Footer = () => {
	// const { t } = useTranslation('footer');

	return (
		<S.FooterWrapper>
			<S.ContactMeWrapper>
				<Button id="socialMediaButtons" type="ContactMe" />
			</S.ContactMeWrapper>

			<S.GitHubStatsWrapper>
				<GithubStats />
				<S.Copyrights>&copy; 2022 ODEDINDI</S.Copyrights>
			</S.GitHubStatsWrapper>
			<S.LanguageAndThemeChangersWrapper>
				<LanguageChanger />
				{/* <Button type="DarkModeToggler" /> */}
			</S.LanguageAndThemeChangersWrapper>
		</S.FooterWrapper>
	);
};

export default Footer;
