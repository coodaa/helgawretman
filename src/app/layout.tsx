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

  applicationName: "Helga Wretman",
  category: "Art",
  authors: [{ name: "Helga Wretman" }],
  creator: "Helga Wretman",
  publisher: "Helga Wretman",

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "Helga Wretman",
    "Berlin artist",
    "video art",
    "performance art",
    "digital culture",
    "contemporary art",
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
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
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

        {/* Person Schema */}
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://helgawretman.com/#person",
            name: "Helga Wretman",
            url: "https://helgawretman.com",
            image: "https://helgawretman.com/og-image.jpg",
            description:
              "Berlin-based artist working with video, performance and digital culture.",
            hasOccupation: [
              { "@type": "Occupation", name: "Artist" },
              { "@type": "Occupation", name: "Performer" },
            ],
            knowsAbout: [
              "Video Art",
              "Performance Art",
              "Digital Culture",
              "Body and Technology",
            ],
            sameAs: [
              "https://www.instagram.com/helgawretman",
              "https://www.facebook.com/helga.wretman",
            ],
            homeLocation: { "@type": "Place", name: "Berlin, Germany" },
          })}
        </Script>

        {/* Website Schema */}
        <Script id="schema-website" type="application/ld+json">
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
          backgroundColor: "black",
          color: "white",
          overflowX: "hidden",
        }}
      >
        <NavBar />

        <main id="content">{children}</main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
