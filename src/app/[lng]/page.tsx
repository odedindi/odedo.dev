import type { NextPage } from "next";
import { Fragment } from "react";
import { useTranslation } from "../i18n";
import type { Language } from "next/router";
import { Space, Text, Title } from "@mantine/core";
import MyImage from "../components/myImage";
import Project from "../components/Project";
import projects from "./projects.json";

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
			{projects.map((p, i) => (
				<Fragment key={i}>
					<Space h="xl" />
					<Project
						title={t(`projects.${p.title}`)}
						description={t(`projects.${p.description}`)}
						imageSrc={p.imageSrc}
						link={p.link}
						tecStack={t(`projects.${p.tecStack}`)}
						repo={p.repo}
					/>
				</Fragment>
			))}
		</>
	);
};

export default Page;
