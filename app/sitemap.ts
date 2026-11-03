import type { MetadataRoute } from "next";
import { pageSlugs } from "@/components/page-slugs";
import { siteConfig } from "@/config/site";

const baseUrl = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    ...Object.keys(pageSlugs).filter((path) => path !== "soluciones/cloud-security").map((path) => ({
      url: `${baseUrl}/${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "contacto" ? 0.8 : 0.7,
    })),
  ];
}
