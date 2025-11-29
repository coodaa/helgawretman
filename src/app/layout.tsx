export const metadata = {
  title: "Helga Wretman",
  description: "Performance Artist — Official Portfolio",
  openGraph: {
    title: "Helga Wretman",
    description: "Performance Artist — Official Portfolio",
    url: "https://helgawretman.com",
    siteName: "Helga Wretman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Helga Wretman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helga Wretman",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "black",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            width: "100%",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            fontSize: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none", fontWeight: 600 }}>
            HELGA WRETMAN
          </a>

          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/works" style={{ color: "white", textDecoration: "none" }}>Works</a>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>About</a>
            <a href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
