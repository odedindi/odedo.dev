import * as React from 'react';

import * as S from './style';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Navigation = () => {
	const nav = React.useRef<HTMLElement>(undefined!);

	const svg = React.useRef<SVGSVGElement>(undefined!);
	const q = gsap.utils.selector(svg);
	const animatedRects = React.useRef<SVGRectElement[]>([]);
	const rectRefs = (el: SVGRectElement) => {
		if (!animatedRects.current.includes(el)) animatedRects.current.push(el);
	};
	const [timeline] = React.useState(() => gsap.timeline({ delay: 0.5 }));
	React.useEffect(() => {
		gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
		const animateNav = () => {
			timeline
				.from(
					q('rect'),
					{
						scale: 0,
						transformOrigin: 'center ',
						duration: 0.6,
						ease: 'power4',
						stagger: 0.1,
					},
					0.6,
				)
				.to(
					animatedRects.current,
					{
						scale: 0.8,
						transformOrigin: 'center left',
						duration: 0.4,
						ease: 'power2',
						stagger: 0.1,
					},
					'-=0.6',
				);
		};

		animateNav();
		gsap.set(nav.current, { autoAlpha: 1 });
		return () => {
			timeline.kill();
		};
	}, [q, timeline]);

	const anchorHandle = {
		click: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
			e.preventDefault();
			gsap.to(window, { scrollTo: { y: 0 }, duration: 2, ease: 'power4' });
		},
		mouseEnter: () =>
			gsap.to(animatedRects.current, {
				scaleX: 1,
				transformOrigin: 'top left',
				duration: 0.4,
				ease: 'power4',
				stagger: 0.25,
			}),
		mouseLeave: () =>
			gsap.to(animatedRects.current, {
				scaleX: 0.8,
				transformOrigin: 'top left',
				duration: 0.6,
				ease: 'power4',
				stagger: 0.1,
			}),
	};

	return (
		<S.Nav ref={nav}>
			<S.ButtonAnchor
				onClick={anchorHandle.click}
				onMouseEnter={anchorHandle.mouseEnter}
				onMouseLeave={anchorHandle.mouseLeave}>
				<S.ButtonSvg ref={svg}>
					<rect ref={rectRefs} x="18" y="8" />
					<rect ref={rectRefs} x="8" y="14" />
					<rect x="8" y="20" />
				</S.ButtonSvg>
			</S.ButtonAnchor>
		</S.Nav>
	);
};

export default Navigation;
