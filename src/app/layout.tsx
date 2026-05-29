import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatStack } from "@/components/layout/FloatingChatStack";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { PageTransition } from "@/components/layout/PageTransition";
import { JsonLd } from "@/components/shared/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechSolutionHub",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
  description:
    "TechSolutionHub delivers AI automation, web development, SEO, chatbots, calling agents, workflow automation, and GHL pipeline setup.",
  email: siteConfig.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-312-8572868",
    contactType: "customer service",
    email: siteConfig.email,
    url: `${siteUrl}/contact`,
    availableLanguage: ["English", "Urdu"],
  },
  knowsAbout: [
    "AI Automation",
    "Web Development",
    "SEO",
    "AI Chatbots",
    "AI Calling Agents",
    "Workflow Automation",
    "GHL Pipeline Setup",
    "API Integrations",
    "Shopify Development",
    "Cloud Deployment",
  ],
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.github,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TechSolutionHub",
  url: siteUrl,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: "TechSolutionHub",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <GoogleAnalytics />
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <LoadingScreen />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingChatStack />
      </body>
    </html>
  );
}
