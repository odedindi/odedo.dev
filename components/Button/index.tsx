// ================ components ================
import ContactMeButtons from './ContactMe';
import HoveringButton from './Hovering';
import MainButton from './Main';
// ============================================


type ButtonProps = {
	type: 'ContactMeButtons' | 'HoveringButton' | 'MainButton';
	onClick?: () => void;
	text?: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, text, type }) => {
	if (type === 'ContactMeButtons') return <ContactMeButtons />;
	if (type === 'MainButton')
		return (
			<MainButton
				onClick={onClick as () => void}
				text={text as string}
			/>
		);
	if (type === 'HoveringButton')
		return (
			<HoveringButton
				onClick={onClick as () => void}
				text={text as string}
			/>
		);
	return null;
};

export default Button;
