import * as React from 'react';
import * as S from './style';

import gsap from 'gsap';

const Intro = () => {
	const intro = React.useRef<HTMLElement>(undefined!);

	const texts = React.useRef<HTMLParagraphElement[]>([]);
	const addTexts = (el: HTMLParagraphElement) => {
		if (!texts.current.includes(el)) texts.current.push(el);
	};
	const images = React.useRef<HTMLImageElement[]>([]);
	const addImages = (el: HTMLImageElement) => {
		if (!images.current.includes(el)) images.current.push(el);
	};
	const [timeline] = React.useState(() => gsap.timeline({ delay: 1.2 }));
	const imagesFrom = (x: number, y: number) => ({
		x,
		y,
		opacity: 0,
		ease: 'power2',
		duration: 5,
	});
	React.useEffect(() => {
		const animation = () => {
			timeline
				.from(intro.current, { y: 100, ease: 'power4', duration: 1.5 })
				.from(
					texts.current,
					{ x: -100, opacity: 0, ease: 'power4', duration: 3 },
					0.7,
				)
				.from(images.current[0], imagesFrom(-50, 50), 1)
				.from(images.current[1], imagesFrom(50, -50), 1);

			// animate when the intro is scrolled out
			scrollTriggerTimeline.to(
				texts.current,
				{ y: 100, ease: 'power4.in', duration: 1.5 },
				0,
			);
		};

		const scrollTriggerTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: intro.current,
				scrub: 1,
				start: 'top bottom',
				end: 'bottom top',
			},
		});
		animation();
		return () => {
			timeline.kill();
			scrollTriggerTimeline.kill();
		};
	}, [timeline]);

	return (
		<S.Intro ref={intro} className="intro">
			<S.Content>
				<S.P ref={addTexts}>Hey you!</S.P>
				<S.P ref={addTexts}>
					Thank you very much for taking your time and checking up on me.
				</S.P>
				<S.P ref={addTexts}>
					Whether it&apos;s for serious work or serious play, or nothing serious
					at all.
				</S.P>
				<br />
				<S.P ref={addTexts}>Don&apos;t hesitate to contact me.</S.P>
			</S.Content>
			<S.Image1 ref={addImages} src="/images/pilatus.jpg" />
			<S.Image2 ref={addImages} src="/images/underAtree.jpg" />
		</S.Intro>
	);
};

export default React.memo(Intro);
