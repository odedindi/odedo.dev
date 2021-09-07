// =============== React & Next ===============
import * as React from 'react';
// ================ Animation =================
import gsap from 'gsap';
// ============================================

type UseFadeInFadeOut = ({
	fadeOut,
	fadeIn,
	yAxis,
	delay,
}: {
	fadeOut: FadingComponent;
	fadeIn: FadingComponent;
	yAxis: {
		from: number;
		to: number;
	};
	delay: number;
}) => {
	componentWrapperRef: React.RefObject<HTMLElement>;
	FadeOutFadeInComponent: () => JSX.Element;
};

export const useFadeOutFadeIn: UseFadeInFadeOut = ({
	fadeOut,
	fadeIn,
	yAxis,
	delay,
}) => {
	const componentWrapperRef = React.useRef<HTMLElement>(null);
	const isRefMounted = React.useRef(false);

	const [startAnimation, setStartAnimation] = React.useState(false);
	const triggerAnimation = () => setStartAnimation(true);

	const [isFadeInComponentVisible, setIsFadeInComponentVisible] =
		React.useState(() => (startAnimation ? true : false));

	// store the timeline in a ref.
	const timeline = React.useRef<gsap.core.Timeline>();

	const fadeEffect = React.useMemo(
		() => ({
			out: (fn: () => void) => ({
				delay: delay,
				y: yAxis.from,
				opacity: 0,
				scale: 0,
				onComplete: () => {
					fn();
				},
			}),

			in: {
				from: {
					y: yAxis.from,
					opacity: 0,
					scale: 0,
					visibility: 'hidden',
				},
				to: {
					delay: delay,
					y: yAxis.to,
					opacity: 1,
					scale: 1,
					visibility: 'visible',
				},
			},
		}),
		[delay, yAxis.from, yAxis.to],
	);
	React.useEffect(() => {
		isRefMounted.current = true;

		if (isRefMounted.current) {
			const selector = gsap.utils.selector(componentWrapperRef);
			if (startAnimation) {
				const fadeInComponent = () => {
					setIsFadeInComponentVisible(true);
					timeline.current = gsap
						.timeline()
						.fromTo(
							selector(`#${fadeIn.id}`),
							fadeEffect.in.from,
							fadeEffect.in.to,
						);
				};

				// make sure animation kicks in only if the element is on the document
				if (document.querySelector(`#${fadeOut.id}`)) {
					timeline.current = gsap
						.timeline()
						.to(selector(`#${fadeOut.id}`), fadeEffect.out(fadeInComponent));
				}
			}
		}
		return () => {
			isRefMounted.current = false;
		};
	}, [fadeEffect, fadeIn.id, fadeOut.id, startAnimation]);

	const FadeOutFadeInComponent = () => (
		<section onClick={triggerAnimation}>
			{!isFadeInComponentVisible && fadeOut.component}

			{isFadeInComponentVisible && fadeIn.component}
		</section>
	);
	return {
		componentWrapperRef,
		FadeOutFadeInComponent,
	};
};
