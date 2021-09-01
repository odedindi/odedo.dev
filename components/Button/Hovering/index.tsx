import CreateAnimation from 'components/CreateAnimation';
import Button from '..';

type HoveringButtonProps = {
	onClick?: () => void;
	text?: string;
};

const HoveringButton = ({ onClick, text }: HoveringButtonProps) => (
	<CreateAnimation type="Hover">
		<Button type="MainButton" onClick={onClick} text={text} />
	</CreateAnimation>
);

export default HoveringButton;
