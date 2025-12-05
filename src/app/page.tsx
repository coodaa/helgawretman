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
        {/* DESKTOP VERSION */}
        <source
          src="/neckturner_desktop_v2.mov"
          type="video/mp4"            // wichtig! video/quicktime wird ignoriert
          media="(min-width: 768px)"
        />

        {/* MOBILE VERSION */}
        <source
          src="/neckturnermobil_v2.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        {/* FALLBACK (für alle Browser) */}
        <source src="/neckturnermobil_v2.mp4" type="video/mp4" />
      </video>

      {/* HELLER OVERLAY FÜR SCHWARZEN TEXT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          zIndex: -1,
        }}
      />

      {/* TEXT / CONTENT */}
      <div
        style={{
          textAlign: "center",
          color: "white",
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
          }}
        >
          Helga Wretman
        </h1>
      </div>
    </main>
  );
}
