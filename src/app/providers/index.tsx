import type { FC, PropsWithChildren } from "react";
import type { Language } from "next/router";
import I18nProvider from "./i18nProvider";
import { MantineProvider } from "@mantine/core";
import QueryProvider from "./queryProvider";

const Providers: FC<PropsWithChildren<{ lng: Language }>> = ({
	children,
	lng,
}) => (
	<QueryProvider>
		<MantineProvider defaultColorScheme="dark">
			<I18nProvider lng={lng}>{children}</I18nProvider>
		</MantineProvider>
	</QueryProvider>
);

export default Providers;
