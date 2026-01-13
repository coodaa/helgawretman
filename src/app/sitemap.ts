import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://helgawretman.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ⬇️ Beispiel für einzelne Arbeiten / Projekte
    // {
    //   url: `${baseUrl}/works/project-title`,
    //   lastModified: new Date("2025-01-01"),
    //   changeFrequency: "yearly",
    //   priority: 0.7,
    // },
  ];
}
