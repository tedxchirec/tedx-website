import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 400=Regular, 500=Medium, 700=Bold
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "TEDxYouth@CHIREC",
  description:
    "TedxYouth@CHIREC is a conference for student speakers to tell their story.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} ${ibmPlexSans.variable} antialiased min-h-screen text-white relative flex flex-col bg-black`}
      >
        <Navigation />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
