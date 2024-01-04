import "@/styles/globals.css";
import "../styles/index.module.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-teal/theme.css";
import "primeicons/primeicons.css";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider>
				<Notifications />
				<Component {...pageProps} />
			</MantineProvider>
		</QueryClientProvider>
	);
}
