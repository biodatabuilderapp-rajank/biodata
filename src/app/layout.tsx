import type { Metadata } from "next";
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
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Free Marriage Biodata Maker Online | Create & Download PDF",
    template: "%s | BiodataBuilder",
  },
  description:
    "Create beautiful Indian marriage biodata online for free. Choose from stunning templates, add your details & photo, and instantly download as PDF or PNG. No sign-up required.",
  keywords: [
    "marriage biodata maker",
    "biodata maker online free",
    "marriage biodata format",
    "Indian biodata template",
    "shaadi biodata",
    "biodata PDF download",
    "free biodata maker",
    "vivah biodata",
    "marriage biodata in Hindi",
    "biodata for marriage",
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
    title: "Free Marriage Biodata Maker Online | Create & Download PDF",
    description:
      "Create beautiful Indian marriage biodata online for free. Stunning templates, instant PDF & PNG download. No sign-up needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BiodataBuilder — Free Marriage Biodata Maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Marriage Biodata Maker Online",
    description:
      "Create beautiful Indian marriage biodata online for free. Instant PDF & PNG download. No account needed.",
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
                "Free online Indian marriage biodata maker. Create, customize, and download beautiful biodatas as PDF or PNG.",
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
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
