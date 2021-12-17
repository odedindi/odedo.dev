// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// =================== hooks ==================
import { useDevToolsLogos } from 'hooks';
// ================== styles ==================
import * as S from 'styles/pages/about';
import styled from 'styled-components';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import CreateAnimation from 'components/CreateAnimation';
import { device } from 'utils/mediaQueries';
// import CreateAnimation from 'components/CreateAnimation';
// ============================================

type DevToolsProps = {
	devTools: DevTool[];
	title: string;
};
const AboutPage: NextPage = () => {
	const {
		logosToBeUsedAsImageSource,
		langLogos,
		frontLogos,
		backLogos,
		databaseLogos,
		designLogos,
		versionControlLogos,
		ideLogos,
		packagesManagerLogos,
	} = useDevToolsLogos();
	const { t } = useTranslation('about');

	const links = {
		hacktheclimate: {
			ourTeam: 'https://climatehackathon.github.io/about/',
			website: 'https://hacktheclimate.devpost.com/',
		},
		sentinelII:
			'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-2',
		landPro: 'https://landpro.ch',
	};

	type DevToolLinkType = {
		content: JSX.Element | any | string;
		href: string;
		noStyle?: boolean;
		title?: string;
	};

	const DevToolLink = ({ content, href, noStyle, title }: DevToolLinkType) => (
		<Link href={href} passHref>
			<a
				target="_blank"
				rel="noopener noreferrer"
				title={title}
				style={(noStyle as boolean) ? {} : { borderBottom: 'none' }}>
				{content}
			</a>
		</Link>
	);

	const DevTools = ({ devTools, title }: DevToolsProps) => (
		<S.AboutParagraph>
			<section className="title">
				<h5>{title}:</h5>
			</section>

			<S.DevToolsIconsWrapper>
				<S.DevToolsIconWrapper>
					{devTools.map((devTool) => (
						<CreateAnimation type="Hover" key={devTool.id}>
							{logosToBeUsedAsImageSource.includes(devTool.id) ? (
								<DevToolLink
									href={devTool.link}
									content={
										<Image
											src={devTool.logo}
											alt={`${devTool.id} logo`}
											width="60px"
											height="90px"
											layout={'fixed'}
										/>
									}
								/>
							) : (
								<DevToolLink
									key={devTool.id}
									href={devTool.link}
									content={devTool.logo}
								/>
							)}
						</CreateAnimation>
					))}
				</S.DevToolsIconWrapper>
			</S.DevToolsIconsWrapper>
		</S.AboutParagraph>
	);

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<S.AboutParagraph>
					<section className="title">
						<h3>{t('hi')}</h3>
					</section>
					<p>{t('storyStart')}</p>
					<p>
						{t('storyCurrent.intro')}
						<DevToolLink
							content={t('storyCurrent.people')}
							href={links.hacktheclimate.ourTeam}
							title="The Team"
						/>
						{t('storyCurrent.using')}
						<DevToolLink
							content={t('storyCurrent.satellite')}
							href={links.sentinelII}
							title="Sentinel-2"
						/>
						{t('storyCurrent.for')}
						<DevToolLink
							content={t('storyCurrent.landpro')}
							href={links.landPro}
							title="LandPro.ch"
						/>
						.
					</p>
					<p>{t('aboutMe.first')}</p>
					<p>{t('aboutMe.second')}</p>
					<p>{t('aboutMe.third')}</p>
				</S.AboutParagraph>

				<S.AboutParagraph>
					<section className="title">
						<h3>{t('like to use')}:</h3>
					</section>
					<DevTools title={t('languages')} devTools={langLogos} />
					<DevTools title={t('frontend')} devTools={frontLogos} />
					<DevTools title={t('backend')} devTools={backLogos} />
					<DevTools title={t('databases')} devTools={databaseLogos} />
					<DevTools title={t('design')} devTools={designLogos} />
					<DevTools
						title={t('versionControl')}
						devTools={versionControlLogos}
					/>
					<DevTools title={t('ides')} devTools={ideLogos} />
					<DevTools
						title={t('packageManagers')}
						devTools={packagesManagerLogos}
					/>
				</S.AboutParagraph>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'about',
			'footer',
		])),
	},
});

export default AboutPage;

type AnimatedCardProps = {
	imgSrc?: string;
	title?: string;
	text?: string;
};

const FlipOverCard = ({ imgSrc, text, title }: AnimatedCardProps) => {
	return (
		<Card>
			<CardContainer>
				<div
					className="front"
					style={{
						backgroundImage: `url(${imgSrc})`,
					}}>
					<ContentWrapper>
						<Title>{title}</Title>
					</ContentWrapper>
				</div>
				<div className="back">
					<ContentWrapper>
						<p>{text}</p>
					</ContentWrapper>
				</div>
			</CardContainer>
		</Card>
	);
};

export const Card = styled.div`
	width: calc(30% - 2rem);
	cursor: pointer;

	${device.desktop} {
		width: calc(33.333333% - 2rem);
	}
	${device.tablet} {
		width: calc(50% - 2rem);
	}
	${device.phone} {
		width: 100%;
		margin: 0 0 2rem 0;
	}
`;

export const CardContainer = styled.div`
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-perspective: 1000px;
	perspective: 1000px;

	.front,
	.back {
		background-size: cover;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 0.5rem;
		background-position: center;
		-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		text-align: center;
		min-height: 280px;
		height: auto;
		color: #fff;
		font-size: 1.5rem;
	}

	.back {
		background: #cedce7;
		background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		-webkit-transform: rotateY(180deg);
		transform: rotateY(180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.6;
		background-color: #000;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		border-radius: 10px;
	}
	:hover .front,
	:hover .back {
		-webkit-transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: -webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		-o-transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1),
			-webkit-transform 1.5s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.front {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	:hover .back {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	:hover .front {
		-webkit-transform: rotateY(-180deg);
		transform: rotateY(-180deg);
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}
`;

export const ContentWrapper = styled.div`
	-webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
	transform: translateY(-50%) translateZ(60px) scale(0.94);
	top: 50%;
	position: absolute;
	left: 0;
	width: 100%;
	padding: 2rem;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	outline: 1px solid transparent;
	-webkit-perspective: inherit;
	perspective: inherit;
	z-index: 2;
`;
export const Title = styled.span`
	color: rgba(255, 255, 255);
	text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.3);
	font-weight: 300;
`;
