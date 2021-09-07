// ================== styles ==================
import * as S from '../style';
// ============================================

type MainButtonProps = {
	onClick: () => void;
	text: string;
	id: string;
};
const MainButton = ({ id, onClick, text }: MainButtonProps) => (
	<S.MainButton id={id} onClick={onClick}>
		{text}
	</S.MainButton>
);

export default MainButton;
