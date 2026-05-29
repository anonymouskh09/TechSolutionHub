import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatStack } from "@/components/layout/FloatingChatStack";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { PageTransition } from "@/components/layout/PageTransition";
import { JsonLd } from "@/components/shared/JsonLd";
import { defaultMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechSolutionHub",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo/logo.png`,
  description: "Premium AI automation and web development agency",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-312-8572868",
    contactType: "customer service",
    availableLanguage: ["English", "Urdu"],
  },
  sameAs: [
    "https://linkedin.com/company/techsolutionhub",
    "https://github.com/techsolutionhub",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TechSolutionHub",
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
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
