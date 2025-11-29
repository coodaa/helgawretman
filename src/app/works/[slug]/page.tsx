export default function WorkDetail({ params }: any) {
  return (
    <main style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {params.slug.replace("-", " ")}
      </h1>

      <div
        style={{
          width: "100%",
          height: "400px",
          background: "#333",
          marginBottom: "1.5rem",
        }}
      />

      <p style={{ opacity: 0.7, lineHeight: 1.5 }}>
        Project description coming soon.
      </p>
    </main>
  );
}
