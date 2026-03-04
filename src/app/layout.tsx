import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "FounderOS — The Billionaire Founder Operating System",
  description:
    "The real routines, habits, and startup models used by unicorn founders to build billion-dollar companies. Based on analysis of 200+ unicorn founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
