import type { Metadata } from "next";
import { Roboto, Tektur } from "next/font/google";
import "./globals.css";
import MobileHeader from "@/components/MobileHeader";

const roboto = Roboto({
  variable: "--font_roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"]
});

const tektur = Tektur({
  variable: "--font_tektur",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Chad Jones Portfolio - Data Analyst",
  description: "NextJS wesbite created by Chad Jones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${tektur.variable}`}>
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
