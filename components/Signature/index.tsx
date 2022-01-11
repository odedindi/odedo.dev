// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import CreateAnimation from 'components/CreateAnimation';
import AnimatedFullStackDeveloper from './AnimatedLogo';
// ============================================

const Signature = () => {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;

	return (
		<S.SignatureContainer>
			<S.MyName>Oded Winberger</S.MyName>
			<S.SlogenWrapper>
				<AnimatedFullStackDeveloper />
			</S.SlogenWrapper>
		</S.SignatureContainer>
	);
};
export default Signature;
