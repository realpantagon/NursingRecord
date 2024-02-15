import "@/styles/globals.css";
import "../styles/index.module.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { toastRef } from "@/component/toast/toast";
import { Toast } from "primereact/toast";

         

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Toast ref={toastRef} />
				<Component {...pageProps} />
		</QueryClientProvider>
	);
}
