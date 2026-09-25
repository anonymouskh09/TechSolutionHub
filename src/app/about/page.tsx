import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Eye, Gauge, Shield } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "About Us | Global Software & AI Agency | TechSolutionHub",
  "Meet TechSolutionHub, a remote-first software and AI automation agency serving the US, UK, Canada, Australia, UAE and Europe. Learn how we work.",
  "/about"
);

const values = [
  { icon: Bot, title: "Innovation", desc: "Cutting-edge AI and modern tech stacks" },
  { icon: Shield, title: "Quality", desc: "Production-grade code and rigorous testing" },
  { icon: Gauge, title: "Speed", desc: "Agile delivery without compromising excellence" },
  { icon: Eye, title: "Transparency", desc: "Clear communication and honest timelines" },
];

const expertise = [
  "AI Automation & Chatbots",
  "Next.js & React Development",
  "Shopify & E-commerce",
  "Cloud & DevOps",
  "CRM & GHL Pipelines",
  "SaaS Platform Engineering",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageHeader
        title="About TechSolutionHub"
        description="A global software development and AI automation agency"
      />

      <SectionWrapper className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="mb-6 text-2xl font-bold text-dark">Our Story</h2>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            TechSolutionHub was founded with a clear mission: help businesses
            innovate, automate, and scale through intelligent technology. We
            combine deep expertise in AI, web development, and cloud
            infrastructure to deliver solutions that drive measurable growth.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Our vision is to be the trusted technology partner for ambitious
            companies worldwide—from startups launching their first SaaS to
            enterprises modernizing legacy systems with AI-powered automation.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark">Core Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article
                key={v.title}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-card"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-bold text-dark">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-dark">Expertise Areas</h2>
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-center gap-3 text-dark/80">
                  <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-dark">
              International Experience
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              We serve clients across the United States, United Kingdom, Canada,
              Australia, UAE, and Europe. Our remote-first team delivers 24/7 support
              with timezone-flexible communication and culturally aware
              solutions for global markets.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-muted py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="mb-6 text-2xl font-bold text-dark">Tech Capabilities</h2>
          <p className="leading-relaxed text-muted-foreground">
            From Next.js and TypeScript to OpenAI, n8n, Shopify, AWS, and
            Vercel—we architect full-stack solutions that are fast, secure, and
            built to scale. Explore our complete stack on the Technologies page.
          </p>
          <Button asChild variant="secondary" className="mt-8">
            <Link href="/technologies">View Technology Stack</Link>
          </Button>
        </div>
      </SectionWrapper>

      <CTABanner />

      <SectionWrapper className="bg-white py-12 text-center md:py-16">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-dark">Work With Us</h2>
          <p className="mb-6 text-muted-foreground">
            Ready to transform your business with AI and modern development?
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
