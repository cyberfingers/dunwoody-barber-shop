import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Dunwoody Barber Shop | Classic Haircuts in Dunwoody, GA",
    template: "%s | Dunwoody Barber Shop",
  },
  description:
    "Visit Dunwoody Barber Shop for classic haircuts, careful scissor and clipper work, and friendly neighborhood service from master barber Kevin Lam.",
  keywords: [
    "barber shop Dunwoody GA",
    "men's haircut Dunwoody",
    "barber near Dunwoody Village",
    "classic barber Dunwoody",
    "Kevin Lam barber",
  ],
  authors: [{ name: "Dunwoody Barber Shop" }],
  creator: "Dunwoody Barber Shop",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dunwoody Barber Shop",
    title: "Dunwoody Barber Shop | A Proper Haircut, Done With Care",
    description:
      "Classic barbering and friendly neighborhood service from master barber Kevin Lam in Dunwoody, Georgia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dunwoody Barber Shop",
    description: "Classic haircuts and careful barbering in Dunwoody, Georgia.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
