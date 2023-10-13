import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/theme-provider";
import { switchThemeDuration } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

// import { ThemeProvider } from "./theme-prodiver";
// import { ThemeSwitcher } from "./components/theme-switcher";
// import { switchThemeDuration } from "./constants";

export const metadata: Metadata = {
  title: "Next.js + TypeScript Starter",
  description: "A starter template for Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-zinc-900 ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <ThemeSwitcher /> */}
          <NavBar />

          <main className="container mx-auto px-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
