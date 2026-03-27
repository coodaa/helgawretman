import { MetadataRoute } from "next";
import { works } from "./data/works"; // Pfad ggf. anpassen

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://helgawretman.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const workPages: MetadataRoute.Sitemap = works.map((work) => {
    const hasValidYear =
      typeof work.year === "string" && /^\d{4}$/.test(work.year);

    return {
      url: `${baseUrl}/works/${work.slug}`,
      changeFrequency: "yearly",
      priority: 0.8,
      ...(hasValidYear ? { lastModified: new Date(`${work.year}-01-01`) } : {}),
    };
  });

  return [...staticPages, ...workPages];
}
