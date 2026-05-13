import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Yosana Yoga Home | Yoga Classes in Adelaide",
  description:
    "Yosana Yoga Home offers mindful, accessible yoga classes for all levels. Find stillness, build strength, and come home to yourself.",
  openGraph: {
    title: "Yosana Yoga Home",
    description:
      "Mindful yoga classes for all levels. Find stillness, build strength, and come home to yourself.",
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="bg-[#7A9B76] text-[#F4EFE6] text-center text-xs py-2 px-4">
          Website created by <strong>Alexandria Braniff</strong> &mdash;{" "}
          <a href="mailto:alexandriabraniff@gmail.com" className="underline hover:opacity-80">
            alexandriabraniff@gmail.com
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
