import { NextPage } from "next";
import { useTranslation } from "../i18n";
import { Language } from "next/router";
import { Space, Text, Title, Group } from "@mantine/core";
import MyImage from "../components/myImage";
import ProjectCard from "../components/projectCard";
import { NavigationProgress } from "@mantine/nprogress";
import ContactMe from "../components/contactMe";

const Page: NextPage<{ params: { lng: Language } }> = async ({
	params: { lng },
}) => {
	const { t } = await useTranslation(lng);

	return (
		<>
			<NavigationProgress />

			<MyImage />
			<Space h="xl" />
			<Title>{t("title")}</Title>
			<Space h="xl" />
			{(t("preface", { returnObjects: true }) as string[]).map((p, i) => (
				<Text key={i} size="xl">
					{p}
				</Text>
			))}
			<Space h="xl" />

			<Text size="xl">{t("examples.landpro")}</Text>
			<Space h="xl" />
			<Text size="xl">{t("examples.solr")}</Text>
			<Space h="xl" />
			<Group justify="apart" style={{ gap: "24px" }}>
				<ProjectCard
					title={t("projectCards.landpro.title")}
					// description={t('projectCards.landpro.description')}
					image={{
						src: "https://land-pro.vercel.app/favicon.png",
						alt: "landpro logo",
					}}
					linkProps={{ href: "https://land-pro.vercel.app/" }}
				/>
				<ProjectCard
					title={t("projectCards.solr.title")}
					// description={t('projectCards.solr.description')}
					image={{
						src: "https://solr.vercel.app/icons/apple-touch-icon.png",
						alt: "solr logo",
					}}
					linkProps={{ href: "https://solr.vercel.app/" }}
				/>
			</Group>
			<Space h="xl" />
			<ContactMe />
		</>
	);
};

export default Page;
