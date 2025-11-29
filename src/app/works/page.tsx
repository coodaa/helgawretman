export default function WorksPage() {
  return (
    <main
      style={{
        padding: "20px",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "1rem",
          fontWeight: 700,
        }}
      >
        Works
      </h1>

      <p
        style={{
          maxWidth: "320px",
          fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
          opacity: 0.6,
          lineHeight: 1.4,
        }}
      >
        New projects are currently being documented.
        <br />
        Please check back soon.
      </p>

      {/* animated dot */}
      <div
        style={{
          marginTop: "2rem",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "white",
          opacity: 0.7,
          animation: "pulse 1.6s infinite",
        }}
      />

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}
      </style>
    </main>
  );
}
