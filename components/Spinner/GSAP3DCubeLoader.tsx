import * as React from 'react';

import * as S from './GSAP3DCubeLoaderStyles';

import gsap from 'gsap';
type PanelRef = React.MutableRefObject<HTMLDivElement[]>;
type addRef = (el: HTMLDivElement) => void;
interface AddPanelsTo {
	back: addRef;
	right: addRef;
	bottom: addRef;
	top: addRef;
	left: addRef;
	front: addRef;
}
const Loader = () => {
	const [timeline] = React.useState(() => gsap.timeline({ repeat: -1 }));
	const containerRef = React.useRef<HTMLDivElement>(undefined!);

	const frontPanels: PanelRef = React.useRef([])!;
	const backPanels: PanelRef = React.useRef([])!;
	const leftPanels: PanelRef = React.useRef([])!;
	const rightPanels: PanelRef = React.useRef([])!;
	const topPanels: PanelRef = React.useRef([])!;
	const bottomPanels: PanelRef = React.useRef([])!;

	const addPanelsTo: AddPanelsTo = {
		front: (el) => {
			if (!frontPanels.current.includes(el)) frontPanels.current.push(el);
		},
		back: (el) => {
			if (!backPanels.current.includes(el)) backPanels.current.push(el);
		},
		left: (el) => {
			if (!leftPanels.current.includes(el)) leftPanels.current.push(el);
		},
		right: (el) => {
			if (!rightPanels.current.includes(el)) rightPanels.current.push(el);
		},
		top: (el) => {
			if (!topPanels.current.includes(el)) topPanels.current.push(el);
		},
		bottom: (el) => {
			if (!bottomPanels.current.includes(el)) bottomPanels.current.push(el);
		},
	};

	const facesIn = React.useCallback(
		() =>
			gsap
				.timeline({
					defaults: {
						scaleY: 1,
						opacity: 0.9,
						backgroundColor: S.C.midColor,
						transformOrigin: 'center bottom',
						duration: S.C.faceDuration,
						ease: S.C.easing,
						stagger: {
							each: S.C.staggerOffset,
						},
					},
				})
				.to(backPanels.current, {})
				.to(rightPanels.current, {}, 0)
				.to(bottomPanels.current, {}, 0)
				.to(topPanels.current, {}, 0.3)
				.to(leftPanels.current, {}, 0.3)
				.to(frontPanels.current, {}, 0.3),

		[backPanels, bottomPanels, frontPanels, leftPanels, rightPanels, topPanels],
	);

	const facesOut = React.useCallback(
		() =>
			gsap
				.timeline({
					defaults: {
						// scaleY: 0,
						opacity: 0,
						backgroundColor: S.C.outColor,
						transformOrigin: 'center top',
						duration: S.C.faceDuration,
						ease: S.C.easing,
						stagger: {
							each: S.C.staggerOffset,
						},
					},
				})
				.to(topPanels.current, {})
				.to(leftPanels.current, {}, 0)
				.to(frontPanels.current, {}, 0)
				.to(backPanels.current, {}, 0.3)
				.to(rightPanels.current, {}, 0.3)
				.to(bottomPanels.current, {}, 0.3),
		[backPanels, bottomPanels, frontPanels, leftPanels, rightPanels, topPanels],
	);

	const initLoader = React.useCallback(() => {
		gsap.set(containerRef.current, { autoAlpha: 1 });
		timeline.add(facesIn()).add(facesOut(), '+=0.5').timeScale(12);
	}, [facesIn, facesOut, timeline]);

	React.useEffect(() => {
		initLoader();

		return () => {
			timeline.kill();
		};
	}, [initLoader, timeline]);

	return (
		<S.Container ref={containerRef}>
			<S.Scene>
				<S.Cubes>
					{Array.from({ length: 3 }).map((_, i) => (
						<S.Cube key={1}>
							<S.Front>
								<Panels ref={addPanelsTo.front} />
							</S.Front>
							<S.Back>
								<Panels ref={addPanelsTo.back} />
							</S.Back>
							<S.Left>
								<Panels ref={addPanelsTo.left} />
							</S.Left>
							<S.Right>
								<Panels ref={addPanelsTo.right} />
							</S.Right>
							<S.Top>
								<Panels ref={addPanelsTo.top} />
							</S.Top>
							<S.Bottom>
								<Panels ref={addPanelsTo.bottom} />
							</S.Bottom>
						</S.Cube>
					))}
				</S.Cubes>
			</S.Scene>
		</S.Container>
	);
};

export default React.memo(Loader);

const refedPanels = React.forwardRef<HTMLDivElement>((_, ref) => (
	<S.FaceWrap>
		{Array.from({ length: 5 }).map((_, i) => (
			<S.FacePanel key={i} ref={ref} />
		))}
	</S.FaceWrap>
));
refedPanels.displayName = 'panels';

const Panels = React.memo(refedPanels);
