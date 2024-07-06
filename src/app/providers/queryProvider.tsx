"use client";

import type { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const QueryProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools />
	</QueryClientProvider>
);

export default QueryProvider;
