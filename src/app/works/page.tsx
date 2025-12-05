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
      {/* RESPONSIVE BACKGROUND */}
      <style>
        {`
          .bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            z-index: -2;
          }

          /* MOBILE BACKGROUND */
          .bg {
            background-image: url('/works/curiouser-and-curiouser/bgmobil.png');
          }

          /* DESKTOP BACKGROUND */
          @media (min-width: 768px) {
            .bg {
              background-image: url('/works/curiouser-and-curiouser/7.webp');
            }
          }
        `}
      </style>

      <div className="bg" />

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
              grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
              gap: 60px;
              max-width: 1200px;
              margin: 0 auto;

              justify-content: center;
              justify-items: center;
            }

            /* Tablet */
            @media (min-width: 600px) {
              .grid-container {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            /* Desktop */
            @media (min-width: 900px) {
              .grid-container {
                grid-template-columns: repeat(4, 1fr);
              }
            }

            /* Larger desktop */
            @media (min-width: 1300px) {
              .grid-container {
                grid-template-columns: repeat(5, 1fr);
              }
            }

            .square {
              aspect-ratio: 1/1;
              background: #00000055;
              overflow: hidden;
              display: block;
              transition: transform 0.25s ease;
              border: 1px solid rgba(255,255,255,0.15);
              width: 100%;
            }

            .square:hover img {
              transform: scale(1.05);
            }

            .square img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.3s ease;
              display: block;
            }

            .title {
              margin-top: 8px;
              font-size: 0.85rem;
              opacity: 0.9;
              text-align: center;
            }
          `}
        </style>

        {/* LOOP */}
        {works.map((work) => {
          const files = work.isPdf
            ? getWorkFiles("older-works")
            : getWorkFiles(work.slug);

          const thumbnail = files[0];

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
