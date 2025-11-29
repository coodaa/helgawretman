export default function Home() {
  return (
    <main
      style={{
        minHeight: "calc(100vh - 80px)",
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
          fontSize: "clamp(2rem, 8vw, 5rem)",
          fontWeight: 700,
          margin: "0 0 1rem 0",
        }}
      >
        Helga Wretman
      </h1>

      <p
        style={{
          fontSize: "clamp(1rem, 4vw, 1.5rem)",
          opacity: 0.7,
        }}
      >
        Artist
      </p>

      <p
        style={{
          marginTop: "0.5rem",
          fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
          opacity: 0.5,
        }}
      >
        Website Coming Soon
      </p>
    </main>
  );
}
