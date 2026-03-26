import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource-variable/playfair-display";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource-variable/montserrat";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "newspapercn-ui",
  description:
    "A shadcn/ui variant with a One Piece newspaper theme — Grand Line Gazette",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
