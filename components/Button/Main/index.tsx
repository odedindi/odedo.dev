// ================== styles ==================
import * as S from '../style';
// ============================================

type MainButtonProps = {
	onClick: () => void;
	text: string;
};
const MainButton = ({ onClick, text }: MainButtonProps) => (
	<S.MainButton onClick={onClick}>{text}</S.MainButton>
);

export default MainButton;
