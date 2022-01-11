// =============== React & Next ===============
import * as React from 'react';
import ReactDOM from 'react-dom';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import ThreeDic from '../../../Projects/Three-Dictionary';

const ThreeDictionary: NextPage = () => {
	const { t } = useTranslation('common');

	return (
		<PageLayout title={t('title')}>
			<ThreeDic />
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

export default ThreeDictionary;
