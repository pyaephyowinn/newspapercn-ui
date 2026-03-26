import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface HeadlineBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string;
  prefix?: string;
  variant?: "banner" | "toast" | "ticker";
  severity?: "breaking" | "update" | "bulletin";
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const severityStyles = {
  breaking: "bg-accent text-accent-foreground",
  update: "bg-primary text-primary-foreground",
  bulletin: "bg-secondary text-secondary-foreground",
} as const;

const HeadlineBanner = React.forwardRef<HTMLDivElement, HeadlineBannerProps>(
  (
    {
      className,
      headline,
      prefix = "BIG NEWS!",
      variant = "banner",
      severity = "breaking",
      icon,
      dismissible = false,
      onDismiss,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative overflow-hidden font-serif",
          severityStyles[severity],
          variant === "banner" && "w-full px-4 py-3",
          variant === "toast" &&
            "max-w-md px-4 py-3 shadow-lg border border-border",
          variant === "ticker" &&
            "w-full px-4 py-2 text-sm overflow-hidden",
          "animate-in slide-in-from-top duration-500",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center gap-3",
            variant === "ticker" && "animate-[ticker_20s_linear_infinite]"
          )}
        >
          {/* Icon */}
          {icon && <span className="shrink-0">{icon}</span>}

          {/* Content */}
          <div className="flex items-baseline gap-2 flex-1 min-w-0">
            <span className="font-black text-lg tracking-wide uppercase shrink-0 -rotate-1">
              {prefix}
            </span>
            <span
              className={cn(
                "font-bold truncate",
                variant === "ticker" && "whitespace-nowrap"
              )}
            >
              {headline}
            </span>
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              onClick={onDismiss}
              className="shrink-0 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

HeadlineBanner.displayName = "HeadlineBanner";

export { HeadlineBanner, type HeadlineBannerProps };
