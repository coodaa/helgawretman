import { works, getWorkFiles } from "../data/works";

export default function WorksPage() {
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
      {/* Responsive background */}
      <style>{`
        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: -2;
        }

        /* Mobile */
        .bg {
          background-image: url('/works/curiouser-and-curiouser/bgmobil.png');
        }

        /* Desktop */
        @media (min-width: 768px) {
          .bg {
            background-image: url('/works/curiouser-and-curiouser/7.webp');
          }
        }
      `}</style>

      <div className="bg" />

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

      <div className="grid-container">
        <style>{`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(95px, 1fr));
            justify-content: center;
            justify-items: center;
            gap: 60px;
            max-width: 1200px;
            margin: 0 auto;
          }

          @media (min-width: 600px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 900px) {
            .grid-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          @media (min-width: 1300px) {
            .grid-container {
              grid-template-columns: repeat(5, 1fr);
            }
          }

          .square {
            aspect-ratio: 1/1;
            background: #00000055;
            border: 1px solid rgba(255,255,255,0.15);
            overflow: hidden;
            width: 100%;
            transition: transform 0.25s ease;
          }

          .square:hover img {
            transform: scale(1.05);
          }

          .square img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }

          .title {
            margin-top: 8px;
            font-size: 0.85rem;
            opacity: 0.9;
            text-align: center;
          }
        `}</style>

        {works.map((work) => {
          const files = work.isPdf
            ? getWorkFiles("older-works")
            : getWorkFiles(work.slug);

          const thumbnail = files[0];

          // External project (Stolen Goods)
          if (work.isExternal) {
            return (
              <a key={work.slug} href={work.externalUrl} target="_blank" style={{ color: "white", textDecoration: "none" }}>
                <div className="square">
                  <img src={thumbnail} alt={work.title} />
                </div>
                <p className="title">{work.title}</p>
              </a>
            );
          }

          // PDF Project
          if (work.isPdf) {
            return (
              <a key={work.slug} href={work.pdfPath} target="_blank" style={{ color: "white", textDecoration: "none" }}>
                <div className="square">
                  <img src={thumbnail} alt={work.title} />
                </div>
                <p className="title">{work.title}</p>
              </a>
            );
          }

          // Normal project
          return (
            <a key={work.slug} href={`/works/${work.slug}`} style={{ color: "white", textDecoration: "none" }}>
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
