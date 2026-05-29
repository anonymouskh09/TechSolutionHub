import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/utils";

const siteUrl = getSiteUrl();

const defaultDescription =
  "TechSolutionHub helps businesses grow with AI automation, modern websites, SEO, chatbots, calling agents, GHL pipelines, and workflow automation.";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "TechSolutionHub — AI automation and web development agency",
};

export const defaultMetadata: Metadata = {
  title: {
    absolute:
      "TechSolutionHub | AI Automation, Web Development & Digital Solutions",
  },
  description: defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: "TechSolutionHub" }],
  creator: "TechSolutionHub",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TechSolutionHub",
    title:
      "TechSolutionHub | AI Automation, Web Development & Digital Solutions",
    description: defaultDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TechSolutionHub | AI Automation, Web Development & Digital Solutions",
    description: defaultDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  const base = getSiteUrl();
  const url = path ? `${base}${path.startsWith("/") ? path : `/${path}`}` : base;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "TechSolutionHub",
      title,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
