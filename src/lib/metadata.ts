import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/utils";

const siteUrl = getSiteUrl();

const defaultTitle =
  "Global Software & AI Automation Agency | TechSolutionHub";

const defaultDescription =
  "AI automation, chatbots, web & mobile apps, custom software and SEO for businesses in the US, UK, Canada, Australia, UAE & EU. Get a free quote today.";

export const ogImage = {
  url: "/og/og-default.png",
  width: 1200,
  height: 630,
  alt: "TechSolutionHub — global software development and AI automation agency",
};

export const defaultMetadata: Metadata = {
  title: { absolute: defaultTitle },
  description: defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

interface PageMetadataOptions {
  /** Keep the page out of search results (e.g. placeholder content) */
  noIndex?: boolean;
  /** Open Graph type — defaults to "website" */
  ogType?: "website" | "article";
}

export function createPageMetadata(
  title: string,
  description: string,
  path = "",
  { noIndex = false, ogType = "website" }: PageMetadataOptions = {}
): Metadata {
  const base = getSiteUrl();
  const url = path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: true } }),
    openGraph: {
      type: ogType,
      locale: "en_US",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  };
}
