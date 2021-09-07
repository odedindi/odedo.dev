// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from '../style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// ================== hooks ===================
import { useFadeOutFadeIn } from 'hooks/useFadeOutFadeIn';
// ================ components ================
import Button from 'components/Button';
import LanguageChanger from 'components/LanguageChanger';
// ============================================

const Footer = () => {
	const { t } = useTranslation('footer');

	const { componentWrapperRef, FadeOutFadeInComponent } = useFadeOutFadeIn({
		fadeOut: {
			id: 'contactButton',
			component: (
				<Button
					id="contactButton"
					type="Main"
					onClick={() => {}}
					text={t('contact')}
				/>
			),
		},
		fadeIn: {
			id: 'socialMediaButtons',
			component: <Button id="socialMediaButtons" type="ContactMe" />,
		},
		yAxis: {
			from: 125,
			to: 125,
		},
		delay: 0.25,
	});

	return (
		<S.FooterWrapper ref={componentWrapperRef}>
			<S.ContactMeWrapper>
				<FadeOutFadeInComponent />
			</S.ContactMeWrapper>
			<S.CopyRightsAndLanguagesWrapper>
				<LanguageChanger />
				<S.CopyRights>&copy;{new Date().getFullYear()}</S.CopyRights>
			</S.CopyRightsAndLanguagesWrapper>
		</S.FooterWrapper>
	);
};

export default Footer;
