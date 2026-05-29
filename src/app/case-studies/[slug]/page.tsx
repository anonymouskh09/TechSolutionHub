import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: study.title,
    description: study.excerpt,
    alternates: { canonical: `${siteConfig.url}/case-studies/${slug}` },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${slug}` },
        ]}
      />
      <article className="bg-white pt-24 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link href="/case-studies">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
          <p className="mb-2 text-sm font-medium text-primary">{study.industry}</p>
          <h1 className="mb-4 text-4xl font-bold text-dark">{study.title}</h1>
          <p className="mb-2 text-lg font-medium text-dark">Client: {study.client}</p>
          <p className="mb-8 text-lg text-muted-foreground">{study.excerpt}</p>
          <h2 className="mb-4 text-xl font-bold text-dark">Key Results</h2>
          <ul className="mb-10 space-y-3">
            {study.results.map((r) => (
              <li key={r} className="flex items-center gap-3 text-dark/80">
                <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                {r}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-muted-foreground">
            Detailed case study content coming soon. Contact us to learn how we
            can deliver similar results for your business.
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </article>
    </>
  );
}
