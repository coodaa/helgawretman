import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";

import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://helgawretman.com"),

  title: {
    default: "Helga Wretman — Berlin-based Artist & Performer",
    template: "%s — Helga Wretman",
  },

  description:
    "Helga Wretman is a Berlin-based artist working with video, performance and digital culture. Official website featuring selected works and projects.",

  alternates: { canonical: "/" },

  // optional, okay to have
  applicationName: "Helga Wretman",
  category: "Art",
  authors: [{ name: "Helga Wretman" }],
  creator: "Helga Wretman",
  publisher: "Helga Wretman",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

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

  // Keywords sind optional (Google nutzt sie praktisch nicht),
  // schaden aber nicht, wenn sie seriös sind:
  keywords: [
    "Helga Wretman",
    "Berlin artist",
    "video art",
    "performance art",
    "digital culture",
    "contemporary art",
    "artist portfolio",
  ],

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

  twitter: {
    card: "summary_large_image",
    title: "Helga Wretman — Berlin-based Artist & Performer",
    description:
      "Official website of Helga Wretman, Berlin-based artist working with video, performance and digital culture.",
    images: ["https://helgawretman.com/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        <Script
          id="schema-person"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://helgawretman.com/#person",
            name: "Helga Wretman",
            url: "https://helgawretman.com",
            image: "https://helgawretman.com/og-image.jpg",
            jobTitle: "Artist & Performer",
            description:
              "Berlin-based artist working with video, performance and digital culture.",
            knowsAbout: [
              "Video Art",
              "Performance Art",
              "Digital Culture",
              "Body and Technology",
            ],
            sameAs: [
              "https://helgawretman.com",
              "https://www.instagram.com/helgawretman",
              "https://www.facebook.com/helga.wretman",
              "https://www.imdb.com/name/nm3218091/",
              "https://methodsofart.net/artist/helga-wretman/",
            ],
            homeLocation: { "@type": "Place", name: "Berlin, Germany" },
          })}
        </Script>

        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://helgawretman.com/#website",
            name: "Helga Wretman",
            url: "https://helgawretman.com",
            publisher: { "@id": "https://helgawretman.com/#person" },
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
          overflowX: "hidden",
        }}
      >
        <a href="#content" style={{ position: "absolute", left: "-9999px" }}>
          Skip to content
        </a>

        <NavBar />
        <main id="content">{children}</main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
