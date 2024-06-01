import "./globals.css";
import type { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const signika = Signika_Negative({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    process.env.PROJECT_NAME +
    ": The Online Trading and Mining Platform - " +
    process.env.PROJECT_NAME,
  description: process.env.PROJECT_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <ThemeProvider attribute="class">
          <Theme appearance="dark">{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
