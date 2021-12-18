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
	randomBackground?: boolean;
};

const FlipOverCard = ({
	front,
	back,
	width,
	height,
	randomBackground,
}: AnimatedCardProps) => {
	return (
		<S.Card width={width}>
			<S.CardContainer height={height}>
				<div
					className="front"
					style={{
						backgroundImage: randomBackground
							? `url(https://picsum.photos/200/300)`
							: '',
					}}>
					<S.ContentWrapper>{front}</S.ContentWrapper>
				</div>
				<div
					className="back"
					style={{
						backgroundImage: randomBackground
							? `url(https://picsum.photos/200/300)`
							: '',
					}}>
					<S.ContentWrapper>{back}</S.ContentWrapper>
				</div>
			</S.CardContainer>
		</S.Card>
	);
};

export default FlipOverCard;
