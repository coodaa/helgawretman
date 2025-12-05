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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/about-helga.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -3,
        }}
      />

      {/* WHITE BLUR OVERLAY (makes it soft & readable) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(30, 29, 29, 0.45)", // heller Schleier
          backdropFilter: "blur(1px)",                // Weichzeichner
          WebkitBackdropFilter: "blur(1px)",
          zIndex: -2,
        }}
      />

      {/* EXTRA WHITE SOFT GLOW (very subtle) */}
      <div
        style={{
          position: "absolute",
          inset: "0 0 0 0",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.25), rgba(255,255,255,0.12))",
          zIndex: -1,
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          maxWidth: "650px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 6vw, 3rem)",
            marginBottom: "1rem",
            fontWeight: 700,
            color: "white",
          }}
        >
          About
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
            fontWeight: "bold",
            opacity: 0.9,
            color: "white",
            whiteSpace: "pre-line",
            textAlign: "left",
          }}
        >
          Helga Wretman
          born in Stockholm, Sweden.
          Lives and works in Berlin.

          After Helga graduated from the Royal Swedish Ballet School in
          Stockholm she worked as a professional dancer and performer with
          various choreographers in Berlin. In 2009 she began her career as a
          visual artist. Helga Wretman explores the fake and real, possibilities and
          limitations of body, mind and technology.

          Her work has been shown at for example Moscow Biannual for Young Art,
          Bundes Kunsthalle Bonn, Lyon Biannual, Shirn Kunsthalle,
          Berlinische Gallerie and Palais de Tokyo.

          Helga's artistic work lives in a symbiosis with her work as a stunt
          woman. She can be seen as a stunt double in films such as “The Book
          Thief”, “The girl in the Spider’s Web”, “Eddie the Eagle”,
          “Hansel and Gretel the Witch Hunters” and “Matrix 4”.

          Helga Wretman is also the creator and presenter of the Internet TV show
          "Fitness for Artists TV" on Arte Creative.
        </p>

        {/* CV LINK */}
        <div style={{ marginTop: "22px" }}>
          <a
            href="/cv-helge-wretman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            View CV
          </a>
        </div>
      </div>
    </main>
  );
}
