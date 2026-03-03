import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unicorn Probability Maximizer OS",
  description: "Founder Command System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sans.variable} ${mono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <div className="flex h-screen overflow-hidden text-sm w-full">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-background/95 scrollbar-hide">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
