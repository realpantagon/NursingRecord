import { TanstackProvider } from "@/providers/TanstackProvider";
import React from "react";
import "@/styles/globals.css";

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
          <div>{children}</div>
        </TanstackProvider>
      </body>
    </html>
  );
}
