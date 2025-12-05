import { works, getWorkFiles } from "../data/works";

export default function WorksPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "40px 20px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* PURE BACKGROUND — NO OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('/works/curiouser-and-curiouser/7.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />

      {/* TITLE */}
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          marginBottom: "3rem",
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Works
      </h1>

      {/* GRID */}
      <div className="grid-container">
        <style>
          {`
            .grid-container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
              gap: 28px; /* MORE SPACING BETWEEN WORKS */
              max-width: 1300px;
              margin: 0 auto;
            }

            /* Tablet */
            @media (min-width: 600px) {
              .grid-container {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            /* Mid Desktop */
            @media (min-width: 900px) {
              .grid-container {
                grid-template-columns: repeat(4, 1fr);
              }
            }

            /* Large Desktop — MAX 5 COLS */
            @media (min-width: 1200px) {
              .grid-container {
                grid-template-columns: repeat(5, 1fr);
              }
            }

            .square {
              aspect-ratio: 1/1;
              background: #00000055; /* transparent, damit Hintergrund durchscheint */
              overflow: hidden;
              display: block;
              transition: transform 0.25s ease;
              border: 1px solid rgba(255,255,255,0.2);
            }

            .square:hover img {
              transform: scale(1.06);
            }

            .square img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
              display: block;
            }

            .title {
              margin-top: 10px;
              font-size: 0.95rem;
              opacity: 0.9;
              text-align: center;
            }
          `}
        </style>

        {works.map((work) => {
          let files = [];

          // PDF THUMBNAIL
          if (work.isPdf) {
            files = getWorkFiles("older-works");
          } else {
            files = getWorkFiles(work.slug);
          }

          const thumbnail = files[0];

          // EXTERNAL PROJECT
          if (work.isExternal) {
            return (
              <a
                key={work.slug}
                href={work.externalUrl}
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="square">
                  <img src={thumbnail} alt={work.title} />
                </div>
                <p className="title">{work.title}</p>
              </a>
            );
          }

          // PDF PROJECT
          if (work.isPdf) {
            return (
              <a
                key={work.slug}
                href={work.pdfPath}
                target="_blank"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="square">
                  <img src={thumbnail} alt={work.title} />
                </div>
                <p className="title">{work.title}</p>
              </a>
            );
          }

          // NORMAL PROJECT
          return (
            <a
              key={work.slug}
              href={`/works/${work.slug}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="square">
                <img src={thumbnail} alt={work.title} />
              </div>
              <p className="title">{work.title}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
