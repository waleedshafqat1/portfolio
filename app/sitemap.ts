import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";

const base = "https://www.waleedshafqat.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudySlugs = caseStudies.map(study => study.slug);

  const services = [
    "bi-dashboards",
    "analytics-migration",
    "predictive-modeling",
    "ai-chatbots",
    "marketing-analytics",
    "web-development",
  ];

  const staticRoutes = ["", "/discovery-audit", "/work", "/services", "/about", "/contact", "/insights"];

  return [
    ...staticRoutes.map((p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...caseStudySlugs.map((c) => ({
      url: `${base}/work/${c}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6
    })),
  ];
}
