"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface LogPoseNavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface LogPoseNavProps extends React.HTMLAttributes<HTMLElement> {
  items: LogPoseNavItem[];
  variant?: "compass" | "linear";
}

function CompassNeedle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L14 10H10L12 2Z" fill="currentColor" />
      <path d="M12 22L10 14H14L12 22Z" fill="currentColor" opacity="0.4" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

const LogPoseNav = React.forwardRef<HTMLElement, LogPoseNavProps>(
  ({ className, items, variant = "linear", ...props }, ref) => {
    const activeIndex = items.findIndex((item) => item.active);

    if (variant === "compass") {
      const angleStep = 360 / items.length;
      const needleAngle = activeIndex >= 0 ? activeIndex * angleStep - 90 : 0;

      return (
        <nav
          ref={ref}
          className={cn("inline-flex flex-col items-center gap-4", className)}
          {...props}
        >
          {/* Compass circle */}
          <div className="relative h-48 w-48 rounded-full border-2 border-border bg-card shadow-inner">
            {/* Inner ring */}
            <div className="absolute inset-3 rounded-full border border-border/50" />

            {/* Compass needle */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out"
              style={{ transform: `rotate(${needleAngle}deg)` }}
            >
              <CompassNeedle className="h-20 w-20 text-accent" />
            </div>

            {/* Direction labels */}
            {items.map((item, i) => {
              const angle = (i * angleStep - 90) * (Math.PI / 180);
              const radius = 42;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[10px] font-serif font-bold transition-all",
                    item.active
                      ? "bg-primary text-primary-foreground scale-110 shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                  )}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  title={item.label}
                >
                  {item.label.slice(0, 2)}
                </a>
              );
            })}

            {/* Center dot */}
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground" />
          </div>

          {/* Active label */}
          {activeIndex >= 0 && (
            <p className="text-sm font-serif font-bold text-foreground animate-pulse">
              Heading to: {items[activeIndex].label}
            </p>
          )}
        </nav>
      );
    }

    // Linear variant
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center gap-1 font-serif text-sm",
          className
        )}
        {...props}
      >
        {items.map((item, i) => (
          <React.Fragment key={item.href}>
            <a
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 transition-all rounded-sm",
                item.active
                  ? "bg-primary text-primary-foreground font-bold shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.active && (
                <CompassNeedle className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 text-accent" />
              )}
              {item.label}
            </a>
            {i < items.length - 1 && (
              <span className="text-muted-foreground/40 select-none">→</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }
);

LogPoseNav.displayName = "LogPoseNav";

export { LogPoseNav, type LogPoseNavProps, type LogPoseNavItem };
