// ================ components ================
import ContactMeButtons from './ContactMe';
import DarkModeToggler from './DarkModeToggler';
import HoveringButton from './Hovering';
import MainButton from './Main';
// ============================================

type ButtonProps = {
	id?: string;
	onClick?: () => void;
	type: 'DarkModeToggler' | 'ContactMe' | 'Hovering' | 'Main' | any;
	text?: string;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	disabled,
	id,
	onClick,
	text,
	type,
}) => {
	if (type === 'ContactMe') return <ContactMeButtons id={id as string} />;
	if (type === 'DarkModeToggler') return <DarkModeToggler />;

	if (type === 'Main')
		return (
			<MainButton
				id={id as string}
				onClick={onClick as () => void}
				text={text as string}
				disabled={disabled as boolean}
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
	return (
		<button id={id as string} onClick={onClick as () => void}>
			{text}
		</button>
	);
};

export default Button;
