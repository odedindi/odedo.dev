// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable @next/next/no-img-element */
import * as React from 'react';
// // ================== styles ==================
// import styled from 'styled-components';
// // ============================================
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
// import Intro from './Intro';
// import Section from 'components/Section';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// const dark = '#242423';
// const Wrapper = styled.div`
// 	width: 100vw;
// 	background-color: white;
// 	font-family: 'Noto Sans', sans-serif;
// 	font-size: 14px;
// 	color: ${dark};
// 	line-height: 1.3;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	// overflow: hidden;

// 	.logo,
// 	h1,
// 	h2 {
// 		margin: 0;
// 		line-height: 1;
// 		font-family: 'Cinzel', serif;
// 		font-weight: 400;
// 	}

// 	p {
// 		margin: 0;
// 	}

// 	.stage {
// 		position: relative;
// 		background: white;
// 		/* visibility: hidden; */
// 	}

// 	/*  ==========================================================================
//     Intro
//     ========================================================================== */
// 	.footer {
// 		height: 100vh;
// 	}

// 	/*  ==========================================================================
//     Slides
//     ========================================================================== */

// 	.slide {
// 		display: flex;
// 		align-items: stretch;
// 		height: 100vh;
// 		overflow: hidden;

// 		&:nth-of-type(even) {
// 			background: #c4cdc4;
// 		}

// 		@media all and (max-width: 768px) {
// 			display: block;
// 			position: relative;
// 		}
// 	}

// 	/*  Columns
//     ========================================================================== */

// 	.col {
// 		flex-basis: 50%;

// 		@media all and (max-width: 768px) {
// 			display: block;
// 			width: 100%;
// 			height: 100vh;
// 		}
// 	}

// 	.col--1 {
// 		position: relative;
// 		z-index: 1;

// 		@media all and (max-width: 768px) {
// 			position: relative;
// 			z-index: 1;
// 		}
// 	}

// 	.col--2 {
// 		position: relative;
// 		overflow: hidden;

// 		@media all and (max-width: 768px) {
// 			position: absolute;
// 			z-index: 0;
// 			left: 0;
// 			top: 0;
// 		}
// 	}

// 	/*  ==========================================================================
//     Column Content
//     ========================================================================== */

// 	.col__content {
// 		position: relative;
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: flex-end;
// 		overflow: hidden;
// 		height: 100%;
// 		padding: 6vw 6vw 10vw;

// 		@media all and (max-width: 768px) {
// 			width: 80%;
// 		}
// 	}

// 	.col__content--1 {
// 		background: #d8c0c0;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#d8c0c0, 0.9);
// 		}
// 	}

// 	.col__content--2 {
// 		background: #cdd5e0;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#cdd5e0, 0.9);
// 		}
// 	}

// 	.col__content--3 {
// 		background: #f3d3b0;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#f3d3b0, 0.9);
// 		}
// 	}

// 	.col__content--4 {
// 		background: #f8e9e6;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#f8e9e6, 0.9);
// 		}
// 	}

// 	.col__content--5 {
// 		background: #d1e2ec;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#d1e2ec, 0.9);
// 		}
// 	}

// 	.col__content--6 {
// 		background: #d7cec5;

// 		@media all and (max-width: 768px) {
// 			background: rgba(#d7cec5, 0.9);
// 		}
// 	}

// 	/*  Column Content
//     ========================================================================== */

// 	.col__content-title {
// 		margin: 0 0 2vw;
// 		font-size: 11vw;
// 		letter-spacing: -0.8vw;

// 		@media all and (max-width: 768px) {
// 			margin: 0 0 6vw;
// 			font-size: 18vw;
// 		}
// 	}

// 	.col__content-wrap {
// 		display: flex;
// 		justify-content: flex-end;

// 		@media all and (max-width: 768px) {
// 			flex-direction: column;
// 		}
// 	}

// 	.col__content-txt {
// 		max-width: 22vw;
// 		order: 2;
// 		margin-left: 32px;

