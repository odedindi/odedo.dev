import * as React from 'react';
import * as S from './style';

import { useTranslation } from 'next-i18next';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { DevToolLink, DevTools } from 'components/DevTool';
import { Skew } from 'animations';
import myDevTools from 'utils/devToolsLogos';
import { GetStaticProps } from 'next';

type SectionProps = {
	title?: string;
	texts: string[];
};

const SectionWithDevTools: React.FC<SectionProps> = ({ texts, title }) => {
	const { t } = useTranslation('common');

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
						<Skew>
							{/* <S.Title ref={titleRef}>
									<S.TitleBlock ref={titleBlockRef}>
										{t('like to use')}:
									</S.TitleBlock>
								</S.Title> */}
							<section className="title">
								<h3>{t('like to use')}:</h3>
							</section>
							<S.DevToolsContainer>
								{myDevTools.titlesAndIcons.map((tool) => (
									<DevTools
										key={tool.title}
										title={t(tool.title)}
										devTools={tool.devTools}
									/>
								))}
							</S.DevToolsContainer>
						</Skew>
					</S.TextWrapper>
				</S.ContentColumn>
			</S.ContentContainer>
			<S.ContentContainer>
				<S.ContentColumn>
					{title && (
						<S.Title ref={titleRef}>
							<S.TitleBlock ref={titleBlockRef}>{title}</S.TitleBlock>
						</S.Title>
					)}
					<S.TextWrapper>
						{texts.map((t, i) => (
							<S.P key={i} ref={addTextRef}>
								{t}
							</S.P>
						))}
					</S.TextWrapper>
				</S.ContentColumn>
			</S.ContentContainer>
		</S.Section>
	);
};

export default SectionWithDevTools;
