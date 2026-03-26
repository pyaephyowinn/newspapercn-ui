"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TocSection {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(section.id);
            }
          });
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      className="hidden xl:block w-44 shrink-0 sticky top-[3.75rem] h-[calc(100vh-3.75rem)] overflow-y-auto py-8 pl-6"
      aria-label="On this page"
    >
      {/* Editorial section header */}
      <h4 className="mb-3 font-serif text-[10px] font-bold uppercase tracking-[0.25em] text-foreground/40">
        On This Page
      </h4>

      {/* Thin vertical rule running the full height */}
      <ul className="relative space-y-px border-l border-border/50">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={cn(
                  "relative block py-1 pl-3 text-[12px] transition-all duration-200",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground/70 hover:text-muted-foreground"
                )}
              >
                {/* Active indicator — accent tick mark */}
                <span
                  className={cn(
                    "absolute -left-px top-1 bottom-1 w-[2px] transition-all duration-200",
                    isActive ? "bg-accent scale-y-100" : "bg-transparent scale-y-0"
                  )}
                />
                {section.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
