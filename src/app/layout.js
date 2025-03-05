"use client";
import { useEffect } from "react";
import "./globals.css";
import { Metadata } from "next";
import { Inter, Signika_Negative } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";

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
  // Adding the Tidio chat script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/kyt8gjstcbty5znemqs9jld0tsqxwtq7.js";
    script.async = true;
    script.onload = () => console.log("Tidio chat script loaded!");
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to ensure it's only added once when the component mounts

  return (
    <html lang="en">
      <body className={signika.className}>
        <AuthProvider>
          <ThemeProvider attribute="class">
            <Theme appearance="dark">{children}</Theme>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
