// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
// ================== styles ==================
import * as S from 'styles/pages/home';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';

const Logo = dynamic(() => import('components/Logo'));
// ============================================
const Home: NextPage = () => {
	const { t } = useTranslation('common');

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<Logo />
			</S.PageWrapper>
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

export default Home;
