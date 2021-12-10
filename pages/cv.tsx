// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
// ================== styles ==================
import * as S from 'styles/pages/cv';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
// ============================================

import styled, { css } from 'styled-components';
import { device } from 'utils/mediaQueries';

const CV: NextPage = () => {
	const { t } = useTranslation('cv');

	return (
		<PageLayout title={t('title')}>
			<PageContainerWrapper>
				<PageContainer>
					<About about={data.about} />
					<Projects projects={data.projects} />
					<Experience experience={data.experience} />
					<Skills skills={data.skills} />
				</PageContainer>
			</PageContainerWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'cv',
			'footer',
		])),
	},
});

export default CV;
const data = {
	about:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.',
	projects: [
		{
			name: 'Devfolio',
			description:
				'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS',
			link: 'https://github.com/RyanFitzgerald/devfolio',
		},
		{
			name: 'ChromeExtensionKit',
			description:
				'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
			link: 'https://chromeextensionkit.com/?ref=devfolio',
		},
		{
			name: 'Another Cool Project',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
			link: 'https://github.com/RyanFitzgerald/devfolio',
		},
	],
	experience: [
		{
			name: 'Acme Corp',
			description: 'Full-Stack Developer, February 2020 - Present',
			link: 'https://github.com/RyanFitzgerald/devfolio',
		},
		{
			name: 'Globex Corp',
			description: 'Full-Stack Developer, December 2017 - February 2020',
			link: 'https://github.com/RyanFitzgerald/devfolio',
		},
		{
			name: 'Hooli',
			description: 'Full-Stack Developer, May 2015 - December 2017',
			link: 'https://github.com/RyanFitzgerald/devfolio',
		},
	],
	skills: [
		{
			name: 'Languages & Frameworks',
			description:
				'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
		},
		{
			name: 'Databases',
			description: 'MongoDB, PostreSQL, MySQL',
		},
		{
			name: 'Other',
			description:
				'Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum',
		},
	],
};

const PageContainerWrapper = styled.div`
	position: relative;
`;
const PageContainer = styled.div`
	padding: 2rem;
	position: relative;
	max-width: 1280px;
	${device.phone} {
		padding: 6rem;
	}
`;

const Container = styled.div`
	display: block;
	padding: 2rem;

	${device.tablet} {
		display: flex;
	}
`;
const TitleWrapper = styled.div`
	padding-bottom: 1.5rem;
	${device.desktop} {
		width: 100%;
		padding: 0rem;
	}
`;
const Title = styled.h2`
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 300;
	letter-spacing: 0.1em;

	.text {
		font-size: 0.875rem;
		line-height: 1.25rem;

		color: rgba(75, 85, 99, 1);
		line-height: 1.5;
		text-transform: uppercase;
	}
`;
const Content = styled.div`
	flex: none;
	font-size: 1.125rem;
	line-height: 1.75rem;
	color: rgba(75, 85, 99, 1);
	font-weight: 300;
	${device.tablet} {
		flex: 1 1 20%;
		padding-left: 1rem;
		background: red;
		width: 75vw;
	}
`;
const Section: React.FC<{ title: string }> = ({ title, children }) => (
	<Container>
		<TitleWrapper>
			<Title>{title}</Title>
		</TitleWrapper>
		<Content>{children}</Content>
	</Container>
);

const About = ({ about }: { about: string }) => (
	<Section title="About Me">
		<div style={{ marginBottom: '1.25rem' }}>
			<p>{about}</p>
		</div>
	</Section>
);

const ItemName = styled.h3<{ link: boolean }>`
	font-weight: 600;
	color: rgba(17, 24, 39, 1);
	padding-bottom: 0.25rem;
	${({ link }) =>
		link
			? css`
					:hover {
						text-decoration: underline;
						color: black;
					}
			  `
			: null}
`;
const Description = styled.p`
	font-weight: 300;
	color: rgba(75, 85, 99, 1);
`;

type ItemType = {
	name: string;
	description: string;
	link?: string;
	internal?: boolean;
};
const Item = ({ name, description, link, internal = false }: ItemType) => {
	const linkContent = internal ? (
		<Link href={link as string}>
			<a>{name}</a>
		</Link>
	) : (
		<a href={link}>{name}</a>
	);

	return (
		<div style={{ marginBottom: '1.5rem' }}>
			<ItemName link={link ? true : false}>
				{link ? linkContent : name}
			</ItemName>
			<Description>{description}</Description>
		</div>
	);
};

const Projects = ({ projects }: { projects: ItemType[] }) => (
	<Section title="Projects">
		{projects.map((project) => (
			<Item
				key={project.name}
				name={project.name}
				description={project.description}
				link={project.link}
			/>
		))}
	</Section>
);

const Experience = ({ experience }: { experience: ItemType[] }) => (
	<Section title="Experience">
		{experience.map((exp) => (
			<Item
				key={exp.name}
				name={exp.name}
				description={exp.description}
				link={exp.link}
			/>
		))}
	</Section>
);

const Skills = ({ skills }: { skills: ItemType[] }) => (
	<Section title="Skills">
		{skills.map((skill) => (
			<Item
				key={skill.name}
				name={skill.name}
				description={skill.description}
			/>
		))}
	</Section>
);
