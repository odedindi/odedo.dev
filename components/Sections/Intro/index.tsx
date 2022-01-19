import * as React from 'react';
import * as S from './style';

import { useTranslation } from 'next-i18next';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ModifiersPlugin } from 'gsap/'

import {
	FullStackDeveloper,
	MyName,
} from 'components/Sections/Intro/Signature';
import Button from 'components/Button';

const Intro = () => {
	const { t } = useTranslation('common');

	const intro = React.useRef<HTMLElement>(undefined!);

	const signatureRef = React.useRef<HTMLDivElement>(undefined!);

	const texts = React.useRef<HTMLParagraphElement[]>([]);
	const addTexts = (el: HTMLParagraphElement) => {
		if (!texts.current.includes(el)) texts.current.push(el);
	};

	const images = React.useRef<HTMLImageElement[]>([]);
	const addImages = (el: HTMLImageElement) => {
		if (!images.current.includes(el)) images.current.push(el);
	};

	const contactMe = React.useRef<HTMLDivElement>(undefined!);

	const [timeline] = React.useState(() => gsap.timeline({ delay: 1.2 }));

	const imagesFrom = (x: number, y: number) => ({
		x,
		y,
		opacity: 0,
		ease: 'power2',
		duration: 0.5,
	});

	const scrollEffect = React.useCallback(
		(trigger: gsap.DOMTarget) => ({
			trigger,
			scrub: true,
			start: 'top bottom',
		}),
		[],
	);
	React.useEffect(() => {
		const CSSPlugin = require('gsap/CSSPlugin');
		gsap.registerPlugin(CSSPlugin, ScrollTrigger);

		const animation = () => {
			gsap.set(intro.current, { autoAlpha: 1 });
			timeline
				.from(intro.current, { y: 100, ease: 'power4', duration: 0.5 })
				.from(signatureRef.current, {
					y: -40,
					opacity: 0,
					duration: 0.25,
					ease: 'power4',
				})
				.from(
					texts.current,
					{ x: -100, opacity: 0, ease: 'power4', duration: 0.3 },
					0.7,
				)
				.from(
					contactMe.current,
					{ x: 300, opacity: 0, ease: 'power4', duration: 0.25 },
					0.7,
				)
				.from(images.current[0], imagesFrom(-50, 50), 1)
				.from(images.current[1], imagesFrom(50, -50), 1)
				.to(contactMe.current, { y: 150 });
		};
		// animate when the intro is scrolled out

		const textsScrollAnimation = gsap.fromTo(
			texts.current,
			{ y: 75, ease: 'power4.in', duration: 0.5 },
			{ y: 0, scrollTrigger: scrollEffect(intro.current) },
		);
		const contactButtonAnimation = gsap.fromTo(
			contactMe.current,
			{ y: 75, duration: 0.25 },
			{ y: 150, scrollTrigger: scrollEffect(intro.current) },
		);
		const signatureAnimation = gsap.fromTo(
			signatureRef.current,
			{ y: 40, duration: 0.5, ease: 'power4' },
			{ y: 0, scrollTrigger: scrollEffect(intro.current) },
		);
		const parallaxAnimation = gsap.fromTo(
			images.current,
			{ y: '40vh' },
			{ y: '-40vh', scrollTrigger: scrollEffect(intro.current), ease: 'none' },
		);

		animation();
		return () => {
			timeline.kill();
			textsScrollAnimation.kill();
			contactButtonAnimation.kill();
			signatureAnimation.kill();
		};
	}, [scrollEffect, timeline]);

	return (
		<S.Intro ref={intro}>
			<S.SignatureContainer>
				<Signature ref={signatureRef} />
			</S.SignatureContainer>
			<S.Content>
				<S.P ref={addTexts}>{t('intro.hey')}</S.P>
				<br />
				<S.P ref={addTexts}>{t('intro.thanks')}</S.P>
				<S.P ref={addTexts}>{t('intro.serious')}</S.P>
				<br />
				<S.P ref={addTexts}>{t('intro.contact')}</S.P>
				<ContactMeButtons ref={contactMe} />
			</S.Content>

			<S.Image
				ref={addImages}
				alt="pilatus"
				src="/images/pilatus.jpg"
				position="front"
			/>
			<S.Image
				ref={addImages}
				alt="underAtree"
				src="/images/underAtree.jpg"
				position="back"
			/>
		</S.Intro>
	);
};

export default React.memo(Intro);

const ContactMeButtons = React.forwardRef<HTMLDivElement>((_, ref) => (
	<S.ContactMeWrapper ref={ref}>
		<Button id="socialMediaButtons" type="ContactMe" />
	</S.ContactMeWrapper>
));
ContactMeButtons.displayName = 'ContactButtonsWrapper';

const Signature = React.forwardRef<HTMLDivElement>((_props, ref) => (
	<S.SignatureContainer ref={ref}>
		<MyName />
		<FullStackDeveloper />
	</S.SignatureContainer>
));

Signature.displayName = 'signature';
