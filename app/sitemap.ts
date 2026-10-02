import type { MetadataRoute } from "next";

const siteUrl = "https://dunwoodybarbershop.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      // Omit lastModified until a reliable content modification date is available.
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