// 		@media all and (max-width: 768px) {
// 			order: 1;
// 			max-width: 40vw;
// 			margin: 0 0 10vw 10vw;
// 		}
// 	}

// 	.slide-link {
// 		position: relative;
// 		order: 1;
// 		display: flex;
// 		justify-content: flex-end;
// 		width: 75px;
// 		height: 53px;

// 		> * {
// 			pointer-events: none;
// 		}

// 		@media all and (max-width: 768px) {
// 			order: 2;
// 			align-self: flex-end;
// 		}
// 	}

// 	.slide-link__circ {
// 		width: 53px;
// 		height: 53px;
// 		border-radius: 50%;
// 		border: 1px solid ${dark};
// 	}

// 	.slide-link__line {
// 		position: absolute;
// 		top: 25px;
// 		left: 0;
// 		width: 64px;
// 		height: 3px;
// 		background: ${dark};
// 	}

// 	.line {
// 		overflow: hidden;

// 		&:nth-of-type(even) {
// 			margin-top: -1vw;
// 		}
// 	}

// 	.line__inner {
// 		display: block;
// 	}

// 	.slide__scroll-link {
// 		position: absolute;
// 		right: -113px;
// 		bottom: 3.5vw;
// 		display: block;
// 		width: 140px;
// 		height: 140px;
// 		background: ${dark};
// 		overflow: hidden;

// 		@media all and (max-width: 768px) {
// 			display: none;
// 		}
// 	}

// 	.slide__scroll-line {
// 		position: absolute;
// 		left: 26px;
// 		bottom: 0;
// 		width: 1px;
// 		height: 100%;
// 	}

// 	.slide--0 {
// 		.slide__scroll-line {
// 			background: #c0d7d8;
// 		}
// 	}

// 	.slide--1 {
// 		.slide__scroll-line {
// 			background: #d8c0c0;
// 		}
// 	}

// 	.slide--2 {
// 		.slide__scroll-line {
// 			background: #cdd5e0;
// 		}
// 	}

// 	.slide--3 {
// 		.slide__scroll-line {
// 			background: #f3d3b0;
// 		}
// 	}

// 	.slide--4 {
// 		.slide__scroll-line {
// 			background: #f8e9e6;
// 		}
// 	}

// 	.slide--5 {
// 		.slide__scroll-line {
// 			background: #d1e2ec;
// 		}
// 	}

// 	.slide--6 {
// 		.slide__scroll-line {
// 			background: #d7cec5;
// 		}
// 	}

// 	/*  ==========================================================================
//     Column Image
//     ========================================================================== */

// 	.col__image-wrap {
// 		position: absolute;
// 		left: 0;
// 		top: 50%;
// 		transform: translateY(-50%);
// 		width: 100%;
// 		height: 160vh;
// 	}

// 	.img {
// 		object-fit: cover;
// 		width: 100%;
// 		height: 100%;
// 	}

// 	/*  ==========================================================================
//     Footer
//     ========================================================================== */

// 	.footer {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		flex-direction: column;
// 		background: #cecece;
// 	}

// 	.footer__link {
// 		font-size: 5vw;
// 		color: ${dark};
// 		text-decoration: none;
// 		font-family: 'Cinzel', serif;
// 	}

// 	.footer__link-top {
// 		position: absolute;
// 		left: 50%;
// 		bottom: 100px;
// 		transform: translateX(-50%);
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		width: 100px;
// 		height: 100px;
// 		background: ${dark};
// 		font-size: 18px;
// 		color: white;
// 		text-decoration: none;
// 		font-family: 'Cinzel', serif;
// 	}

// 	.footer__link-top-line {
// 		position: absolute;
// 		top: -50px;
// 		left: 50%;
// 		width: 1px;
// 		height: 50px;
// 		background: ${dark};
// 	}

// 	.footer__copyright {
// 		position: absolute;
// 		left: 50%;
// 		bottom: 24px;
// 		transform: translateX(-50%);
// 	}
// `;
// const NiceOne = () => {
// 	React.useEffect(() => {
// 		const select = (e: string) => document?.querySelector(e);
// 		const selectAll = (e: string) => document?.querySelectorAll(e);
// 		const stage = select('.stage');
// 		const slides = selectAll('.slide');
// 		const links = selectAll('.slide__scroll-link');
// 		const titles = selectAll('.col__content-title');

