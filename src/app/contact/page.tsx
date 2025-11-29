export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   // ← macht es vertikal zentriert
        paddingTop: "60px",     // ← damit die NavBar nichts überlappt
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            marginBottom: "1.2rem",
            fontWeight: 700,
          }}
        >
          Contact
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3vw, 1.3rem)",
            lineHeight: 1.6,
            opacity: 0.85,
            marginBottom: "2rem",
          }}
        >
          For inquiries regarding performances, exhibitions, collaborations,
          or interviews, please feel free to reach out.
        </p>

        <p style={{ fontSize: "1.2rem", margin: "4px 0", opacity: 0.9 }}>
          <a
            href="mailto:helga@helgawretman.com"
            style={{
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            helga@helgawretman.com
          </a>
        </p>

        <p style={{ fontSize: "1.2rem", margin: "4px 0", opacity: 0.9 }}>
          <a
            href="https://instagram.com/helgawretman"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            @helgawretman
          </a>
        </p>
      </div>
    </main>
  );
}
