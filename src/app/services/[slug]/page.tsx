import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { serviceIcons } from "@/lib/icons";
import { PageHeader } from "@/components/shared/PageHeader";
import { BreadcrumbSchema } from "@/components/shared/BreadcrumbSchema";
import { JsonLd } from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/utils";

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

  const url = `${siteConfig.url}/services/${slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | TechSolutionHub`,
      description: service.description,
      url,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Organization",
      name: "TechSolutionHub",
    },
    description: service.description,
    url: `${siteConfig.url}/services/${slug}`,
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${slug}` },
        ]}
      />
      <PageHeader title={service.title} description={service.description} />
      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            {service.longDescription ?? service.description}
          </p>
          <h2 className="mb-4 text-xl font-bold text-dark">What&apos;s Included</h2>
          <ul className="mb-10 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-dark/80">{feature}</span>
              </li>
            ))}
          </ul>
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
    </>
  );
}
