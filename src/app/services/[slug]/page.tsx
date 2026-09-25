import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { serviceIcons } from "@/lib/icons";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { serviceSchema } from "@/lib/schema";
import { serviceSeo } from "@/lib/seo-services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const seo = serviceSeo[slug];
  const title =
    seo?.title ?? `${service.title} Services | TechSolutionHub`;
  const description = seo?.description ?? service.description;

  return createPageMetadata(title, description, `/services/${slug}`);
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const relatedServices = (service.related ?? [])
    .map(getServiceBySlug)
    .filter((s) => s !== undefined);

  return (
    <>
      <JsonLd
        data={serviceSchema(
          service,
          serviceSeo[slug]?.description ?? service.description
        )}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ]}
      />
      <PageHeader title={service.h1 ?? service.title} description={service.description} />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand">
            <Icon className="h-8 w-8 text-white" aria-hidden />
          </div>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            {service.longDescription ?? service.description}
          </p>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            We deliver {service.title} projects remotely for
            businesses across the United States, United Kingdom, Canada,
            Australia, the UAE, and Europe, with clear milestones and
            communication in English across time zones.
          </p>
          <h2 className="mb-4 text-xl font-bold text-dark">What&apos;s Included</h2>
          <ul className="mb-10 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" aria-hidden />
                <span className="text-dark/80">{feature}</span>
              </li>
            ))}
          </ul>
          {service.idealFor && (
            <>
              <h2 className="mb-4 text-xl font-bold text-dark">
                Who {service.title} Is For
              </h2>
              <ul className="mb-10 space-y-3">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary" aria-hidden />
                    <span className="text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <h2 className="mb-4 text-xl font-bold text-dark">How We Work</h2>
          <p className="mb-10 leading-relaxed text-muted-foreground">
            Every engagement follows four steps: discovery of your goals and
            requirements, design and approval of the solution, agile development
            with regular reviews, and deployment with testing, handover, and
            ongoing support. See examples in our{" "}
            <Link href="/portfolio" className="font-semibold text-primary hover:underline">
              project portfolio
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/services">
                <ArrowLeft className="h-4 w-4" />
                All Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {relatedServices.length > 0 && (
        <section className="bg-muted py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="mb-6 text-xl font-bold text-dark">Related Services</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-white p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
                  >
                    <span className="font-semibold text-dark">{related.title}</span>
                    <ArrowRight
                      className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
