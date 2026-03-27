import * as React from "react";
import { cn } from "@/lib/utils";

interface NewsCooBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  maxCount?: number;
  variant?: "dot" | "count" | "icon" | "new";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  animate?: boolean;
  showZero?: boolean;
}

const positionStyles = {
  "top-right": "-top-1 -right-1",
  "top-left": "-top-1 -left-1",
  "bottom-right": "-bottom-1 -right-1",
  "bottom-left": "-bottom-1 -left-1",
} as const;

/* Simple News Coo bird silhouette as inline SVG */
function NewsCooIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified seagull/bird carrying newspaper */}
      <path d="M12 3C10.5 3 9 4 8.5 5.5C7 5 5 5.5 4 7C3 8.5 3.5 10 4.5 11L2 14H6L7 13C8 13.5 9.5 14 11 14H13C14.5 14 16 13.5 17 13L18 14H22L19.5 11C20.5 10 21 8.5 20 7C19 5.5 17 5 15.5 5.5C15 4 13.5 3 12 3Z" />
      {/* Newspaper in talons */}
      <rect x="8" y="15" width="8" height="5" rx="0.5" />
      <line
        x1="9.5"
        y1="17"
        x2="14.5"
        y2="17"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <line
        x1="9.5"
        y1="18.5"
        x2="14.5"
        y2="18.5"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}

const NewsCooBadge = React.forwardRef<HTMLDivElement, NewsCooBadgeProps>(
  (
    {
      className,
      count,
      maxCount = 99,
      variant = "count",
      position = "top-right",
      animate = false,
      showZero = false,
      children,
      ...props
    },
    ref
  ) => {
    const shouldShow =
      variant === "dot" ||
      variant === "icon" ||
      variant === "new" ||
      showZero ||
      (count !== undefined && count > 0);

    const displayCount =
      count !== undefined && count > maxCount ? `${maxCount}+` : count;

    return (
      <div ref={ref} className={cn("relative inline-flex max-w-full", className)} {...props}>
        {children}
        {shouldShow && (
          <span
            className={cn(
              "absolute z-10 flex items-center justify-center font-sans font-bold",
              positionStyles[position],
              animate && "animate-pulse",
              // Variant styles
              variant === "dot" &&
                "h-2.5 w-2.5 rounded-full bg-accent",
              variant === "count" &&
                "min-w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] px-1",
              variant === "icon" &&
                "h-6 w-6 text-accent",
              variant === "new" &&
                "rounded-sm bg-accent text-accent-foreground text-[9px] font-black tracking-wider px-1 py-0.5 uppercase"
            )}
          >
            {variant === "count" && displayCount}
            {variant === "icon" && <NewsCooIcon className="h-full w-full" />}
            {variant === "new" && "NEW"}
          </span>
        )}
      </div>
    );
  }
);

NewsCooBadge.displayName = "NewsCooBadge";

export { NewsCooBadge, NewsCooIcon, type NewsCooBadgeProps };
