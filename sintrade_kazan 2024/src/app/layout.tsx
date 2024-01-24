"use client"
import "./globals.scss";
import { Footer } from "@/src/components/landing_footer";
import React from "react";
import {NavBar} from "@/src/components/landing_navbar";
import {CartProviderClient} from "@/src/context/CartProvider.client";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="ru">
      <body>
      <CartProviderClient>
          <NavBar />
              {children}
          <Footer />
      </CartProviderClient>
      </body>
      </html>
  );
}
