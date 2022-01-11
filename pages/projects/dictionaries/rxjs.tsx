// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
// ============================================
import RxJSDictionary from 'Projects/RxJS-Dictionary';
// ============================================

const Tests: NextPage = () => {
	const { t } = useTranslation('common');

	return (
		<PageLayout title={t('title')}>
			<div className="RxJS">
				<RxJSDictionary />
			</div>

			{null ? null : null}
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

export default Tests;
