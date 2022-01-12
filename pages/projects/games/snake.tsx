// =============== React & Next ===============
import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
// ================== styles ==================
import * as S from 'styles/pages/projects';
import styled from 'styled-components';
// =============== translation ================
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// ================ components ================
import PageLayout from 'components/Layout';
import Snake from 'Projects/Games/Snake';
// ============================================

const Projects: NextPage = () => {
	const { t } = useTranslation('projects');

	return (
		<PageLayout title={'title'}>
			<S.PageWrapper>
				<h2>Snake</h2>
				<Snake />
			</S.PageWrapper>
		</PageLayout>
	);
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale as string, [
			'navigation',
			'footer',
		])),
	},
});

export default Projects;
