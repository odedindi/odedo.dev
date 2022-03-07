import * as React from 'react';

import * as S from './styles';

import gsap from 'gsap';

const Spinner = () => {
	const [tl] = React.useState(() => gsap.timeline({ repeat: -1 }));
	const svgRef = React.useRef<SVGSVGElement>(undefined!);
	const circles = React.useRef<SVGCircleElement[]>([]);
	const circleRef = React.useCallback((el: SVGCircleElement) => {
		if (!circles.current.includes(el)) circles.current.push(el);
	}, []);

	const from = React.useMemo(
		() => ({
			ease: 'power1.easeInOut',
			rotation: 360,
			scale: 0.8,
			transformOrigin: '50% 50%',
			stroke: '#29B6F6',
		}),
		[],
	);
	const to = React.useMemo(
		() => ({
			rotation: -720,
			stroke: '#FF4081',
			scale: 1,
		}),
		[],
	);

	React.useEffect(() => {
		circles.current.forEach((c, i) => {
			const isEven = i % 2;
			tl.add(
				gsap.fromTo(c, isEven ? from : to, isEven ? to : from).duration(2 + i),
				i,
			);
		});
		tl.add(
			gsap.fromTo(svgRef.current, { scale: 1.2 }, { scale: 1.4 }).duration(2),
			0.5,
		);
		return () => {
			tl.kill();
		};
	}, [from, tl, to]);

	const radiuses = [6, 10, 2];
	return (
		<S.Container title="Loading..." role="alert" aria-live="assertive">
			<S.Svg ref={svgRef}>
				{radiuses.map((r, i) => (
					<S.Circle key={r} ref={circleRef} r={r} delay={r} index={i} />
				))}
			</S.Svg>
		</S.Container>
	);
};

export default React.memo(Spinner);
