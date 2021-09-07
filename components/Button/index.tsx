// ================ components ================
import ColorModeToggle from './ColorModeToggle';
import ContactMeButtons from './ContactMe';
import HoveringButton from './Hovering';
import MainButton from './Main';
// ============================================

type ButtonProps = {
	id?: string;
	onClick?: () => void;
	type: 'ColorModeToggle' | 'ContactMe' | 'Hovering' | 'Main';
	text?: string;
};

const Button: React.FC<ButtonProps> = ({ id, onClick, text, type }) => {
	if (type === 'ColorModeToggle') return <ColorModeToggle />;
	if (type === 'ContactMe') return <ContactMeButtons id={id as string} />;
	if (type === 'Main')
		return (
			<MainButton
				id={id as string}
				onClick={onClick as () => void}
				text={text as string}
			/>
		);
	if (type === 'Hovering')
		return (
			<HoveringButton
				id={id as string}
				onClick={onClick as () => void}
				text={text as string}
			/>
		);
	return null;
};

export default Button;
