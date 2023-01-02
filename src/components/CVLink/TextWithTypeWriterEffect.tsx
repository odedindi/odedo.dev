import * as React from 'react';

import gsap from 'gsap';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const TextWithTypeWriterEffect: React.FC<{ text?: string }> = ({
	text = '',
}) => {
	const titleLength: number = text.length - 1 ?? 1;

	const content = React.useRef<HTMLSpanElement>(undefined!);
	const cursor = React.useRef<HTMLSpanElement>(undefined!);

	React.useEffect(() => {
		gsap.registerPlugin(TextPlugin);
		const cursorTween = gsap.fromTo(
			cursor.current,
			{ autoAlpha: 0 },
			{
				autoAlpha: 1,
				text: { value: '|' },
				duration: 0.5,
				repeat: -1,
				ease: `StappedEase.config(${titleLength})`,
			},
		);

		const contentTween = gsap.to(content.current, {
			text: { value: text },
			duration: 4,
			delay: 3,
			ease: 'none',
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
