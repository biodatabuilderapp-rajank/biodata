import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biodatabuilder.in"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Free Marriage Biodata Maker | Create & Download PDF",
    template: "%s | BiodataBuilder",
  },
  description:
    "Create beautiful Indian marriage biodata online for free. Choose from stunning marriage biodata formats, add your details, and instantly download as PDF or PNG. Best free biodata maker.",
  keywords: [
    "marriage biodata maker",
    "free biodata maker",
    "marriage biodata builder",
    "marriage biodata format",
    "biodata generator online",
    "biodata for marriage pdf"
  ],
  authors: [{ name: "BiodataBuilder" }],
  creator: "BiodataBuilder",
  publisher: "BiodataBuilder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://biodatabuilder.in",
    siteName: "BiodataBuilder",
    title: "Free Marriage Biodata Maker | Create & Download PDF",
    description:
      "Create beautiful Indian marriage biodata online for free. Best free biodata maker with stunning templates. Instant PDF download.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BiodataBuilder — Biodata Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodata Maker Online",
    description:
      "Create beautiful Indian biodata online for free. Instant PDF & PNG download. No registration needed to start",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "BiodataBuilder",
              operatingSystem: "Web",
              applicationCategory: "UtilitiesApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "INR",
              },
              description:
                "Online free marriage biodata maker. Create, customize, and download beautiful marriage biodata formats as PDF or PNG.",
              url: "https://biodatabuilder.in",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1200",
              },
            }),
          }}
        />
        {/* Google AdSense — uncomment when site is live and approved */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}
        {/* Preconnect to external origins to reduce latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-WBWV3Z1Z1E" />
      </body>
    </html>
  );
}