// 		let slideID = 0;

// 		function initLinks() {
// 			// ScrollToPlugin links

// 			links.forEach((link, index, e) => {
// 				let linkST = link.querySelector('.slide__scroll-line');

// 				link.addEventListener('click', (e) => {
// 					e.preventDefault();
// 					gsap.to(window, {
// 						duration: 2,
// 						scrollTo: {
// 							y: '#slide-' + (index + 2),
// 						},
// 						ease: 'power2.inOut',
// 					});
// 					slideID++;
// 				});

// 				link.addEventListener('mouseover', (e) => {
// 					gsap.to(linkST, {
// 						y: 40,
// 						transformOrigin: 'bottom center',
// 						duration: 0.6,
// 						ease: 'power4',
// 					});
// 				});

// 				link.addEventListener('mouseout', (e) => {
// 					gsap.to(linkST, {
// 						y: 0,
// 						transformOrigin: 'bottom center',
// 						duration: 0.6,
// 						ease: 'power4',
// 					});
// 				});
// 			});

// 			// ScrollToPlugin link back to the top

// 			// Dummy slide links

// 			let slideLinks = selectAll('.slide-link');

// 			slideLinks.forEach((slideLink, index, e) => {
// 				let slideL = slideLink.querySelector('.slide-link__line');

// 				slideLink.addEventListener('mouseover', (e) => {
// 					gsap.to(slideL, {
// 						x: 20,
// 						scaleX: 0.3,
// 						transformOrigin: 'right center',
// 						duration: 0.8,
// 						ease: 'power4',
// 					});
// 				});
// 				slideLink.addEventListener('mouseout', (e) => {
// 					gsap.to(slideL, {
// 						x: 0,
// 						scaleX: 1,
// 						transformOrigin: 'right center',
// 						duration: 0.8,
// 						ease: 'power4',
// 					});
// 				});
// 			});
// 		}

// 		function initSlides() {
// 			// Animation of each slide scrolling into view

// 			slides.forEach((slide, i) => {
// 				let tl = gsap.timeline({
// 					scrollTrigger: {
// 						trigger: slide,
// 						start: '40% 50%', // position of trigger meets the scroller position
// 					},
// 				});

// 				tl.from(slide.querySelectorAll('.col__content-title'), {
// 					ease: 'power4',
// 					y: '+=5vh',
// 					duration: 2.5,
// 				})
// 					.from(
// 						slide.querySelectorAll('.line__inner'),
// 						{
// 							y: 200,
// 							duration: 2,
// 							ease: 'power4',
// 							stagger: 0.1,
// 						},
// 						0,
// 					)
// 					.from(
// 						slide.querySelectorAll('.col__content-txt'),
// 						{
// 							x: 100,
// 							y: 50,
// 							opacity: 0,
// 							duration: 2,
// 							ease: 'power4',
// 						},
// 						0.4,
// 					)
// 					.from(
// 						slide.querySelectorAll('.slide-link'),
// 						{
// 							x: -100,
// 							y: 100,
// 							opacity: 0,
// 							duration: 2,
// 							ease: 'power4',
// 						},
// 						0.3,
// 					)
// 					.from(
// 						slide.querySelectorAll('.slide__scroll-link'),
// 						{
// 							y: 200,
// 							duration: 3,
// 							ease: 'power4',
// 						},
// 						0.4,
// 					)
// 					.to(
// 						slide.querySelectorAll('.slide__scroll-line'),
// 						{
// 							scaleY: 0.6,
// 							transformOrigin: 'bottom left',
// 							duration: 2.5,
// 							ease: 'elastic(1,0.5)',
// 						},
// 						1.4,
// 					);
// 			});

// 			// External footer link scroll animation

