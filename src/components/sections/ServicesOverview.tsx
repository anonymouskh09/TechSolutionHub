import Link from "next/link";
import { services } from "@/lib/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";

export function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Software, AI &amp; Digital Marketing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            End-to-end development, automation, design, and growth services
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="secondary">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
