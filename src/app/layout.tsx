import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import { getDefaultMetadata } from "@/utils/seo";
import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Urbanist, Work_Sans } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = getDefaultMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${urbanist.variable} ${newsreader.variable} ${workSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
