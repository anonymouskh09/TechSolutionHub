import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data/case-studies";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { CTABanner } from "@/components/sections/CTABanner";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Case Studies",
  "Real results from TechSolutionHub clients — AI automation, web development, and international SEO success stories.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]}
      />
      <PageHeader
        title="Case Studies"
        description="Measurable outcomes for clients worldwide"
      />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="group rounded-2xl border border-border bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <p className="mb-2 text-sm font-medium text-primary">{study.industry}</p>
              <h2 className="mb-2 text-2xl font-bold text-dark">
                <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
              </h2>
              <p className="mb-4 text-muted-foreground">{study.excerpt}</p>
              <p className="mb-4 text-sm font-medium text-dark">Client: {study.client}</p>
              <ul className="mb-6 flex flex-wrap gap-2">
                {study.results.map((r) => (
                  <li
                    key={r}
                    className="rounded-lg bg-muted px-3 py-1 text-sm text-dark/80"
                  >
                    {r}
                  </li>
                ))}
              </ul>
              <Link
                href={`/case-studies/${study.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Read Case Study
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
