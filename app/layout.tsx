import { Providers } from "@/providers/Providers";
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
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
