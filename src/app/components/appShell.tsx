"use client";
import { AppShell } from "@mantine/core";
import { FC, PropsWithChildren } from "react";
import LanguagePicker from "./langaugePicker";
import classes from "./appShell.module.css";
import ContactMe from "./contactMe";

const Main: FC<PropsWithChildren> = ({ children }) => (
	<AppShell header={{ height: 60 }} footer={{ height: 100 }}>
		<AppShell.Header className={classes.header}>
			<LanguagePicker />
		</AppShell.Header>
		<AppShell.Main className={classes.main}>{children}</AppShell.Main>
		<AppShell.Footer className={classes.footer}>
			<ContactMe />
		</AppShell.Footer>
	</AppShell>
);

export default Main;
