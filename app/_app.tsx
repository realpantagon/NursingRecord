import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { toastRef } from "./components/toast/Toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Toast ref={toastRef} />
      <Component {...pageProps} />
    </div>
  );
}
