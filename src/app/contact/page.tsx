export default function Contact() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px", // NavBar offset
        boxSizing: "border-box",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/image.png')", // <-- dein Bild
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -2,
        }}
      />

      {/* DARK OVERLAY damit Text lesbar bleibt */}
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
          }}
        >
          <a
            href="mailto:helga@helgawretman.com"
            style={{
              color: "white",
              textDecoration: "none",       // <-- NICHT unterstrichen
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
          }}
        >
          <a
            href="https://instagram.com/helgawretman"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",        // <-- NICHT unterstrichen
              fontWeight: 300,
            }}
          >
            instagram: @helgawretman
          </a>
        </p>
      </div>
    </main>
  );
}
