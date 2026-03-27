import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Helga Wretman — email and Instagram contact for bookings and inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Helga Wretman",
    description:
      "Get in touch with Helga Wretman — email and Instagram contact for bookings and inquiries.",
    url: "https://helgawretman.com/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px",
        boxSizing: "border-box",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND VIDEO — mobile */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="contact-video-mobile"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -2,
          display: "none",
        }}
      >
        <source src="/contact-mobil.MOV" type="video/mp4" />
        <source src="/contact-desktop.mp4" type="video/mp4" />
      </video>

      {/* BACKGROUND VIDEO — desktop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="contact-video-desktop"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -2,
          display: "none",
        }}
      >
        <source src="/contact-desktop.mp4" type="video/mp4" />
      </video>

      <style>{`
        @media (max-width: 767px) {
          .contact-video-mobile { display: block !important; }
        }
        @media (min-width: 768px) {
          .contact-video-desktop { display: block !important; }
        }
      `}</style>

      {/* DARK OVERLAY */}
      {/* <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: -1,
        }}
      /> */}

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "600px",
          padding: "0 20px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            marginBottom: "1.5rem",
            fontWeight: 700,
            color: "white",
          }}
        >
          Contact
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            margin: "10px 0",
            color: "white",
          }}
        >
          <a
            href="mailto:helga@helgawretman.com"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 300,
            }}
          >
            email: helga@helgawretman.com
          </a>
        </p>

        <p
          style={{
            fontSize: "1.2rem",
            margin: "10px 0",
            color: "white",
          }}
        >
          <a
            href="https://instagram.com/helgawretman"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 300,
            }}
          >
            instagram: @helgawretman
          </a>
        </p>

        {/* SETCARD LINK */}
        <p
          style={{
            fontSize: "1.2rem",
            margin: "20px 0 0 0",
            color: "white",
          }}
        >
          <a
            href="/set-card_helga-wretman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              textDecoration: "underline",
              fontWeight: 300,
            }}
          >
            View Setcard
          </a>
        </p>
      </div>
    </main>
  );
}
