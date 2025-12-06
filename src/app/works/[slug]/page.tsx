import { works, getWorkFiles } from "../../data/works";

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <main style={{ padding: 40, marginTop: "100px", color: "white" }}>
        <h1>Work not found</h1>
        <p>params.slug: {slug}</p>
      </main>
    );
  }

  const files = getWorkFiles(slug);

  // Hintergrundbilder
  const bgMobile =
    work.backgroundMobile || "/works/curiouser-and-curiouser/bgmobil.png";

  const bgDesktop =
    work.backgroundDesktop || "/works/curiouser-and-curiouser/7.webp";

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      {/* Hintergrund + Overlay + Responsiveness */}
      <style>{`
        /* ----- Hintergrund: Mobile ----- */
        .detail-bg {
          position: fixed;
          inset: 0;
          z-index: -2;
          background-image: url('${bgMobile}');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          opacity: 0.45;
        }

        /* ----- Hintergrund: Desktop ----- */
        @media (min-width: 900px) {
          .detail-bg {
            background-image: url('${bgDesktop}');
            background-size: cover;
            background-position: center top;
            background-repeat: no-repeat;
            background-attachment: fixed;
            opacity: 0.50;
          }
        }

        /* Dunkler Overlay für Lesbarkeit */
        .bg-overlay {
          position: fixed;
          inset: 0;
          z-index: -1;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.30);
        }

        /* ----- CONTENT ----- */
        .content-wrapper {
          max-width: 650px;
          margin: 140px auto 80px;
          text-align: left;
        }

        .media-item {
          width: 100%;
          max-width: 650px;
          margin: 0 auto 28px;
          display: block;
        }

        @media (min-width: 1000px) {
          .content-wrapper {
            max-width: 650px;
          }
          .media-item {
            max-width: 550px;
          }
        }
      `}</style>

      {/* Hintergrund + Overlay */}
      <div className="detail-bg" />
      <div className="bg-overlay" />

      {/* Inhalt */}
      <div className="content-wrapper">
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            marginBottom: "1rem",
            fontWeight: 700,
          }}
        >
          {work.title}
        </h1>

        {work.year && (
          <p style={{ opacity: 0.7, marginBottom: "20px" }}>{work.year}</p>
        )}

        {work.description && (
          <p
            style={{
              marginBottom: "30px",
              opacity: 0.85,
              whiteSpace: "pre-line",
              lineHeight: 1.5,
            }}
          >
            {work.description}
          </p>
        )}

        {/* Bilder & Videos */}
        {files.map((file) =>
          /\.(mp4|mov|m4v)$/i.test(file) ? (
            <video key={file} src={file} controls className="media-item" />
          ) : (
            <img key={file} src={file} className="media-item" />
          )
        )}
      </div>
    </main>
  );
}
