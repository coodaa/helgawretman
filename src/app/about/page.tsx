export default function About() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
        textAlign: "center",
        lineHeight: 1.6,
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          About
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
            opacity: 0.9,
          }}
        >
          Helga Wretman is an artist based in Berlin. Her practice explores the
          shifting relationship between body, identity, and digital culture
          through performance, video, and forms of social interaction. Her works
          arise from an attention to the body as a site of tension—between
          strength and fragility, exposure and control, presence and
          disappearance. Through carefully staged actions and moments of
          improvisation, she creates situations in which the choreography of
          everyday life becomes visible and the body becomes a tool for
          reflection, resistance, and reinvention.
        </p>
      </div>
    </main>
  );
}
