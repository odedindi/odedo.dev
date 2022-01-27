/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { device } from 'utils/mediaQueries';

const gallery = [
	{
		title: 'title one',
		cover:
			'https://images.unsplash.com/photo-1617643049820-f072111ac920?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	},
	{
		title: 'title two',
		cover:
			'https://images.unsplash.com/photo-1617643606475-99ad26026885?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80',
	},
	{
		title: 'title three',
		cover:
			'https://icons8.com/wp-content/uploads/2020/02/digital-illustration-brian-edward-miller.jpg',
	},
	{
		title: 'title four',
		cover:
			'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-7.jpg',
	},
];
const ProjectsCarousel = () => {
	const data = [
		{ name: 'first card' },
		{ name: 'second card' },
		{ name: 'third card' },
		{ name: 'fourth card' },
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
	const sortArray = React.useCallback(
		(array: HTMLDivElement[], isNext: boolean): ReturnType<gsap.Callback> => {
			if (isNext) {
				const [first, ...rest] = [...array];
				itemArray.current = [...rest, first];
			} else {
				let data = [...array];
				data.unshift(data.splice(array.length - 1, 1)[0]);
				itemArray.current = data;
			}
		},
		[],
	);

	const startAnim = (array: HTMLDivElement[], isNext = true) => {
		array.forEach((item, index) => {
			const xTranslateFrom = IMAGE_WIDTH / 2 + IMAGE_WIDTH * index;
			const xTranslateTo = IMAGE_WIDTH / 2 + IMAGE_WIDTH * (index - 1);

			if (index === 0) {
				// currently active slide
				console.log('isNext:', isNext);
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
		<>
			{/* <S.AnotherTry className="carousel">
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

			</S.AnotherTry> */}

			<Pag />
		</>
	);
};
export default ProjectsCarousel;

type CardProps = any;
const Card = React.forwardRef<HTMLDivElement, CardProps>(({ name }, ref) => (
	<S.Card ref={ref}>
		<p className={`card-text`}>{name}</p>
		<div className={'card'}></div>
	</S.Card>
));
Card.displayName = 'card';

const Pag = () => {
	const prevLink = React.useRef<HTMLAnchorElement>(undefined!);
	const prevContainer = React.useRef<HTMLDivElement>(undefined!);
	const nextLink = React.useRef<HTMLAnchorElement>(undefined!);
	const nextContainer = React.useRef<HTMLDivElement>(undefined!);
	const arrowG = React.useRef<SVGGElement[]>([]);
	const addArrowG = (el: SVGGElement) => {
		if (!arrowG.current.includes(el)) arrowG.current.push(el);
	};

	const [timelines, setTimelines] = useState(() => ({
		prev: gsap.timeline({ paused: true }),
		next: gsap.timeline({ paused: true }),
	}));

	React.useEffect(() => {
		const arrOffset = 35;
		gsap.set(arrowG.current, { x: -arrOffset });
		setTimelines((prev) => {
			const prevConSelector = gsap.utils.selector(prevContainer);
			const nextConSelector = gsap.utils.selector(nextContainer);
			const animateTo = { x: 0, ease: 'power2.easeInOut' };
			return {
				...prev,
				prev: gsap
					.timeline({ paused: true })
					.to(prevConSelector('g'), animateTo, '-=0.3')
					.duration(0.3),

				next: gsap
					.timeline({ paused: true })
					.to(nextConSelector('g'), animateTo, '-=0.3')
					.duration(0.3),
			};
		});
	}, []);
	const handleLink = {
		prev: {
			enter: () => timelines.prev.play(),
			leave: () => timelines.prev.reverse(),
		},
		next: {
			enter: () => timelines.next.play(),
			leave: () => timelines.next.reverse(),
		},
	};

	return (
		<StyledPag>
			<StyledLink
				prev
				ref={prevLink}
				onMouseEnter={handleLink.prev.enter}
				onMouseLeave={handleLink.prev.leave}
				href="!#">
				<LinkContainer prev ref={prevContainer}>
					<ArrowSvg prev ref={addArrowG} />
					<LinkText>Prev</LinkText>
				</LinkContainer>
			</StyledLink>
			<Card
				// ref={addItem}
				name="first card"
			/>
			<StyledLink
				ref={nextLink}
				onMouseEnter={handleLink.next.enter}
				onMouseLeave={handleLink.next.leave}
				href="!#">
				<LinkContainer ref={nextContainer}>
					<LinkText>Next</LinkText>
					<ArrowSvg ref={addArrowG} />
				</LinkContainer>
			</StyledLink>
		</StyledPag>
	);
};

const ArrowSvg = React.forwardRef<SVGGElement, { prev?: boolean }>(
	({ prev }, ref) => (
		<Arrow prev={prev} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 15">
			<g ref={ref}>
				<polyline
					id="large-arrow__head"
					points="43 2.775 49.125 7.5 43 12.5"
					fill="none"
					stroke="white"
					strokeMiterlimit="10"
				/>
				<rect x="1" y="7" width="46.5" height="1" fill="white" />
			</g>
		</Arrow>
	),
);
ArrowSvg.displayName = 'arrow';

const colorDarkUi = '#1f201c';
const colorGreen = '#92bf3e';
const StyledPag = styled.div`
	width: 99.5vw;
	height: 100vh;
	display: flex;

	${device.desktop} {
		width: 98vw;
	}

	${device.tablet} {
		width: 98vw;
	}
`;

const StyledLink = styled.a<{ prev?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 1rem;
	/* width: 2400px; */
	width: auto;
	height: 100%;

	background-color: #1f201c;
	color: white;
	text-decoration: none;
	transition: all 0.2s linear;

	&:hover {
		color: #92bf3e;
		border-color: rgba(146, 191, 62, 0.6);
	}
	${({ prev }) =>
		prev
			? css`
					border-right: 1px solid rgba(146, 191, 62, 0.1);
			  `
			: css`
					border-left: 1px solid rgba(146, 191, 62, 0.1);
			  `}
`;

const LinkContainer = styled.div<{ prev?: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;

	width: 100%;

	align-items: ${({ prev }) => (prev ? 'flex-end' : 'flex-start')};
`;
const LinkText = styled.span`
	padding: 0 15px;
	font-family: 'ff-meta-serif-web-pro';
	text-transform: uppercase;
	font-size: 14px;
`;

const Arrow = styled.svg<{ prev?: boolean }>`
	width: 71px;
	height: 15px;

	border: 1px solid red;

	${({ prev }) =>
		prev &&
		css`
			transform: rotate(180deg);
		`}
`;
