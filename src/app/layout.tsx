import NavBar from "../components/NavBar";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "black",
          color: "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
