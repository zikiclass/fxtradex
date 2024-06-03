import "./globals.css";
import { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

// Assign the font loaders to consts with specified subsets
const inter = Inter({ subsets: ["latin"] });
const signika = Signika_Negative({ subsets: ["latin"] });

const metadata = {
  title:
    process.env.PROJECT_NAME +
    ": The Online Trading and Mining Platform - " +
    process.env.PROJECT_NAME,
  description: process.env.PROJECT_DESCRIPTION,
};

export default function RootLayout({ children }) {
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
