// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/portfolio';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from '../components/Layout';
// ============================================

const PortfolioPage: NextPage = () => {
	const { t } = useTranslation('portfolio');

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<div>
					<h2>portfolioing vietnam</h2>
				</div>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'portfolio',
			'footer',
		])),
	},
});

export default PortfolioPage;
