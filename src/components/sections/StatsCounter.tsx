import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export function StatsCounter() {
  return (
    <SectionWrapper className="bg-gradient-brand py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-6">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
