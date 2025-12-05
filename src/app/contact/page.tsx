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
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -2,
        }}
      >
        {/* Desktop */}
        <source
          src="/contact-desktop.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />

        {/* Mobile */}
        <source
          src="/contact-mobil.MOV"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        {/* Fallback */}
        <source src="/contact-desktop.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: -1,
        }}
      />

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
