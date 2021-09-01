// =============== React & Next ===============
import * as React from 'react';
// ================ Animation =================
import gsap from 'gsap';
// ============================================

type UseFadeInFadeOutEffect = {
	(
		fadeOutComponentClassName: string,
		FadeOutComponent: React.FC,
		fadeInComponentClassName: string,
		FadeInComponent: React.FC,
	): {
		componentWrapperRef: React.RefObject<HTMLElement>;
		FadeOutFadeInComponent: React.FC;
		triggerAnimationFunctions: {
			setEndX: React.Dispatch<React.SetStateAction<number>>;
			setOpacity: React.Dispatch<React.SetStateAction<number>>;
			setIsFirstLoad: React.Dispatch<React.SetStateAction<boolean>>;
		};
	};
};

export const useFadeOutFadeInEffect: UseFadeInFadeOutEffect = (
	fadeOutComponentClassName,
	FadeOutComponent,
	fadeInComponentClassName,
	FadeInComponent,
) => {
	const componentWrapperRef = React.useRef<HTMLElement>(null);
	const isRefMounted = React.useRef(false);

	const [isFirstLoad, setIsFirstLoad] = React.useState(true);
	const [isFadeInComponentVisible, setIsFadeInComponentVisible] =
		React.useState(() => (isFirstLoad ? false : true));

	const [endX, setEndX] = React.useState(0);

	const [opacity, setOpacity] = React.useState(1);

	// store the timeline in a ref.
	const timeline = React.useRef<gsap.core.Timeline>();

	const triggerAnimationFunctions = {
		// how far should the component drift before disappearing
		// => numbers will take it left and positive numbers to the right
		// for example setEndX(-200) or setEndX(200)
		setEndX,

		// to make the component disapear nicely recommend to set to 0
		// for example setOpacity(0)
		setOpacity,
		// this option is here to prevent the effect from running on first render
		// => should be set to false
		// for example setIsFirstLoad(false)
		setIsFirstLoad,
	};

	React.useEffect(() => {
		isRefMounted.current = true;
		let timeout: NodeJS.Timeout;
		if (isRefMounted.current) {
			const q = gsap.utils.selector(componentWrapperRef);
			timeline.current = gsap
				.timeline()
				.to(q(`.${fadeInComponentClassName}`), {
					x: 200,
					opacity: 0,
				});
			// make sure animation kicks in only if
			// the element is on the document
			if (document.querySelector(`.${fadeOutComponentClassName}`)) {
				timeline.current = gsap
					.timeline()
					.to(q(`.${fadeOutComponentClassName}`), {
						x: endX,
						opacity: opacity,
					});
				if (!isFirstLoad) {
					timeout = setTimeout(() => {
						setIsFadeInComponentVisible(true);
					}, 500);
				}
			}
			if (isFadeInComponentVisible) {
				timeline.current = gsap
					.timeline()
					.set(`.${fadeOutComponentClassName}`, {
						visibility: 'hidden',
					})
					.to(q(`.${fadeInComponentClassName}`), {
						x: 0,
						opacity: 1,
					});
			}
		}
		return () => {
			clearTimeout(timeout);
			isRefMounted.current = false;
		};
	}, [
		endX,
		fadeInComponentClassName,
		fadeOutComponentClassName,
		isFadeInComponentVisible,
		isFirstLoad,
		opacity,
	]);

	const FadeOutFadeInComponent = () => (
		<>
			<section className={fadeOutComponentClassName}>
				{!isFadeInComponentVisible && <FadeOutComponent />}
			</section>

			<section className={fadeInComponentClassName}>
				{isFadeInComponentVisible && <FadeInComponent />}
			</section>
		</>
	);
	return {
		componentWrapperRef,
		FadeOutFadeInComponent,
		triggerAnimationFunctions,
	};
};
