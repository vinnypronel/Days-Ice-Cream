import type { Metadata } from "next";
import { Rozha_One, Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rozha",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Day's Ice Cream | Since 1876 | Ocean Grove, NJ",
  description:
    "Day's Ice Cream has served Ocean Grove, NJ since 1876. Handcrafted ice cream, sundaes, and cakes from a shop with 150 years of history. Visit us at 48 Pitman Ave.",
  keywords: [
    "ice cream",
    "Ocean Grove",
    "NJ",
    "since 1876",
    "Day's Ice Cream",
    "handcrafted",
    "sundaes",
    "ice cream cakes",
  ],
  openGraph: {
    title: "Day's Ice Cream | Since 1876",
    description: "150 years. Same corner. Same love.",
    siteName: "Day's Ice Cream",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rozhaOne.variable} ${lora.variable} ${jakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
