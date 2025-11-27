export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 700, margin: 0 }}>
        Helga Wretman
      </h1>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", opacity: 0.6 }}>
        Performance Artist – Website Coming Soon
      </p>
    </main>
  );
}
