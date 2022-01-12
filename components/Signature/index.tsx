// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './style';
// ================ components ================
import FullStackDeveloper from './AnimatedFullStackDeveloper';
import MyName from './MyName';
// ============================================

const Signature = () => {
	const [isMounted, setIsMounted] = React.useState(false);
	React.useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;

	return (
		<S.SignatureContainer>
			<MyName />
			<FullStackDeveloper />
		</S.SignatureContainer>
	);
};
export default Signature;
