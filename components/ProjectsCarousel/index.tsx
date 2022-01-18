/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import gsap from 'gsap';
// import { Cubic } from 'gsap/src/C';

// import { Draggable } from 'gsap/Draggable';

const ProjectsCarousel = () => {
	// const [timeline] = useState(() =>
	// 	gsap.timeline({ paused: true, repeat: -1 }),
	// );
	// const [state, setState] = useState(() => ({
	// 	slideCount: 3,
	// 	currentSlide: 0,
	// 	duration: 4,
	// 	fadeSpeed: 1,
	// }));
	// const slider = useRef<HTMLDivElement>(undefined!);
	// const slides = useRef<HTMLDivElement[]>([]);
	// const slide1 = useRef<HTMLDivElement>(undefined!);
	// const slide2 = useRef<HTMLDivElement>(undefined!);
	// const slide3 = useRef<HTMLDivElement>(undefined!);
	// const progressBar = useRef<HTMLDivElement>(undefined!);
	// useEffect(() => {
	// 	gsap.registerPlugin(Draggable);
	// }, []);
	// return (
	// 	<>
	// 		<div>
	// 			<S.SliderWrapper id="slider-wrapper">
	// 				<S.Slider id="slider">
	// 					<S.Slide1 id="slide1" className="slide">
	// 						1
	// 					</S.Slide1>
	// 					<S.Slide2 id="slide2" className="slide">
	// 						2
	// 					</S.Slide2>
	// 					<S.Slide3 id="slide3" className="slide">
	// 						3
	// 					</S.Slide3>
	// 				</S.Slider>
	// 				<S.ProgressBar id="progressBar" />
	// 			</S.SliderWrapper>
	// 		</div>
	// 		<div style={{ clear: 'both' }}></div>
	// 		<br />
	// 		<S.Button id="playbtn">play from beginning</S.Button>
	// 		<S.Button id="resumebtn">resume</S.Button>
	// 		<S.Button id="pausebtn">pause</S.Button>
	// 		<S.Button id="stopbtn">stop</S.Button>
	// 		<S.Button id="restartbtn">restart</S.Button>
	// 		<S.Button id="reversebtn">reverse</S.Button>
	// 		<br />
	// 	</>
	// );
	// ===== working but ugly ==============
	// let timer = useRef<any>(null);
	// let elems = useRef<HTMLImageElement[]>([]);
	// const addToElem = (el: HTMLImageElement) => {
	// 	if (!elems.current.includes(el)) elems.current.push(el);
	// };
	// let timeline = gsap.timeline({
	// 	defaults: {
	// 		duration: 0.75,
	// 		ease: 'power3.inOut',
	// 	},
	// 	paused: true,
	// });
	// const gallery = [
	// 	{
	// 		title: 'title one',
	// 		cover:
	// 			'https://images.unsplash.com/photo-1617643049820-f072111ac920?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	// 	},
	// 	{
	// 		title: 'title two',
	// 		cover:
	// 			'https://images.unsplash.com/photo-1617643606475-99ad26026885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	// 	},
	// 	{
	// 		title: 'title three',
	// 		cover:
	// 			'https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg',
	// 	},
	// 	{
	// 		title: 'title four',
	// 		cover:
	// 			'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg',
	// 	},
	// ];
	// const [state, setState] = useState({ current: 0, next: 1 });
	// const [userDetected, setUserDetected] = useState(false);
	// /**
	//  * @TODO
	//  * create a state that holds two values [ current: number, next: number]
	//  * create an event handler that set the state the current number
	//  * and calculate what will be the next value
	//  */
	// const calculateIndexs = React.useCallback(
	// 	(index: number) => {
	// 		if (index === gallery.length - 1) {
	// 			setState({ current: index, next: 0 });
	// 		} else {
	// 			setState({ current: index, next: index + 1 });
	// 		}
	// 	},
	// 	[gallery.length],
	// );
	// const flowUp = React.useCallback(
	// 	(onComplete: gsap.Callback) => {
	// 		timeline
	// 			.to(elems.current[0], { y: '-100%', opacity: 0, scale: -0.5 })
	// 			.to(
	// 				elems.current[1],
	// 				{
	// 					y: '-100%',
	// 					opacity: 1,
	// 					scale: 1,
	// 					onComplete,
	// 				},
	// 				'-=0.75',
	// 			)
	// 			.play();
	// 	},
	// 	[timeline],
	// );
	// const fadeOut = (onComplete: gsap.Callback) => {
	// 	timeline
	// 		.to(elems.current[0], {
	// 			duration: 0.5,
	// 			opacity: 0,
	// 			onComplete,
	// 		})
	// 		.to(elems.current[0], { opacity: 1 })
	// 		.play();
	// };
	// const handleChange = (index: number) => {
	// 	if (index !== state.current) {
	// 		clearTimeout(timer.current);
	// 		setUserDetected(true);
	// 		fadeOut(() => calculateIndexs(index));
	// 	}
	// };
	// const stepForward = React.useCallback(() => {
	// 	setUserDetected(false);
	// 	flowUp(() => calculateIndexs(state.next));
	// }, [calculateIndexs, flowUp, state.next]);
	// const activateTimer = React.useCallback(() => {
	// 	timer.current = setTimeout(() => {
	// 		stepForward();
	// 	}, 4000);
	// }, [stepForward]);
	// React.useLayoutEffect(() => {
	// 	const image1 = !!elems.current[0] && elems.current[0];
	// 	const image2 = !!elems.current[1] && elems.current[1];
	// 	activateTimer();
	// 	gsap.set(image2, { y: '0%', opacity: 0, scale: 1 });
	// 	if (userDetected) {
	// 		gsap.set(image1, { y: '0%', opacity: 0, scale: 1 });
	// 	} else {
	// 		gsap.set(image1, { y: '0%', opacity: 1, scale: 1 });
	// 	}
	// 	return () => {
	// 		clearTimeout(timer.current);
	// 	};
	// }, [activateTimer, state, timer, userDetected]);
	// // console.log(state);
	// return (
	// 	<S.SliderWrapper>
	// 		<S.Slider>
	// 			<div className="image">
	// 				<img ref={addToElem} src={gallery[state.current].cover} alt="" />
	// 				<p>{gallery[state.current].title}</p>
	// 			</div>
	// 			<div className="image">
	// 				<img ref={addToElem} src={gallery[state.next].cover} alt="" />
	// 				<p>{gallery[state.next].title}</p>
	// 			</div>
	// 			<div className="stripes">
	// 				{gallery.map((_item, index) =>
	// 					index === state.current ? (
	// 						<span
	// 							key={`stripe${index}`}
	// 							onClick={() => handleChange(index)}
	// 							style={{ opacity: 1 }}></span>
	// 					) : (
	// 						<span
	// 							key={`stripe${index}`}
	// 							onClick={() => handleChange(index)}
	// 							style={{ opacity: 0.5 }}></span>
	// 					),
	// 				)}
	// 			</div>
	// 		</S.Slider>
	// 	</S.SliderWrapper>
	// );
	// const wrapperRef = React.useRef(null);
	// const itemsRef = React.useRef<HTMLDivElement[]>([]);
	// const [carouselData, setCarouselData] = React.useState<number[]>([]);
	// const [itemHeight, setItemHeight] = React.useState(0);
	// const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
	// const measuredRef = React.useCallback((node) => {
	// 	if (node !== null) {
	// 		setItemHeight(node.getBoundingClientRect().height);
	// 	}
	// }, []);
	// const addToRefs = React.useCallback((el: HTMLDivElement) => {
	// 	if (el && !itemsRef.current.includes(el)) {
	// 		itemsRef.current.push(el);
	// 	}
	// }, []);
	// const animation = (carouselItems: HTMLDivElement[], width: number) =>
	// 	carouselItems.length > 0 &&
	// 	gsap
	// 		.to(carouselItems, {
	// 			duration: 1,
	// 			x: () => {
	// 				return `+=${width}`;
	// 			},
	// 			paused: true,
	// 			ease: 'ease.out',
	// 			overwrite: true,
	// 			repeat: -1,
	// 			modifiers: {
	// 				x: (x) => {
	// 					x = parseFloat(x) % width;
	// 					return `${x}px`;
	// 				},
	// 			},
	// 		})
	// 		.progress(1 / carouselItems.length);
	// const carouselAnimation = React.useCallback(() => {
	// 	const carouselItems = itemsRef.current;
	// 	let carouselWidth: number;
	// 	let carouselLength: number;
	// 	let snapBox: (valueToSnap: number) => number;
	// 	if (carouselItems.length > 0) {
	// 		carouselLength = itemsRef.current.length;
	// 		carouselWidth = itemsRef.current[0].clientWidth * carouselLength;
	// 		snapBox = gsap.utils.snap(itemsRef.current[0].clientWidth);
	// 		carouselItems.forEach((elm, i) => {
	// 			gsap.set(elm, {
	// 				x: i * itemsRef.current[0].clientWidth,
	// 				left: -itemsRef.current[0].clientWidth,
	// 			});
	// 		});
	// 		gsap.set('#wrapper', { height: itemHeight });
	// 	}
	// 	const wrapProgress = gsap.utils.wrap(0, 1);
	// 	const proxy = document.createElement('div');
	// 	const timeLine = animation(carouselItems, carouselWidth);
	// 	Draggable.create(proxy, {
	// 		trigger: '#elm',
	// 		throwProps: true,
	// 		inertia: true,
	// 		isThrowing: true,
	// 		dragResistance: 0.55,
	// 		onDrag: updateProgress,
	// 		onThrowUpdate: updateProgress,
	// 		dragClickables: true,
	// 		snap: {
	// 			x: snapBox,
	// 		},
	// 	});
	// 	function updateProgress() {
	// 		if (timeLine)
	// 			timeLine.progress(
	// 				wrapProgress(gsap.getProperty(proxy, 'x') / carouselWidth),
	// 			);
	// 	}
	// }, [itemHeight]);
	// React.useEffect(() => {
	// 	gsap.registerPlugin(Draggable);
	// 	setCarouselData([1, 2, 3, 4, 5, 6, 7, 8]);
	// }, []);
	// React.useEffect(() => {
	// 	const handleWindowResize = () => setWindowWidth(window.innerWidth);
	// 	window.addEventListener('resize', () => {
	// 		handleWindowResize();
	// 		carouselAnimation();
	// 	});
	// 	carouselAnimation();
	// }, [carouselAnimation, carouselData, windowWidth]);
	// return (
	// 	<S.WithDrag className="carousel-container" id="wrapper" ref={wrapperRef}>
	// 		<div className="carousel-display" ref={measuredRef}>
	// 			{carouselData.length &&
	// 				carouselData.map((item) => {
	// 					return (
	// 						<div
	// 							key="item"
	// 							id="elm"
	// 							className="carousel-display__item"
	// 							ref={addToRefs}>
	// 							{item}
	// 						</div>
	// 					);
	// 				})}
	// 		</div>
	// 	</S.WithDrag>
	// );

	const data = [
		{ name: 'first card' },
		{ name: 'second card' },
		{ name: 'third card' },
		// { name: 'fourth card' },
		// { name: 'fifth card' },
		// { name: 'sixth card' },
		// { name: 'seventh card' },
	];

	const IMAGE_WIDTH = 300;
	const IMAGE_HEIGHT = 200;
	const VISIBLE_IMAGES = 3;

	const carouselRef = React.useRef<HTMLDivElement>(undefined!);

	const parentWidth = IMAGE_WIDTH * (VISIBLE_IMAGES + 1);

	const itemArray = useRef<HTMLDivElement[]>([]);
	const addItem = (el: HTMLDivElement) => {
		if (!itemArray.current.includes(el)) itemArray.current.push(el);
	};
	const sortArray = (
		array: HTMLDivElement[],
		isNext: boolean,
	): ReturnType<gsap.Callback> => {
		if (isNext) {
			const [first, ...rest] = [...array];
			itemArray.current = [...rest, first];
		} else {
			let data = [...array];
			data.unshift(data.splice(array.length - 1, 1)[0]);
			itemArray.current = data;
		}
	};

	const startAnim = (array: HTMLDivElement[], isNext = true) => {
		array.forEach((item, index) => {
			const xTranslateFrom = IMAGE_WIDTH / 2 + IMAGE_WIDTH * index;
			const xTranslateTo = IMAGE_WIDTH / 2 + IMAGE_WIDTH * (index - 1);
			console.log(item);
			if (index === 0) {
				if (isNext) {
					gsap
						.fromTo(
							item,
							{ x: xTranslateFrom, y: 0, zIndex: 10, opacity: 0.7 },
							{
								x: xTranslateFrom,
								y: 0,
								opacity: 0,
								zIndex: 9,
								delay: 0.03,
								ease: 'Cubic.easeInOut',
								onComplete: sortArray(
									array,
									isNext,
								) as unknown as gsap.Callback,
							},
						)
						.duration(0.5);
				} else {
					gsap
						.fromTo(
							item,
							{ x: 150, y: 0 },
							{
								x: 450,
								y: 0,
								ease: 'Cubic.easeInOut',
								onComplete: sortArray(
									array,
									isNext,
								) as unknown as gsap.Callback,
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,
							{
								opacity: 0.7,
								scale: 0.7,
								rotate: -6,
							},
							{ opacity: 1, scale: 1, rotate: 0, ease: 'Cubic.easeInOut' },
						)
						.duration(0.5);
				}
			}
			if (index === 1) {
				if (isNext) {
					gsap
						.fromTo(
							item,
							{ x: xTranslateFrom, y: 0 },
							{
								x: xTranslateTo,
								y: 0,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,
							{ opacity: 1, scale: 1, rotate: 0 },
							{
								opacity: 0.7,
								scale: 0.7,
								rotate: -6,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				} else {
					gsap
						.fromTo(
							item,
							{ x: 450, y: 0 },
							{
								x: 750,
								y: 0,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,

							{ opacity: 1, scale: 1, rotate: 0 },
							{
								opacity: 0.7,
								scale: 0.7,
								rotate: 6,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				}
			}
			if (index === 2) {
				if (isNext) {
					gsap
						.fromTo(
							item,
							{ x: xTranslateFrom, y: 0 },
							{
								x: xTranslateTo,
								y: 0,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,
							{ opacity: 0.7, scale: 0.7, rotate: 6 },
							{
								opacity: 1,
								scale: 1,
								rotate: 0,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				} else {
					gsap
						.fromTo(
							item,
							{ x: 750, y: 0, opacity: 0.7 },
							{
								x: 750,
								y: 0,
								opacity: 0,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				}
			}
			if (index === 3) {
				if (isNext) {
					gsap
						.fromTo(
							item,
							{ x: xTranslateFrom, y: 0, zIndex: 9, opacity: 0 },
							{
								x: xTranslateTo,
								y: 0,
								zIndex: 10,
								opacity: 1,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,
							{ opacity: 0.7, scale: 0.7, rotate: 6 },
							{
								opacity: 0.7,
								scale: 0.7,
								rotate: 6,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				}
			}

			if (index === array.length - 1) {
				if (!isNext) {
					gsap
						.fromTo(
							item,
							{ x: 150, y: 0, zIndex: 9, opacity: 0 },
							{
								x: 150,
								y: 0,
								zIndex: 10,
								opacity: 1,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
					gsap
						.fromTo(
							item,
							{ opacity: 0.7, scale: 0.7, rotate: -6 },
							{
								opacity: 0,
								scale: 0.7,
								rotate: -6,
								ease: 'Cubic.easeInOut',
							},
						)
						.duration(0.5);
				}
			}
		});
	};

	useEffect(() => {
		itemArray.current.forEach((item, index) => {
			const rotate = index === 0 ? -6 : index === 2 ? 6 : 0;
			gsap.set(item, {
				x: index < 3 ? index * 300 + 150 : 2 * 300 + 150,
				opacity: index >= 3 ? 0 : 1,
				zIndex: index >= 3 ? 9 : 10,
			});
			gsap.set(item, {
				scale: index === 1 ? 1 : 0.7,
				opacity: index === 1 ? 1 : 0,
				rotate,
			});
		});
	}, []);

	const next = () => startAnim(itemArray.current);

	const prev = () => startAnim(itemArray.current, false);

	return (
		<S.AnotherTry className="carousel">
			<div
				className="carousel-box"
				style={{
					width: parentWidth,
				}}>
				{data.map((carousel, index) => (
					<Card
						key={index}
						ref={addItem}
						{...carousel}
						parentWidth={parentWidth}
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGHT}
						handleNext={next}
						handlePrev={prev}
					/>
				))}
			</div>

			<div
				className="btn-box"
				style={{
					width: parentWidth,
				}}>
				<button className="carousel-btn prev-btn" onClick={prev}>
					Prev
				</button>
				<button className="carousel-btn next-btn" onClick={next}>
					Next
				</button>
			</div>
		</S.AnotherTry>
	);
};
export default ProjectsCarousel;

type CardProps = any;
const Card = React.forwardRef<HTMLDivElement, CardProps>(
	({ name, parentWidth, width, height, handleNext, handlePrev }, ref) => (
		<S.Card
			ref={ref}
			style={{
				width,
				height: height + 100,
			}}>
			<p className={`card-text`}>{name}</p>
			<div
				className={'card'}
				style={{
					width,
					height,
				}}></div>
		</S.Card>
	),
);
Card.displayName = 'card';
