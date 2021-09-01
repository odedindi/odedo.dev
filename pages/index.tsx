// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/home';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import CreateAnimation from 'components/CreateAnimation';

// ============================================
const Home: NextPage = () => {
	const { t } = useTranslation('common');

	const [animatecContent] = React.useState(() => 'Software & web');

	return (
		<PageLayout title={t('title')}>
			<S.PageWrapper>
				<S.SlogenWrapper>
					<CreateAnimation type="RollTwice">
						<S.Slogen>Software & web</S.Slogen>
					</CreateAnimation>
				</S.SlogenWrapper>
				<S.MyName>Oded Winberger</S.MyName>
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
