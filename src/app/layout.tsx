import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yosana Yoga Home | Ashtanga Vinyasa, Parkside Adelaide",
  description:
    "Yosana Yoga Home is an intimate home yoga studio at 60 Blyth St, Parkside SA. Private 1:1 and small group Ashtanga Vinyasa classes with Warunee. All levels welcome.",
  openGraph: {
    title: "Yosana Yoga Home | Adelaide",
    description:
      "Private 1:1 and small group Ashtanga Vinyasa yoga in Parkside, Adelaide. All levels welcome.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
