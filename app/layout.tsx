import React from "react";
import "@/styles/globals.css";
import { TanstackProvider } from "@/providers/TanstackProvider";
import { ToastProvider } from "@/providers/Providers";
import { ContextProvider } from "@/providers/ContextProvider";

export const metadata = {
  title: "Nursing Record",
  description: "Optimize Nursing Workflow for Seamless Patient Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          <ToastProvider>
            <ContextProvider>
              <div>{children}</div>
            </ContextProvider>
          </ToastProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
