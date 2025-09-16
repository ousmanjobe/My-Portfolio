import type { Metadata } from "next";
import "./globals.css";
import FloatingMenuButton from "../components/floatingMenuButton";

import { Kalam, Libre_Barcode_39_Text } from "next/font/google";
import localFont from "next/font/local";

// Google fonts
const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
});
const barcode = Libre_Barcode_39_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barcode",
});

// Local fonts (place files in /public/fonts)
const ailerons = localFont({
  src: "./fonts/Ailerons-Typeface.otf",
  variable: "--font-ailerons",
  display: "swap",
});
const avenirNext = localFont({
  src: "./fonts/AvenirNext.ttf",
  variable: "--font-avenir",
  display: "swap",
});
const urbanist = localFont({
  src: "./fonts/Urbanist-VariableFont_wght.ttf",
  variable: "--font-urbanist",
  display: "swap",
});
const urbanistItalic = localFont({
  src: "./fonts/Urbanist-Italic-VariableFont_wght.ttf",
  variable: "--font-urbanist-italic",
  display: "swap",
});
const nagasaki = localFont({
  src: "./fonts/nagasaki.ttf",
  variable: "--font-nagasaki",
  display: "swap",
});
const dongpora = localFont({
  src: "./fonts/Dongpora-BF65c3a46d6cc22.otf",
  variable: "--font-dongpora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ousman Jobe",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${kalam.variable} ${barcode.variable} ${ailerons.variable} ${avenirNext.variable} ${urbanist.variable} ${urbanistItalic.variable} ${nagasaki.variable} ${dongpora.variable}`}
      >
        <FloatingMenuButton />
        {children}
      </body>
    </html>
  );
}
