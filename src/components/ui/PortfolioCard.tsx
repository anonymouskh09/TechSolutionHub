"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/types";
import { getPortfolioImageAlt } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  project: PortfolioProject;
  index?: number;
  /** Use "h2" when the card sits directly under the page H1 */
  headingLevel?: "h2" | "h3";
}

export function PortfolioCard({
  project,
  index = 0,
  headingLevel: Heading = "h3",
}: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-white shadow-card",
        "transition-shadow hover:shadow-card-hover"
      )}
    >
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            key={project.slug}
            src={project.image}
            alt={getPortfolioImageAlt(project)}
            fill
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <Heading className="mb-2 text-xl font-bold text-dark">{project.title}</Heading>
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            View Project
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
