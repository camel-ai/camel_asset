import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://camel-ai.github.io/camel_asset'),
  title: {
    default: "CAMEL Asset Hub",
    template: "%s | CAMEL Asset Hub"
  },
  description: "Explore CAMEL-AI's Asset Hub: A comprehensive collection of AI tools, models, and resources.",
  keywords: ["camel-ai", "ai tools", "models", "resources", "asset hub"],
  authors: [{ name: "Camel-AI.org" }],
  creator: "Camel-AI.org",
  publisher: "Camel-AI.org",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/favicon.ico'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://camel-ai.github.io/camel_asset",
    title: "CAMEL Asset Hub",
    description: "Explore CAMEL-AI's Asset Hub: A comprehensive collection of AI tools, models, and resources.",
    siteName: "CAMEL Asset Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAMEL Asset Hub",
    description: "Explore CAMEL-AI's Asset Hub: A comprehensive collection of AI tools, models, and resources.",
    creator: "@CamelAIOrg",
    images: [
      {
        url: "/twitter-card.png",
        width: 1200,
        height: 628,
        alt: "CAMEL Asset Hub"
      }
    ],
    site: "@CamelAIOrg"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
