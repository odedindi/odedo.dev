// =============== React & Next ===============
import * as React from 'react';
// ================== styles ==================
import * as S from './styles';
// ============================================

type AnimatedCardProps = {
	front?: any;
	back?: any;
	width?: string;
	height?: string;
	backgroundUrlFront?: string;
	backgroundUrlBack?: string;
	randomBackground?: boolean;
	onClick?: () => void;
};

const FlipOverCard = ({
	back,
	backgroundUrlBack,
	backgroundUrlFront,
	front,
	height,
	onClick,
	randomBackground,
	width,
}: AnimatedCardProps) => {
	return (
		<S.Card width={width} onClick={onClick}>
			<S.CardContainer height={height}>
				<div
					className="front"
					style={{
						backgroundImage: backgroundUrlFront
							? `url(${backgroundUrlFront})`
							: `url(${randomBackground})`
							? `url(https://picsum.photos/200/300)`
							: '',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
					}}>
					<S.ContentWrapper>{front}</S.ContentWrapper>
				</div>
				<div
					className="back"
					style={{
						backgroundImage: backgroundUrlBack
							? `url(${backgroundUrlBack})`
							: `url(${randomBackground})`
							? `https://picsum.photos/200/300)`
							: '',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
					}}>
					<S.ContentWrapper>{back}</S.ContentWrapper>
				</div>
			</S.CardContainer>
		</S.Card>
	);
};

export default FlipOverCard;
