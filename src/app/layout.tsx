import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biodatabuilder.in"),
  alternates: {
    canonical: "https://biodatabuilder.in/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  title: {
    default: "Free Marriage Biodata Maker — Create & Download PDF",
    template: "%s — BiodataBuilder",
  },
  description:
    "Create beautiful Indian marriage biodata online for free. Choose stunning formats, add your details, and download as PDF or PNG to share on WhatsApp.",
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
    siteName: "BiodataBuilder",
    title: "Free Marriage Biodata Maker — Create & Download PDF",
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
    site: "@biodatabuilder",
    creator: "@biodatabuilder",
    title: "Free Marriage Biodata Maker — Create & Download PDF",
    description:
      "Create beautiful Indian biodata online for free. Instant PDF & PNG download. No registration needed to start.",
    images: ["/og-image.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-3646851872285015",
    "p:domain_verify": "9e12e72c914c7cd9e6bffa8d71d2ebb0",
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
        {/* Preconnect to external origins to reduce latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics — lazyOnload defers until page is fully idle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WBWV3Z1Z1E"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WBWV3Z1Z1E');
          `}
        </Script>
        {/* Google AdSense — lazyOnload prevents main-thread blocking during LCP */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3646851872285015"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
