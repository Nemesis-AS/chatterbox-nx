import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Reddit Clone",
  description: "A reddit clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-brand antialiased min-h-screen flex flex-col`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
