export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <source src="/helgafrontpage.mov" type="video/quicktime" />
        <source src="/helgafrontpage.mov" type="video/mp4" />
      </video>

      {/* LIGHT OVERLAY so black text is readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.25)", // ← helles Overlay
          zIndex: -1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          textAlign: "center",
          color: "black", // ← SCHWARZER TEXT
          padding: "20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 7vw, 2.7rem)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            marginTop: "2.5em",
            color: "black", // important
          }}
        >
          Helga Wretman
        </h1>
      </div>
    </main>
  );
}
