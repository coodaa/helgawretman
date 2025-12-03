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
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/in-group_photo_JohnHolten.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: "-1",
          filter: "brightness(0.5)", // dunkelt das Foto ab für bessere Lesbarkeit
        }}
      />

      {/* CONTENT */}
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
            fontSize: "clamp(1.5rem, 7vw, 2.3rem)",
            fontWeight: 700,
            marginBottom: "0rem",
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
