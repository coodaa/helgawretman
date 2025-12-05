import NavBar from "../components/NavBar";

export const metadata = {
  title: "Helga Wretman – Performance Artist",
  description:
    "Helga Wretman is a Berlin-based artist working across performance, video, physical intervention and digital culture. Official portfolio and works.",

  keywords: [
    "Helga Wretman",
    "performance art",
    "Berlin artist",
    "video art",
    "digital culture",
    "performance artist Berlin",
    "contemporary art",
    "body and technology",
    "stunt artist",
    "Fitness for Artists TV",
  ],

  authors: [{ name: "Helga Wretman" }],
  creator: "Helga Wretman",
  publisher: "Helga Wretman",
  category: "Art",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": "-1",
      "max-video-preview": "-1",
    },
  },

  alternates: {
    canonical: "https://helgawretman.com",
    languages: {
      en: "https://helgawretman.com",
    },
  },

  openGraph: {
    title: "Helga Wretman – Performance Artist",
    description:
      "Official website of Helga Wretman, Berlin-based performance and video artist.",
    url: "https://helgawretman.com",
    siteName: "Helga Wretman",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Helga Wretman Performance Artist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Helga Wretman – Performance Artist",
    description: "Official portfolio of artist Helga Wretman.",
    creator: "@helgawretman",
    images: ["/og-image.jpg"],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Video für Performance */}
        <link rel="preload" as="video" href="/helga-front-desktop.mp4" />

        {/* JSON-LD STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Helga Wretman",
              jobTitle: "Performance Artist",
              url: "https://helgawretman.com",
              image: "https://helgawretman.com/og-image.jpg",
              sameAs: ["https://instagram.com/helgawretman"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Berlin",
                addressCountry: "Germany",
              },
              knowsAbout: [
                "Performance Art",
                "Video Art",
                "Digital Culture",
                "Body and Technology",
                "Stunt Performance",
              ],
            }),
          }}
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "black",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          overflowX: "hidden",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
