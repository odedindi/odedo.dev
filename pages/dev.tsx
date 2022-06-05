// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';

import { Accordion, Group, Avatar, Text, Title } from '@mantine/core';

import * as S from '@fortawesome/free-solid-svg-icons';
import { DevTool } from 'components/DevTool';
import myDevTools from 'utils/devToolsLogos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// ============================================

const DevToolsPage: NextPage = () => {
	const { t } = useTranslation('common');

	return (
		<PageLayout title={t('about.devTools.title')}>
			<Title sx={() => ({ textTransform: 'uppercase' })}>
				{t('about.devTools.title')}
			</Title>

			<Accordion
				initialItem={-1}
				iconPosition="right"
				transitionDuration={1000}>
				{myDevTools.titlesAndIcons.map(({ icon, title, devTools }) => (
					<Accordion.Item
						key={title}
						label={
							<Group noWrap>
								<FontAwesomeIcon
									icon={S[icon as keyof typeof S] as S.IconDefinition}
									size={'lg'}
									radius="xl"
								/>
								<Text>{t(`about.devTools.${title}`)}</Text>
							</Group>
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
