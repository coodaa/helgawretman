import Image from "next/image";
import { notFound } from "next/navigation";
import { works, getWorkFiles } from "../../data/works";
import type { Metadata } from "next";

export function generateStaticParams() {
  return works
    .filter((w) => !w.isExternal && !w.isPdf)
    .map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};

  const files = getWorkFiles(slug);
  const firstImage = files.find((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const description = work.description
    ? work.description.slice(0, 160)
    : `${work.title} — a work by Helga Wretman.`;

  const pageTitle = work.year
    ? `${work.title} (${work.year})`
    : work.title;

  return {
    title: pageTitle,
    description,
    alternates: { canonical: `/works/${slug}` },
    openGraph: {
      title: pageTitle,
      description,
      url: `https://helgawretman.com/works/${slug}`,
      type: "article",
      ...(firstImage && {
        images: [{ url: firstImage, alt: work.title }],
      }),
    },
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const work = works.find((w) => w.slug === slug);

  if (!work) notFound();

  const files = getWorkFiles(slug);

  const baseUrl = "https://helgawretman.com";
  const videoFiles = files.filter((f) => /\.(mp4|mov|m4v)$/i.test(f));
  const firstImage = files.find((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const description = work.description
    ? work.description.slice(0, 160)
    : `${work.title} — a work by Helga Wretman.`;
  const uploadDate = work.year ? `${work.year}-01-01` : "2020-01-01";

  const videoSchemas = videoFiles.map((videoPath) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: work.title,
    description,
    thumbnailUrl: firstImage
      ? `${baseUrl}${firstImage}`
      : `${baseUrl}/og-image.jpg`,
    uploadDate,
    contentUrl: `${baseUrl}${videoPath}`,
  }));

  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  const imageIndex = (i: number) =>
    imageFiles.length > 1
      ? `${work.title}${work.year ? ` (${work.year})` : ""}, image ${i + 1} of ${imageFiles.length} — Helga Wretman`
      : `${work.title}${work.year ? ` (${work.year})` : ""} — Helga Wretman`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Works",
        item: `${baseUrl}/works`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: work.title,
        item: `${baseUrl}/works/${work.slug}`,
      },
    ],
  };
  const visualArtworkSchema =
    videoFiles.length === 0 && imageFiles.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "VisualArtwork",
          "@id": `${baseUrl}/works/${work.slug}#artwork`,
          name: work.title,
          description,
          url: `${baseUrl}/works/${work.slug}`,
          dateCreated: work.year ?? undefined,
          creator: {
            "@id": `${baseUrl}/#person`,
            "@type": "Person",
            name: "Helga Wretman",
          },
          image: imageFiles.map((img) => `${baseUrl}${img}`),
          artform: "Photography",
          artMedium: "Digital",
        }
      : null;

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

      {/* VideoObject Structured Data */}
      {videoSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* VisualArtwork Structured Data (image-only works) */}
      {visualArtworkSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(visualArtworkSchema) }}
        />
      )}

      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

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
        {(() => {
          let imgIdx = 0;
          return files.map((file) =>
            /\.(mp4|mov|m4v)$/i.test(file) ? (
              <video key={file} src={file} controls className="media-item" />
            ) : (
              <Image key={file} src={file} alt={imageIndex(imgIdx++)} width={0} height={0} sizes="(min-width: 1000px) 550px, 650px" className="media-item" style={{ width: "100%", height: "auto" }} />
            )
          );
        })()}
      </div>
    </main>
  );
}
