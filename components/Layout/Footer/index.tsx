// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// ================ components ================
import Button from 'components/Button';
import GithubStats from './GithubStats';
// ============================================

const Footer = () => {
	const { t } = useTranslation('footer');

	return (
		<S.FooterWrapper>
			<S.ContactMeWrapper>
				<Button id="socialMediaButtons" type="ContactMe" />
			</S.ContactMeWrapper>
			<S.BottomWrapper>
				<GithubStats />
				<S.CopyRights>&copy;2020</S.CopyRights>
			</S.BottomWrapper>
		</S.FooterWrapper>
	);
};

export default Footer;
