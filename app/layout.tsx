import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ThemeContextProvider from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanveer | Personal Portfolio",
  description: "Created by Tanveer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} h-[100%] bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-white`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-1/4 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.rem]
        dark:bg-sky-700 dark:blur-[15rem] dark:bg-opacity-100 dark:bg-backdrop-blur-[5rem] dark:-z-10  
        "
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[35rem] h-1/4 w-[50.25] rounded-full blur-[10rem] 
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
         dark:bg-slate-800 dark:blur-[5rem] dark:bg-opacity-80 dark:bg-backdrop-blur-[3rem]
         "
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <Header /> */}
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitcher />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
