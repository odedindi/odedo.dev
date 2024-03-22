import { NextPage } from "next";
import { useTranslation } from "../i18n";
import { Language } from "next/router";
import { Space, Text, Title } from "@mantine/core";
import MyImage from "../components/myImage";
import Project from "../components/Project";

const Page: NextPage<{ params: { lng: Language } }> = async ({
	params: { lng },
}) => {
	const { t } = await useTranslation(lng);

	return (
		<>
			<MyImage />
			<Space h="xl" />
			<Title>{t("title")} 👋</Title>
			<Space h="xl" />
			<Text>{t("preface")}</Text>
			<Space h="xl" />
			<Project
				title={t("projects.landpro.title")}
				description={t("projects.landpro.description")}
				imageSrc="https://land-pro.vercel.app/favicon.png"
				link="https://land-pro.vercel.app/"
			/>
			<Space h="xl" />
			<Project
				title={t("projects.solr.title")}
				description={t("projects.solr.description")}
				imageSrc="https://solr.vercel.app/icons/apple-touch-icon.png"
				link="https://solr.vercel.app/"
			/>
		</>
	);
};

export default Page;
