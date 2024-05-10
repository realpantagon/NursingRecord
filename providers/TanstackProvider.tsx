"use client";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
export const TanstackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
