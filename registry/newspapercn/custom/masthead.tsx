import * as React from "react";
import { cn } from "@/lib/utils";

interface MastheadProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  tagline?: string;
  date?: Date | string;
  issueNumber?: string | number;
  volume?: string | number;
  logo?: React.ReactNode;
  variant?: "broadsheet" | "tabloid" | "compact";
}

function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Masthead = React.forwardRef<HTMLElement, MastheadProps>(
  (
    {
      className,
      title,
      tagline,
      date,
      issueNumber,
      volume,
      logo,
      variant = "broadsheet",
      ...props
    },
    ref
  ) => {
    const displayDate = date ? formatDate(date) : formatDate(new Date());

    return (
      <header
        ref={ref}
        className={cn(
          "w-full border-y-[3px] border-double border-foreground",
          variant === "broadsheet" && "py-6",
          variant === "tabloid" && "py-4",
          variant === "compact" && "py-2",
          className
        )}
        {...props}
      >
        {/* Top meta line */}
        <div className="flex items-center justify-between text-xs font-sans text-muted-foreground tracking-wider uppercase px-4">
          <span>{displayDate}</span>
          <span>
            {volume && `Vol. ${volume}`}
            {volume && issueNumber && " — "}
            {issueNumber && `No. ${issueNumber}`}
          </span>
        </div>

        {/* Thin rule */}
        <div className="border-t border-foreground/20 my-2 mx-4" />

        {/* Title block */}
        <div className="flex items-center justify-center gap-4 px-4">
          {logo && <div className="shrink-0">{logo}</div>}
          <div className="text-center">
            <h1
              className={cn(
                "font-serif font-black tracking-wide uppercase leading-none",
                variant === "broadsheet" && "text-3xl sm:text-5xl md:text-7xl",
                variant === "tabloid" && "text-2xl sm:text-4xl md:text-5xl",
                variant === "compact" && "text-xl sm:text-2xl md:text-3xl"
              )}
            >
              {title}
            </h1>
            {tagline && (
              <p className="font-body italic text-muted-foreground mt-1 text-sm md:text-base">
                {tagline}
              </p>
            )}
          </div>
        </div>

        {/* Bottom rule */}
        <div className="border-t border-foreground/20 mt-2 mx-4" />
      </header>
    );
  }
);

Masthead.displayName = "Masthead";

export { Masthead, type MastheadProps };
