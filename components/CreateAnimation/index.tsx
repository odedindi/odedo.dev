// =============== components =================
import Hover from './Hover';
import RollTwice from './RollTwice';
// ============================================

type CreateAnimationProps = {
	type: string;
};
const CreateAnimation: React.FC<CreateAnimationProps> = (props) => {
	if (props.type === 'Hover') return <Hover {...props} />;
	if (props.type === 'RollTwice') return <RollTwice {...props} />;
	return null;
};

export default CreateAnimation;
