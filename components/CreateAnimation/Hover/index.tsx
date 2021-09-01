// ================ Animation =================
import gsap from 'gsap';
// ============================================

const Hover: React.FC = ({ children }) => {
	const onEnter = (event: { currentTarget: gsap.TweenTarget }) => {
		gsap.to(event.currentTarget, { y: -10, scale: 1.2 });
	};

	const onLeave = (event: { currentTarget: gsap.TweenTarget }) => {
		gsap.to(event.currentTarget, { y: 0, scale: 1 });
	};

	return (
		<div onMouseEnter={onEnter} onMouseLeave={onLeave}>
			{children}
		</div>
	);
};

export default Hover;
