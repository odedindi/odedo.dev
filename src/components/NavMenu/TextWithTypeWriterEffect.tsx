import { FC, useRef, useEffect } from 'react';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const random = (min: number, max: number): number =>
	Math.random() * (max - min) + min;

type TextWithTypeWriterEffectProps = {
	text?: string;
	hide?: boolean;
};

const TextWithTypeWriterEffect: FC<TextWithTypeWriterEffectProps> = ({
	text = '',
	hide,
}) => {
	const titleLength: number = text.length - 1 ?? 1;

	const content = useRef<HTMLSpanElement>(undefined!);
	const cursor = useRef<HTMLSpanElement>(undefined!);

	useEffect(() => {
		gsap.registerPlugin(TextPlugin);
		const duration = random(0.35, 0.5);

		const cursorTween = gsap.timeline({
			repeat: -1,
			paused: hide,
		});
		const contentTween = gsap.to(content.current, {
			text: { value: text },
			duration,
			delay: random(duration, 2),
			paused: hide,
			onComplete: () => {
				cursorTween.pause();
			},
		});

		cursorTween.to(content.current, {
			text: { value: '|' },
			duration,
			ease: 'none',
			yoyo: true,
		});

		cursorTween.to(cursor.current, {
			duration: duration / 2,
			opacity: 0,
			yoyo: true,
			ease: 'none',
		});

		return () => {
			cursorTween.kill();
			contentTween.kill();
		};
	}, [hide, text, titleLength]);
	return (
		<span ref={content} id="text">
			<span ref={cursor} id="cursor" />
		</span>
	);
};

export default TextWithTypeWriterEffect;
