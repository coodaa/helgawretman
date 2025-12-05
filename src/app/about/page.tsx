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
          Helga Wretman
Born 1985 in Stockholm, Sweden.
Lives and works in Berlin.
After Helga graduated from the Royal Swedish Ballet School in
Stockholm she worked as a professional dancer and performer with
various choreographers in Berlin. In 2009 she began her career as a
visual artist. Helga Wretman explores the fake and real, possibilities and
limitations of body, mind and technology. Her work has been shown at
for example Moscow Biannual for Young Art, Bundes Kunsthalle Bonn,
Lyon Biannual, Shirn Kunsthalle, Berlinische Gallerie and Palais de
Tokyo Helgas artistic work lives in a symbiosis with her work as a stunt
woman. She can be seen as a stunt double in films such as “The Book
Thief”, “The girl in the Spider’s Web”, “Eddie the Eagle”, “Hansel and
Gretel the Witch Hunters” and “Matrix 4”
Helga Wretman is also the creator and presenter of the Internet TV show
"Fitness for Artists TV" on Arte Creative.
        </p>
      </div>
    </main>
  );
}
