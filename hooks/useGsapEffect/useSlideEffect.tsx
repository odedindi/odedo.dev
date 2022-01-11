import * as React from 'react';
import gsap, { Power4 } from 'gsap';

type SlideOption = 'fade' | 'slide' | 'slideUp' | 'zoom' | 'flipX' | 'flipY';

const useSlideEffect = (slideOption?: SlideOption) => {
	const fade = {
		enter: (el: any, done: any) =>
			gsap
				.fromTo(
					el,
					{ autoAlpha: 0, scale: 1.5 },
					{
						autoAlpha: 1,
						scale: 1,
						transformOrigin: '50% 50%',
						ease: Power4.easeOut,
						onComplete: done,
					},
				)
				.duration(1),
		leave: (el: any, done: any) => {
			gsap
				.fromTo(
					el,
					{
						autoAlpha: 1,
						scale: 1,
					},
					{
						autoAlpha: 0,
						scale: 0.8,
						ease: Power4.easeOut,
						onComplete: done,
					},
				)
				.duration(1);
		},
	};

	const slide = {
		enter: (el: any, done: any) => {
			const tl = gsap.timeline({
				onComplete: done,
			});

			tl.set(el, {
				x: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%',
			});

			tl.to(el, {
				x: 0,
				ease: Power4.easeOut,
			}).duration(0.5);

			tl.to(el, {
				scale: 1,
				ease: Power4.easeOut,
			}).duration(1);
		},
		leave: (el: any, done: any) => {
			gsap
				.fromTo(
					el,
					{
						autoAlpha: 1,
					},
					{
						autoAlpha: 0,
						ease: Power4.easeOut,
						onComplete: done,
					},
				)
				.duration(1);
		},
	};

	const slideUp = {
		enter: (el: any, done: any) => {
			const tl = gsap.timeline({
				onComplete: done,
			});

			tl.set(el, {
				y: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%',
			});

			tl.to(el, {
				y: 0,
				ease: Power4.easeOut,
			}).duration(0.5);

			tl.to(el, {
				scale: 1,
				ease: Power4.easeOut,
			}).duration(1);
		},
		leave: (el: any, done: any) => {
			gsap
				.to(el, {
					y: window.innerHeight * -1.5,
					ease: Power4.easeOut,
					onComplete: done,
				})
				.duration(1);
		},
	};

	const zoom = {
		enter: (el: any, done: any) => {
			const tl = gsap.timeline({
				onComplete: done,
			});

			tl.set(el, {
				autoAlpha: 0,
				scale: 2,
				transformOrigin: '50% 50%',
			});

			tl.to(el, {
				autoAlpha: 1,
				scale: 1,
				ease: Power4.easeOut,
			}).duration(1);
		},
		leave: (el: any, done: any) => {
			gsap
				.to(el, {
					scale: 0,
					ease: Power4.easeOut,
					onComplete: done,
				})
				.duration(1);
		},
	};

	const flipX = {
		enter: (el: any, done: any) => {
			const tl = gsap.timeline({
				onComplete: done,
			});

			tl.set(el, {
				autoAlpha: 0,
				rotationX: 90,
				transformOrigin: '50% 50%',
			});

			tl.to(el, {
				autoAlpha: 1,
				rotationX: 0,
				ease: Power4.easeOut,
			}).duration(1);
		},
		leave: (el: any, done: any) => {
			gsap
				.to(el, {
					scale: 0,
					ease: Power4.easeOut,
					onComplete: done,
				})
				.duration(1);
		},
	};

	const flipY = {
		enter: (el: any, done: any) => {
			const tl = gsap.timeline({
				onComplete: done,
			});

			tl.set(el, {
				autoAlpha: 0,
				rotationY: 90,
				transformOrigin: '50% 50%',
			});

			tl.to(el, {
				autoAlpha: 1,
				rotationY: 0,
				ease: Power4.easeOut,
			}).duration(1);
		},
		leave: (el: any, done: any) => {
			gsap
				.to(el, {
					scale: 0,
					ease: Power4.easeOut,
					onComplete: done,
				})
				.duration(1);
		},
	};

	return { fade, flipX, flipY, slide, slideUp, zoom };
};

export default useSlideEffect;
