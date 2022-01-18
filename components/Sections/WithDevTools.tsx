import * as React from 'react';
import * as S from './style';

import { useTranslation } from 'next-i18next';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { DevTools } from 'components/DevTool';
import { Skew } from 'animations';
import myDevTools from 'utils/devToolsLogos';

const SectionWithDevTools = () => {
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
			scrollTrigger: { trigger: sectionRef.current },
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
			<S.AboutParagraph>
				<S.ContentColumn>
					<S.TextWrapper>
						<Skew>
							<S.P ref={addTextRef}>
								<S.TitleBlock ref={titleBlockRef}>
									{t('about.devTools.title')}:
								</S.TitleBlock>
							</S.P>
							<S.DevToolsContainer>
								{myDevTools.titlesAndIcons.map((tool) => (
									<DevTools
										key={tool.title}
										title={t(`about.devTools.${tool.title}`)}
										devTools={tool.devTools}
									/>
								))}
							</S.DevToolsContainer>
						</Skew>
					</S.TextWrapper>
				</S.ContentColumn>
			</S.AboutParagraph>
		</S.Section>
	);
};

export default SectionWithDevTools;
