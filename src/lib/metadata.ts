import type { Metadata } from "next";
import { siteConfig } from "@/lib/utils";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | TechSolutionHub",
    default: "TechSolutionHub — AI Automation & Web Development Agency",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "TechSolutionHub" }],
  creator: "TechSolutionHub",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "TechSolutionHub",
    title: "TechSolutionHub — AI Automation & Web Development",
    description: siteConfig.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSolutionHub",
    description: siteConfig.description,
    images: ["/og-image.png"],
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
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export function createPageMetadata(
  title: string,
  description?: string,
  path = ""
): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description: description ?? siteConfig.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | TechSolutionHub`,
      description: description ?? siteConfig.description,
      url,
    },
  };
}
