import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Rent My Home | Property Management Auckland & Waikato",
  description:
    "Professional property management services in Auckland, Cambridge & Hamilton. 250+ properties managed. Roadmap to 0% management fees for landlords and personalised service for tenants.",
  icons: "logo.avif",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
