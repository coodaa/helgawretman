export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Helga Wretman
      </h1>

      {/* Erste Zeile */}
      <p
        style={{
          marginTop: "1rem",
          fontSize: "clamp(1.2rem, 5vw, 1.8rem)",
          opacity: 0.9,
          lineHeight: 1.2,
          marginBottom: "0.3rem",
        }}
      >
        Artist
      </p>

      {/* Zweite Zeile */}
      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.4rem)",
          opacity: 0.6,
          lineHeight: 1.2,
        }}
      >
        Website Coming Soon
      </p>
    </main>
  );
}
