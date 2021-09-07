// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import CreateAnimation from 'components/CreateAnimation';
// ============================================

const Logo = () => {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;

	return (
		<>
			<S.SlogenWrapper>
				<CreateAnimation type="RollTwice">
					<S.Slogen>Full Stack Developer</S.Slogen>
				</CreateAnimation>
			</S.SlogenWrapper>
			<S.MyName>Oded Winberger</S.MyName>
		</>
	);
};
export default Logo;
