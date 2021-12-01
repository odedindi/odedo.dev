// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import styled from 'styled-components';
// =============== components =================
import ParticleEffectButton from 'react-particle-effect-button';
import { versions } from './versions';
// ============================================

type AnimatedButtonProps = {
	onClick: () => void;
	text: string;
};
const ExplodingButton = ({ onClick, text }: AnimatedButtonProps) => {
	const [hidden, setHidden] = React.useState(false);
	const [animating, setAnimating] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => {
		setMounted(true);
		return () => {
			setMounted(false);
		};
	}, []);

	const _onToggle = () => {
		if (mounted) {
			if (animating) return;

			setHidden(!hidden);
			setAnimating(!animating);
		}
	};

	const _onAnimationComplete = () => {
		setAnimating(false);
		onClick();
	};

	return (
		<ParticleEffectButton
			hidden={hidden}
			onComplete={_onAnimationComplete}
			{...versions[11].buttonOptions}>
			<InnerBtn style={{ ...versions[4].buttonStyles }} onClick={_onToggle}>
				{text}
			</InnerBtn>
		</ParticleEffectButton>
	);
};

export default ExplodingButton;

const InnerBtn = styled.button`
	max-width: 8rem;
	cursor: pointer;
`;
