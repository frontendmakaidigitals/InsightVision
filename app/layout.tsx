import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  DM_Sans,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "./(Header-Footer)/Header/header";
import Footer from "./(Header-Footer)/Footer/footer";
import Loading from "./App_Chunks/Loading";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-DM-Sans",
  weight: ["100", "400", "500", "600", "700"], // or other weights you want
  subsets: ["latin"], // important for character set
});
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-Plus-Jakarta-Sans",
  weight: ["400", "500", "600", "700"], // or other weights you want
  subsets: ["latin"], // important for character set
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Insight Vision | Result-Driven Marketing Agency in Dubai",
  description:
    "Elevate your brand with Insight Vision, a data-driven marketing agency specializing in SEO, PPC, social media, and content marketing. Get measurable results today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${jakarta.variable} antialiased`}
      >
        <Loading />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
