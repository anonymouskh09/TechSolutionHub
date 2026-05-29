"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", label }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const display = useCounter(value, 2000, 0, isInView, suffix);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-white md:text-5xl">{display}</div>
      <p className="mt-2 text-sm text-white/80 md:text-base">{label}</p>
    </div>
  );
}