// 			gsap.from('.footer__link', {
// 				scrollTrigger: {
// 					trigger: '.footer',
// 					scrub: 2,
// 					start: '50% 100%', // position of trigger meets the scroller position
// 					end: '0% 0%',
// 				},
// 				y: '20vh',
// 				ease: 'sine',
// 			});
// 		}

// 		function initParallax() {
// 			slides.forEach((slide, i) => {
// 				let imageWrappers = slide.querySelectorAll('.col__image-wrap');

// 				gsap.fromTo(
// 					imageWrappers,
// 					{
// 						y: '-30vh',
// 					},
// 					{
// 						y: '30vh',
// 						scrollTrigger: {
// 							trigger: slide,
// 							scrub: true,
// 							start: 'top bottom', // position of trigger meets the scroller position
// 							snap: {
// 								snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
// 								duration: 1,
// 								ease: 'power4.inOut',
// 							},
// 						},
// 						ease: 'none',
// 					},
// 				);
// 			});
// 		}

// 		function scrollTop() {
// 			gsap.to(window, {
// 				duration: 2,
// 				scrollTo: {
// 					y: '#slide-0',
// 				},
// 				ease: 'power2.inOut',
// 			});
// 			gsap.to('.footer__link-top-line', {
// 				scaleY: 1,
// 				transformOrigin: 'bottom center',
// 				duration: 0.6,
// 				ease: 'power4',
// 			});
// 		}

// 		function initKeys() {
// 			document.addEventListener('keydown', (e) => {
// 				e.preventDefault();
// 				if (e.key == 'ArrowDown') {
// 					//down arrow to next slide
// 					if (slideID <= slides.length) {
// 						slideID++;
// 						gsap.to(window, {
// 							duration: 2,
// 							scrollTo: {
// 								y: '#slide-' + slideID,
// 							},
// 							ease: 'power2.inOut',
// 						});
// 					}
// 				} else if (e.key == 'ArrowUp') {
// 					// up arrow to top
// 					slideID = 0;
// 					scrollTop();
// 				}
// 			});
// 		}

// 		const init = () => {
// 			gsap.set(stage, { autoAlpha: 1 });
// 			initLinks();
// 			initSlides();
// 			initParallax();
// 			initKeys();
// 		};
// 		// init();
// 	}, []);
// 	return (
// 		<Wrapper>
// 			<div className="stage">
// 				<Intro />

// 				<Section sectionNumber={1} />
// 				<Section sectionNumber={2} />

// 				{/* <section className="slide slide--2" id="slide-2">
// 					<div className="col col--1">
// 						<div className="col__content col__content--2">
// 							<h2 className="col__content-title">
// 								<span className="line__inner">Look</span>
// 								<br />
// 								<span className="line__inner">No. 2</span>
// 							</h2>
// 							<div className="col__content-wrap">
// 								<p className="col__content-txt">
// 									Praesent commodo cursus magna, vel scelerisque nisl
// 									consectetur et. Etiam porta sem malesuada magna mollis
// 									euismod.
// 								</p>
// 								<a href="#" className="slide-link">
// 									<div className="slide-link__circ"></div>
// 									<div className="slide-link__line"></div>
// 								</a>
// 							</div>
// 						</div>
// 						<a href="#slide-3" className="slide__scroll-link">
// 							<div className="slide__scroll-line"></div>
// 						</a>
// 					</div>
// 					<div className="col col--2">
// 						<div className="col__image-wrap">
// 							<img
// 								className="img img--1"
// 								src="https://assets.codepen.io/61488/duda-2.jpg"
// 							/>
// 						</div>
// 					</div>
// 				</section> */}

// 				{/* <footer className="footer" id="slide-7">
// 					<a
// 						className="footer__link"
// 						href="http://www.duda.ie/"
// 						target="_blank"
// 						rel="noreferrer">
// 						duda.ie
// 					</a>
// 					<a className="footer__link-top" href="#slide-0">
// 						Top<span className="footer__link-top-line"></span>
// 					</a>
// 					<p className="footer__copyright">All images © 2020 Dave Uda</p>
// 				</footer> */}
// 			</div>
// 		</Wrapper>
// 	);
// };
// export default NiceOne;
