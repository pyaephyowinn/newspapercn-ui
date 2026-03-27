import type { MetadataRoute } from "next";
import { componentDocs } from "@/lib/component-docs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://newspapercn-ui.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs/components`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const componentPages: MetadataRoute.Sitemap = componentDocs.map((c) => ({
    url: `${baseUrl}/docs/components/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...componentPages];
}
