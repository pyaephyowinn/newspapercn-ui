import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "@fontsource-variable/playfair-display";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource-variable/montserrat";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newspapercn-ui.vercel.app"),
  title: {
    default: "newspapercn-ui",
    template: "%s — newspapercn-ui",
  },
  description:
    "A One Piece newspaper-themed component library built on shadcn/ui. 10 custom components, 13 newspaper variants, OKLCH tokens.",
  openGraph: {
    title: "newspapercn-ui",
    description:
      "A One Piece newspaper-themed component library built on shadcn/ui.",
    url: "https://newspapercn-ui.vercel.app",
    siteName: "newspapercn-ui",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
