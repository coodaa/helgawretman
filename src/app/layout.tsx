import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

import NavBar from "../components/NavBar";

/* -------------------------------------
   FONT
-------------------------------------- */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* -------------------------------------
   METADATA (SEO OPTIMIERT)
-------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://helgawretman.com"),

  title: {
    default: "Helga Wretman — Berlin-based Artist & Performer",
    template: "%s — Helga Wretman",
  },

  description:
    "Helga Wretman is a Berlin-based artist working with video, performance and digital culture. Official website featuring selected works and projects.",

  applicationName: "Helga Wretman",
  category: "Art",

  /* OPEN GRAPH */
  openGraph: {
    title: "Helga Wretman — Berlin-based Artist & Performer",
    description:
      "Official website of Helga Wretman, Berlin-based artist working with video, performance and digital culture.",
    url: "https://helgawretman.com",
    siteName: "Helga Wretman",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://helgawretman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Helga Wretman",
      },
    ],
  },

  /* TWITTER */
  twitter: {
    card: "summary_large_image",
    title: "Helga Wretman — Berlin-based Artist & Performer",
    description:
      "Official website of Helga Wretman, Berlin-based artist working with video, performance and digital culture.",
    site: "@helgawretman",
    creator: "@helgawretman",
    images: ["https://helgawretman.com/og-image.jpg"],
  },

  /* SEO KEYWORDS (nicht kritisch, aber okay) */
  keywords: [
    "Helga Wretman",
    "Berlin artist",
    "video art",
    "performance art",
    "digital culture",
    "contemporary art",
    "body and technology",
    "artist portfolio",
  ],

  authors: [{ name: "Helga Wretman" }],
  creator: "Helga Wretman",
  publisher: "Helga Wretman",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://helgawretman.com",
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
  themeColor: "#000000",
  referrer: "origin-when-cross-origin",
};

/* -------------------------------------
   ROOT LAYOUT
-------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* STRUCTURED DATA – PERSON */}
        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Helga Wretman",
            url: "https://helgawretman.com",
            image: "https://helgawretman.com/og-image.jpg",
            jobTitle: "Artist",
            description:
              "Berlin-based artist working with video, performance and digital culture.",
            knowsAbout: [
              "Video Art",
              "Performance Art",
              "Digital Culture",
              "Body and Technology",
            ],
            sameAs: ["https://instagram.com/helgawretman"],
            homeLocation: {
              "@type": "Place",
              name: "Berlin, Germany",
            },
          })}
        </Script>

        {/* STRUCTURED DATA – WEBSITE */}
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Helga Wretman",
            url: "https://helgawretman.com",
            inLanguage: "en",
          })}
        </Script>
      </head>

      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "white",
          color: "white",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          overflowX: "hidden",
        }}
      >
        {/* Accessibility */}
        <a
          href="#content"
          style={{
            position: "absolute",
            left: "-9999px",
            top: "auto",
          }}
        >
          Skip to content
        </a>

        <NavBar />

        <main id="content">{children}</main>

        {/* Analytics */}
        <Analytics />

        {/* Performance Monitoring */}
        <SpeedInsights />
      </body>
    </html>
  );
}
