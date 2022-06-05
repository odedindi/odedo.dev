// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/about';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import { Image, Text, Title } from '@mantine/core';

// ============================================

const AboutPage: NextPage = () => {
	const { t } = useTranslation('about');

	return (
		<PageLayout title={t('title')}>
			<Title pb={25}>{t('hi')}</Title>
			{Object.values(t('aboutMe', { returnObjects: true })).map(
				(aboutMe, i) => (
					<Text key={i} px={25} pb={!i ? 15 : 25}>
						{aboutMe as unknown as string}
					</Text>
				),
			)}
			<Image alt="underAtree" src="/images/underAtree.jpg" pb={25} />
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'common',
			'about',
			'footer',
		])),
	},
});

export default AboutPage;
