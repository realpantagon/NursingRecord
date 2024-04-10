import "@/styles/globals.css";
import "../styles/index.module.css";
import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toastRef } from "@/component/toast/toast";
import { Toast } from "primereact/toast";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    queryCache: new QueryCache(),
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Toast ref={toastRef} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
