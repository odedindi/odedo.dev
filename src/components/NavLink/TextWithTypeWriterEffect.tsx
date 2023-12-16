import { FC, useRef, useEffect } from 'react';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const random = (min: number, max: number): number =>
	Math.random() * (max - min) + min;

const TextWithTypeWriterEffect: FC<{ text?: string }> = ({ text = '' }) => {
	const titleLength: number = text.length - 1 ?? 1;

	const content = useRef<HTMLSpanElement>(undefined!);
	const cursor = useRef<HTMLSpanElement>(undefined!);

	useEffect(() => {
		gsap.registerPlugin(TextPlugin);
		const duration = random(0.5, 1);
		const cursorTween = gsap.fromTo(
			cursor.current,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				text: { value: '|' },
				duration: duration / 4,
				repeat: titleLength,
			},
		);

		const contentTween = gsap.to(content.current, {
			text: { value: text },
			duration,
			delay: duration * 1.5,
			ease: `StappedEase.config(${titleLength})`,
		});

		return () => {
			cursorTween.kill();
			contentTween.kill();
		};
	}, [text, titleLength]);
	return (
		<span ref={content} id="text">
			<span ref={cursor} id="cursor" />
		</span>
	);
};

export default TextWithTypeWriterEffect;
