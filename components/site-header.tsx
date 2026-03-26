"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/registry/newspapercn/custom/theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* Top thin rule */}
      <div className="h-px bg-foreground/20" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Main header row */}
        <div className="flex h-14 items-center justify-between">
          {/* Logo — editorial nameplate style */}
          <Link href="/" className="group flex items-baseline gap-2">
            <span className="font-serif text-xl font-black tracking-tight leading-none">
              newspapercn
            </span>
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity">
              ui
            </span>
          </Link>

          {/* Desktop nav — editorial section tabs */}
          <nav className="hidden items-center md:flex">
            {navItems.map((item, i) => (
              <React.Fragment key={item.href}>
                {i > 0 && (
                  <span className="mx-4 text-border select-none" aria-hidden>
                    |
                  </span>
                )}
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-xs font-sans font-semibold uppercase tracking-[0.15em] transition-colors py-1",
                    pathname?.startsWith(item.href)
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle size="sm" />
            <a
              href="https://github.com/pyaephyowinn/newspapercn-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* Mobile menu button */}
            <button
              className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom double rule */}
      <div className="h-[3px] border-y border-foreground/20" />

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-b border-foreground/20 bg-background px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block py-2 text-xs font-sans font-semibold uppercase tracking-[0.15em] transition-colors",
                pathname?.startsWith(item.href)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
