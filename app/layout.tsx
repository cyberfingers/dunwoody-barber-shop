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
  metadataBase: new URL("https://dunwoodybarbershop.com"),
  title: {
    default: "Barber Shop in Dunwoody, GA | Dunwoody Barber Shop",
    template: "%s | Dunwoody Barber Shop",
  },
  description:
    "Visit Dunwoody Barber Shop for haircuts, razor cuts, facial shaves, beard trims, and shampoo. Walk-ins welcome at 5064 Nandina Lane.",
  alternates: {
    canonical: "/",
  },
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
    url: "/",
    siteName: "Dunwoody Barber Shop",
    title: "Barber Shop in Dunwoody, GA | Dunwoody Barber Shop",
    description:
      "Haircuts, razor cuts, facial shaves, beard trims, and shampoo from master barber Kevin Lam in Dunwoody, Georgia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Shop in Dunwoody, GA | Dunwoody Barber Shop",
    description:
      "Haircuts, razor cuts, facial shaves, beard trims, and shampoo from master barber Kevin Lam in Dunwoody, Georgia.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
