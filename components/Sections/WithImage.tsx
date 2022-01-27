import * as React from 'react';
import * as S from './style';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import ParallaxAnimation from 'components/ParallaxAnimation';

type SectionProps = {
	sectionIntro?: string;
	title?: string;
	texts: string[];
	lottieAnimation?: Object;
};

const SectionWithImage: React.FC<SectionProps> = ({
	lottieAnimation,
	texts,
	title,
	sectionIntro,
}) => {
	const sectionRef = React.useRef<HTMLElement>(undefined!);
	const titleRef = React.useRef<HTMLHeadingElement>(undefined!);
	const titleBlockRef = React.useRef<HTMLSpanElement>(undefined!);
	const textsRefs = React.useRef<HTMLParagraphElement[]>([]);
	const addTextRef = (el: HTMLParagraphElement) => {
		if (!textsRefs.current.includes(el)) textsRefs.current.push(el);
	};
	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef.current,
			},
		});
		const sectionAnimation = timeline
			.from(titleRef.current, {
				ease: 'power4',
				y: '+=5vh',
				duration: 2.5,
			})
			.from(
				titleBlockRef.current,
				{
					y: 200,
					duration: 2,
					ease: 'power4',
					stagger: 0.1,
				},
				0,
			)
			.from(
				textsRefs.current,
				{
					x: 100,
					y: 50,
					opacity: 0,
					duration: 2,
					ease: 'power4',
				},
				0.4,
			);

		return () => {
			sectionAnimation.kill();
		};
	}, []);

	return (
		<S.Section ref={sectionRef}>
			<S.ContentContainer>
				<S.ContentColumn>
					<S.TextWrapper>
						{sectionIntro && <S.P ref={addTextRef}>{sectionIntro}</S.P>}
					</S.TextWrapper>
					{title && (
						<S.Title ref={titleRef}>
							<S.TitleBlock ref={titleBlockRef}>{title}</S.TitleBlock>
						</S.Title>
					)}
					{/* <S.TextWrapper>
						{texts.map((t, i) => (
							<S.P key={i} ref={addTextRef}>
								{t}
							</S.P>
						))}
					</S.TextWrapper> */}
				</S.ContentColumn>
			</S.ContentContainer>
			<S.ImageContainer>
				{lottieAnimation && (
					<ParallaxAnimation
						lottieAnimation={lottieAnimation}
						animationTrigger={sectionRef.current}
					/>
				)}
			</S.ImageContainer>
		</S.Section>
	);
};

export default SectionWithImage;
