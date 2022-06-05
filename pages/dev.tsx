// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';

import { Accordion, Group, Avatar, Text, Title } from '@mantine/core';
import * as I from '@modulz/radix-icons';
import * as S from '@fortawesome/free-solid-svg-icons';
import { DevTool } from 'components/DevTool';
import myDevTools from 'utils/devToolsLogos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
// ============================================

type AccordionLabelProps = {
	label: string;
	Icon: S.IconDefinition;
	// description: string;
};

const AccordionLabel: React.FC<AccordionLabelProps> = ({
	label,
	Icon,
	// description,
}) => (
	<Group noWrap>
		<FontAwesomeIcon icon={Icon} size={'lg'} radius="xl" />
		{/* <Avatar src={image} radius="xl" size="lg" /> */}
		<div>
			<Text>{label}</Text>
			{/* <Text size="sm" color="dimmed" weight={400}>
				{description}
			</Text> */}
		</div>
	</Group>
);

const devToolsList = [
	{
		icon: S.faCode,
		label: 'languages',
	},
	{
		icon: S.faDesktop,
		label: 'frontend',
	},
	{
		icon: S.faServer,
		label: 'backend',
	},
	{
		icon: S.faDatabase,
		label: 'databases',
	},
	{
		icon: S.faDrawPolygon,
		label: 'design',
	},
	{
		icon: S.faCodeBranch,
		label: 'versionControl',
	},
	{
		icon: S.faWindowRestore,
		label: 'ides',
	},
	{
		icon: S.faClipboardList,
		label: 'packageManagers',
	},
];

const DevToolsPage: NextPage = () => {
	const { t } = useTranslation('common');
	const devTools = myDevTools.titlesAndIcons.map((tool, i) => ({
		...tool,
		icon: devToolsList[i].icon,
	}));
	// const devTools = devToolsList.map(({ icon, label }) => (
	// 	<AccordionLabel
	// 		key={label}
	// 		label={t(`about.devTools.${label}`)}
	// 		// Icon={icon}
	// 	>
	// 		{label}
	// 	</AccordionLabel>
	// ));

	return (
		<PageLayout title={t('about.devTools.title')}>
			<Title sx={() => ({ textTransform: 'uppercase' })}>
				{t('about.devTools.title')}
			</Title>

			<Accordion
				initialItem={-1}
				iconPosition="right"
				transitionDuration={1000}>
				{devTools.map(({ icon, title, devTools }) => (
					<Accordion.Item
						key={title}
						label={
							<AccordionLabel label={t(`about.devTools.${title}`)} Icon={icon}>
								{title}
							</AccordionLabel>
						}>
						<DevTool devTools={devTools} />
					</Accordion.Item>
				))}
			</Accordion>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'common',
			'footer',
		])),
	},
});

export default DevToolsPage;
