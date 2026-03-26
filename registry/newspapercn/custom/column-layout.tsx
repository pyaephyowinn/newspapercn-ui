import * as React from "react";
import { cn } from "@/lib/utils";

interface ColumnLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  rule?: boolean | "thin" | "thick" | "double";
  dropCap?: boolean;
  justified?: boolean;
  balanceColumns?: boolean;
}

interface ColumnSpanProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: "all" | "none";
}

const gapSizes = {
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
} as const;

const ruleStyles = {
  thin: "1px solid oklch(0.40 0.02 60)",
  thick: "2px solid oklch(0.40 0.02 60)",
  double: "3px double oklch(0.40 0.02 60)",
} as const;

const ColumnLayout = React.forwardRef<HTMLDivElement, ColumnLayoutProps>(
  (
    {
      className,
      columns = 2,
      gap = "md",
      rule = true,
      dropCap = false,
      justified = true,
      balanceColumns = true,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const ruleValue =
      rule === true
        ? ruleStyles.thin
        : rule === false
          ? "none"
          : ruleStyles[rule];

    return (
      <div
        ref={ref}
        className={cn(
          "font-body leading-relaxed",
          justified && "text-justify [hyphens:auto]",
          dropCap &&
            "[&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-serif [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-2 [&>p:first-of-type]:first-letter:leading-none [&>p:first-of-type]:first-letter:mt-1",
          className
        )}
        style={{
          columnCount: columns,
          columnGap: gapSizes[gap],
          columnRule: ruleValue,
          columnFill: balanceColumns ? "balance" : "auto",
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ColumnLayout.displayName = "ColumnLayout";

const ColumnSpan = React.forwardRef<HTMLDivElement, ColumnSpanProps>(
  ({ className, span = "all", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(className)}
        style={{
          columnSpan: span,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ColumnSpan.displayName = "ColumnSpan";

export { ColumnLayout, ColumnSpan, type ColumnLayoutProps, type ColumnSpanProps };
