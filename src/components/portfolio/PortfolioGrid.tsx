"use client";

import { useState } from "react";
import { portfolioProjects, portfolioFilters } from "@/lib/data/portfolio";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {portfolioFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              active === filter
                ? "bg-gradient-brand text-white shadow-md"
                : "border border-border bg-white text-dark hover:border-primary/30"
            )}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <PortfolioCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </>
  );
}
