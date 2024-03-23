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
				tecStack={t("projects.landpro.tecStack")}
				repo="https://github.com/odedindi/landpro_landing"
			/>
			<Space h="xl" />
			<Project
				title={t("projects.geoChat.title")}
				description={t("projects.geoChat.description")}
				imageSrc="https://geo-chat-omega.vercel.app/assets/beacon.png"
				link="https://geo-chat-omega.vercel.app/home"
				tecStack={t("projects.geoChat.tecStack")}
				repo="https://github.com/odedindi/GeoChat"
			/>
			<Space h="xl" />
			<Project
				title={t("projects.solr.title")}
				description={t("projects.solr.description")}
				imageSrc="https://solr.vercel.app/icons/apple-touch-icon.png"
				link="https://solr.vercel.app/"
				tecStack={t("projects.solr.tecStack")}
				repo="https://github.com/odedindi/solr"
			/>
			<Space h="xl" />
			<Project
				title={t("projects.dialektli.title")}
				description={t("projects.dialektli.description")}
				imageSrc="https://www.dialektli.ch/assets/dialektli_logo.svg"
				link="https://www.dialektli.ch/"
				tecStack={t("projects.dialektli.tecStack")}
				repo="https://github.com/urbanswisstionary/dialektli/"
			/>
		</>
	);
};

export default Page;
