import type { MetadataRoute } from "next";
import { portfolioProjects } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Date the site content was last meaningfully updated.
 * Update this when page content changes so lastmod stays accurate.
 */
const CONTENT_LAST_UPDATED = new Date("2026-09-25");

// Blog posts and case study detail pages are excluded (and noindexed) until
// their full content is published. Add them back here when they go live.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = CONTENT_LAST_UPDATED;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/about`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/case-studies`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/technologies`, lastModified, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const portfolioRoutes: MetadataRoute.Sitemap = portfolioProjects.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
    images: [`${base}${p.image}`],
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}
