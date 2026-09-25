import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  portfolioProjects,
  getPortfolioBySlug,
  getPortfolioImageAlt,
  projectServiceSlugs,
  projectTypeLabels,
} from "@/lib/data/portfolio";
import { caseStudies } from "@/lib/data/case-studies";
import { getServiceBySlug } from "@/lib/data/services";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { portfolioSchema } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  const label = projectTypeLabels[project.category];
  return createPageMetadata(
    `${project.title} – ${label} | TechSolutionHub`,
    `${project.description} Built with ${project.technologies.slice(0, 3).join(", ")}.`,
    `/portfolio/${slug}`
  );
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const relatedService = getServiceBySlug(projectServiceSlugs[project.category]);
  const caseStudy = caseStudies.find((c) => c.client === project.title);

  return (
    <>
      <JsonLd data={portfolioSchema(project)} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/portfolio" },
          { name: project.title, path: `/portfolio/${slug}` },
        ]}
      />
      <article className="bg-white pt-24 pb-16 md:pt-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <div className="relative mb-8 aspect-video overflow-hidden rounded-2xl border border-border shadow-card">
            <Image
              src={project.image}
              alt={getPortfolioImageAlt(project)}
              fill
              unoptimized
              className="object-cover object-top"
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
            />
          </div>
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            {project.category}
          </span>
          <h1 className="mb-4 text-4xl font-bold text-dark">{project.title}</h1>
          <p className="mb-8 text-lg text-muted-foreground">{project.description}</p>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-3 text-lg font-bold text-dark">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-muted px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-lg font-bold text-dark">Highlights</h2>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-dark/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Site
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            {caseStudy && (
              <Button asChild variant="secondary">
                <Link href={`/case-studies/${caseStudy.slug}`}>
                  Read the {project.title} Case Study
                </Link>
              </Button>
            )}
          </div>

          {relatedService && (
            <p className="mt-8 text-muted-foreground">
              Planning a similar project? Explore our{" "}
              <Link
                href={`/services/${relatedService.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                {relatedService.title} services
              </Link>{" "}
              or{" "}
              <Link
                href="/contact"
                className="font-semibold text-primary hover:underline"
              >
                request a free project quote
              </Link>
              .
            </p>
          )}
        </div>
      </article>
    </>
  );
}
