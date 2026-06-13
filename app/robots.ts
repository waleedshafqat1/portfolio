import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Search + AI citation crawlers: allow everything
      {
        userAgent: ["Googlebot", "Bingbot", "ChatGPT-User", "Claude-User", "PerplexityBot", "OAI-SearchBot"],
        allow: "/"
      },
      // Training-data scrapers: allow for indexing and citation likelihood
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "CCBot"],
        allow: "/"
      },
      // Allow all others
      {
        userAgent: "*",
        allow: "/"
      },
    ],
    sitemap: "https://www.waleedshafqat.com/sitemap.xml",
    host: "https://www.waleedshafqat.com",
  };
}
