"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, size = "md", ...props }, ref) => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
      return (
        <button
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center rounded-sm border border-input bg-background text-foreground transition-colors hover:bg-muted",
            size === "sm" && "h-8 w-8",
            size === "md" && "h-9 w-9",
            size === "lg" && "h-10 w-10",
            className
          )}
          disabled
          {...props}
        />
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm border border-input bg-background text-foreground transition-colors hover:bg-muted cursor-pointer",
          size === "sm" && "h-8 w-8",
          size === "md" && "h-9 w-9",
          size === "lg" && "h-10 w-10",
          className
        )}
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        {...props}
      >
        {resolvedTheme === "dark" ? (
          <Sun
            className={cn(
              size === "sm" && "h-3.5 w-3.5",
              size === "md" && "h-4 w-4",
              size === "lg" && "h-5 w-5"
            )}
          />
        ) : (
          <Moon
            className={cn(
              size === "sm" && "h-3.5 w-3.5",
              size === "md" && "h-4 w-4",
              size === "lg" && "h-5 w-5"
            )}
          />
        )}
      </button>
    );
  }
);

ThemeToggle.displayName = "ThemeToggle";

export { ThemeToggle, type ThemeToggleProps };
