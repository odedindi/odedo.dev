// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
// ================== styles ==================
import * as S from 'styles/pages/404';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from '../components/Layout';
import Button from 'components/Button';
// ============================================

const PortfolioPage: NextPage = () => {
	const { t } = useTranslation('fourZeroFour');
	const { push } = useRouter();
	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<div>
					<p>
						This page doesn’t exist. Try heading back home to start from the
						beginning.
					</p>
					<Button
						id="Return home"
						type="Main"
						onClick={() => push('/')}
						text={t('returnHome')}
					/>
				</div>
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'fourZeroFour',
			'footer',
		])),
	},
});

export default PortfolioPage;
