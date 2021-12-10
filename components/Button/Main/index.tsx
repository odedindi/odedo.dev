// ================== styles ==================
import * as S from '../style';
// ============================================

type MainButtonProps = {
	onClick: () => void;
	text: string;
	id: string;
	disabled?: boolean;
};
const MainButton = ({ disabled, id, onClick, text }: MainButtonProps) => (
	<S.MainButton disabled={disabled} id={id} onClick={onClick}>
		{text}
	</S.MainButton>
);

export default MainButton;
