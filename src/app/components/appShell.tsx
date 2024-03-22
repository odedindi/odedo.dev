"use client";
import { AppShell } from "@mantine/core";
import type { Language } from "next/router";
import { FC, PropsWithChildren } from "react";
import LanguagePicker from "./langaugePicker";
import classes from "./appShell.module.css";

const Main: FC<PropsWithChildren> = ({ children }) => (
	<AppShell header={{ height: 60 }}>
		<AppShell.Header className={classes.header}>
			<LanguagePicker />
		</AppShell.Header>
		<AppShell.Main className={classes.main}>{children}</AppShell.Main>
	</AppShell>
);

export default Main;
