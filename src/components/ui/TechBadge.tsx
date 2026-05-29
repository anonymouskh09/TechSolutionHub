"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      title={name}
      className={cn(
        "group relative flex cursor-default items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 shadow-sm transition-shadow hover:border-primary/30 hover:shadow-md",
        className
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-xs font-bold text-white">
        {name.slice(0, 2).toUpperCase()}
      </span>
      <span className="text-sm font-medium text-dark">{name}</span>
    </motion.div>
  );
}
