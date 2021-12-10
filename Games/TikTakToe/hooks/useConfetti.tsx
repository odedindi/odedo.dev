import confetti from 'canvas-confetti';
import { randRange } from '../utils';

type UseConfetti = () => {
	confetti: {
		shoot: () => Promise<undefined> | null;
		reset: () => confetti.Reset;
	};
};

const useConfetti: UseConfetti = () => {
	const shoot = () =>
		confetti({
			angle: randRange(55, 125),
			spread: randRange(50, 70),
			particleCount: randRange(50, 100),
			origin: { y: 0.6 },
		});

	const reset = () => confetti.reset();

	return { confetti: { shoot, reset } };
};

export default useConfetti;
