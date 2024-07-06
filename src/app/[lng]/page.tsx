import type { NextPage } from "next";
import { useTranslation } from "@/app/i18n";
import type { Language } from "next/router";
import { Text, Title } from "@mantine/core";
import MyImage from "@/app/components/myImage";
import Project from "@/app/components/Project";
import projects from "./projects.json";
import ContactMeForm from "@/app/components/contact/contactMeForm";
import classes from "./page.module.css";

const Page: NextPage<{ params: { lng: Language } }> = async ({
	params: { lng },
}) => {
	const { t } = await useTranslation(lng);

	return (
		<>
			<MyImage />
			<Title>{t("title")} 👋</Title>
			<Text>{t("preface")}</Text>
			{projects.map((p, i) => (
				<Project
					key={i}
					className={classes.project}
					title={t(`projects.${p.title}`)}
					description={t(`projects.${p.description}`)}
					imageSrc={p.imageSrc}
					link={p.link}
					tecStack={t(`projects.${p.tecStack}`)}
					repo={p.repo}
				/>
			))}
			<ContactMeForm />
		</>
	);
};

export default Page;
