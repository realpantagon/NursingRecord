import React from "react";
import "@/styles/globals.css";
import { TanstackProvider } from "@/providers/TanstackProvider";
import { ToastProvider } from "@/providers/Providers";

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
            <div>{children}</div>
          </ToastProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
