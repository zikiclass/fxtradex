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
  useEffect(() => {
    const smartsuppScript = document.createElement("script");
    smartsuppScript.type = "text/javascript";
    smartsuppScript.innerHTML = `
      var _smartsupp = _smartsupp || {};
      _smartsupp.key = '27946429bd10e3c3605575a3e91fdf4618a2bf83';
      window.smartsupp||(function(d) {
        var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
        s=d.getElementsByTagName('script')[0];c=d.createElement('script');
        c.type='text/javascript';c.charset='utf-8';c.async=true;
        c.src='https://www.smartsuppchat.com/loader.js?';
        s.parentNode.insertBefore(c,s);
      })(document);
    `;
    document.body.appendChild(smartsuppScript);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(smartsuppScript);
    };
  }, []);

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
