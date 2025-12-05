import fs from "fs";
import path from "path";

export const works = [
  {
    slug: "curiouser-and-curiouser",
    title: "Curiouser and Curiouser / sometimes I put my head in the sand",
    year: "2025",
    description: "Project description comes here.",
  },
  {
    slug: "bondfire",
    title: "Bondfire",
    year: "2024",
    description: "Project description comes here.",
  },
  {
    slug: "neck-turner",
    title: "Neck Turner",
    year: "2023",
    description: "Project description comes here.",
  },
  {
    slug: "lighting-from-a-clear-sky",
    title: "Lighting from a clear sky",
    year: "2021",
    description: "Project description comes here.",
  },
  {
    slug: "stolen-goods-prometheus",
    title: "Stolen Goods (Prometheus)",
    isExternal: true,
    externalUrl: "https://fredrikwretman.se/projects/stolen-goods-2021",
  },
  {
    slug: "in-group-photo",
    title: "In-group Photo",
    year: "2021",
    description: "Project description comes here.",
  },
  {
    slug: "older-works",
    title: "Older Works",
    isPdf: true,
    pdfPath: "/portfolio-2021_helga-wretman.pdf",
  },
];

// Automatically load ALL images + videos from a folder
export function getWorkFiles(slug: string) {
  const folder = path.join(process.cwd(), "public/works", slug);

  if (!fs.existsSync(folder)) {
    console.warn("❌ Folder not found:", folder);
    return [];
  }

  const files = fs.readdirSync(folder);

  return files
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|gif|mp4|mov|m4v)$/i.test(file)
    )
    .map((file) => `/works/${slug}/${file}`);
}
