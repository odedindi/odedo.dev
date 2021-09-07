import CreateAnimation from 'components/CreateAnimation';
import Button from '..';

type HoveringButtonProps = {
	onClick?: () => void;
	text?: string;
	id: string;
};

const HoveringButton = ({ id, onClick, text }: HoveringButtonProps) => (
	<CreateAnimation type="Hover">
		<Button id={id} type="Main" onClick={onClick} text={text} />
	</CreateAnimation>
);

export default HoveringButton;
