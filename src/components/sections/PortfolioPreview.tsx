import Link from "next/link";
import { portfolioProjects } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PortfolioPreview() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <SectionWrapper className="bg-muted py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">
            Our Recent Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Delivering results for clients worldwide
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
