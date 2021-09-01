// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from '../style';
// =============== translation ================
import { useTranslation } from 'next-i18next';
// ================== hooks ===================
import { useFadeOutFadeInEffect } from 'hooks/useFadeOutFadeInEffect';
// ================ components ================
import Button from 'components/Button';
import LocaleSwitcher from 'components/locale-switcher';
// ============================================

const Footer = () => {
	const { t } = useTranslation('footer');

	const fadeOutComponentClassName = 'contactButtonSection';
	const FadeOutComponent = () => (
		<Button
			type="HoveringButton"
			onClick={() => handleAnimation()}
			text={t('contact')}
		/>
	);

	const fadeInComponentClassName = 'socialMediaButtonsSection';
	const FadeInComponent = () => <Button type="ContactMeButtons" />;

	const {
		componentWrapperRef,
		FadeOutFadeInComponent,
		triggerAnimationFunctions,
	} = useFadeOutFadeInEffect(
		fadeOutComponentClassName,
		FadeOutComponent,
		fadeInComponentClassName,
		FadeInComponent,
	);

	const handleAnimation = () => {
		const { setEndX, setOpacity, setIsFirstLoad } =
			triggerAnimationFunctions;
		setEndX(30);
		setOpacity(0);
		setIsFirstLoad(false);
	};

	return (
		<S.FooterWrapper ref={componentWrapperRef}>
			<FadeOutFadeInComponent />
			<S.BottomWrapper>
				<LocaleSwitcher />
				<S.CopyRights>&copy;{new Date().getFullYear()}</S.CopyRights>
			</S.BottomWrapper>
		</S.FooterWrapper>
	);
};

export default Footer;
