/** Canonical production domain — single source of truth */
export const CANONICAL_SITE_URL = "https://www.techsolutionhub.tech";

/** Resolves site URL for sitemap, metadata, schema, and canonicals */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? CANONICAL_SITE_URL;
  const trimmed = raw.replace(/\/$/, "");

  if (
    trimmed.includes("techsolutionhub.com") ||
    trimmed.includes("localhost") ||
    trimmed.includes("127.0.0.1")
  ) {
    return CANONICAL_SITE_URL;
  }

  return trimmed;
}
