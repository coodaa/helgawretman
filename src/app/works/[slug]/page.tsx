import { works, getWorkFiles } from "../../data/works";

export default function WorkDetail({ params }) {
  const work = works.find((w) => w.slug === params.slug);

  if (!work) {
    return (
      <main style={{ padding: 40, marginTop: "100px", color: "white" }}>
        Work not found.
      </main>
    );
  }

  const files = getWorkFiles(work.slug);

  return (
    <main
      style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "100px auto",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "1rem",
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
            lineHeight: 1.5,
            opacity: 0.85,
            whiteSpace: "pre-line",
          }}
        >
          {work.description}
        </p>
      )}

      {files.map((file) => {
        if (/\.(mp4|mov|m4v)$/i.test(file)) {
          return (
            <video
              key={file}
              src={file}
              controls
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "0px",
              }}
            />
          );
        }

        return (
          <img
            key={file}
            src={file}
            style={{
              width: "100%",
              display: "block",
              marginBottom: "20px",
            }}
          />
        );
      })}
    </main>
  );
}
