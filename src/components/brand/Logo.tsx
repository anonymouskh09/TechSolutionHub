import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
  showTagline?: boolean;
}

/** Brand mark — SVG + wordmark (always visible in header/footer) */
export function Logo({
  variant = "default",
  className,
  showTagline = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col items-start gap-0.5", className)}
      aria-label="TechSolutionHub home"
    >
      <span className="flex items-center gap-2.5">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
          aria-hidden
        >
          <defs>
            <linearGradient id="tsh-grad" x1="0" y1="40" x2="40" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="10" fill="url(#tsh-grad)" />
          <path
            d="M12 11h16v5H22v13h-4V16H12V11z"
            fill="white"
            fillOpacity="0.95"
          />
        </svg>
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "text-lg font-bold tracking-tight md:text-xl",
              isLight ? "text-white" : "text-dark"
            )}
          >
            <span className={isLight ? "text-white" : "text-dark"}>Tech</span>
            <span className="text-primary">Solution</span>
            <span className={isLight ? "text-white" : "text-dark"}>Hub</span>
          </span>
          {showTagline && (
            <span
              className={cn(
                "mt-1 text-[9px] font-medium tracking-[0.18em] uppercase md:text-[10px]",
                isLight ? "text-white/60" : "text-muted-foreground"
              )}
            >
              Innovate • Automate • Scale
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}
