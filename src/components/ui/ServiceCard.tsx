"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";
import { serviceIcons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card",
        "transition-shadow hover:border-primary/30 hover:shadow-card-hover"
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand">
        <Icon className="h-6 w-6 text-white" aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-bold tracking-tight text-dark">
        {service.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-secondary"
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
}
