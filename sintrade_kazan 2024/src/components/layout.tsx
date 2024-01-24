import "../app/globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NavBar } from "./landing_navbar";
import { Footer } from "@/src/components/landing_footer";
import React from "react";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Синтрейд-Казань",
  description: "Решения в области химии — от лабораторных до промышленных",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
