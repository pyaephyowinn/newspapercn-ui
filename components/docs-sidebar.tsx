"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarSection {
  title: string;
  items: { label: string; href: string }[];
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [{ label: "Introduction", href: "/docs" }],
  },
  {
    title: "Custom Components",
    items: [
      { label: "Masthead", href: "/docs/components/masthead" },
      { label: "Wanted Poster", href: "/docs/components/wanted-poster" },
      { label: "Headline Banner", href: "/docs/components/headline-banner" },
      { label: "Column Layout", href: "/docs/components/column-layout" },
      { label: "News Coo Badge", href: "/docs/components/news-coo-badge" },
      { label: "Log Pose Nav", href: "/docs/components/log-pose-nav" },
      { label: "Bounty Table", href: "/docs/components/bounty-table" },
      { label: "Den Den Mushi", href: "/docs/components/den-den-mushi" },
      { label: "Poneglyph Code", href: "/docs/components/poneglyph-code" },
    ],
  },
  {
    title: "Base (with Variants)",
    items: [
      { label: "Accordion", href: "/docs/components/accordion" },
      { label: "Alert", href: "/docs/components/alert" },
      { label: "Badge", href: "/docs/components/badge" },
      { label: "Button", href: "/docs/components/button" },
      { label: "Card", href: "/docs/components/card" },
      { label: "Checkbox", href: "/docs/components/checkbox" },
      { label: "Input", href: "/docs/components/input" },
      { label: "Pagination", href: "/docs/components/pagination" },
      { label: "Progress", href: "/docs/components/progress" },
      { label: "Select", href: "/docs/components/select" },
      { label: "Separator", href: "/docs/components/separator" },
      { label: "Skeleton", href: "/docs/components/skeleton" },
      { label: "Textarea", href: "/docs/components/textarea" },
    ],
  },
  {
    title: "Base (Themed)",
    items: [
      { label: "Avatar", href: "/docs/components/avatar" },
      { label: "Breadcrumb", href: "/docs/components/breadcrumb" },
      { label: "Calendar", href: "/docs/components/calendar" },
      { label: "Context Menu", href: "/docs/components/context-menu" },
      { label: "Dialog", href: "/docs/components/dialog" },
      { label: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      { label: "Hover Card", href: "/docs/components/hover-card" },
      { label: "Label", href: "/docs/components/label" },
      { label: "Menubar", href: "/docs/components/menubar" },
      { label: "Navigation Menu", href: "/docs/components/navigation-menu" },
      { label: "Popover", href: "/docs/components/popover" },
      { label: "Radio Group", href: "/docs/components/radio-group" },
      { label: "Scroll Area", href: "/docs/components/scroll-area" },
      { label: "Sheet", href: "/docs/components/sheet" },
      { label: "Sidebar", href: "/docs/components/sidebar-component" },
      { label: "Sonner", href: "/docs/components/sonner" },
      { label: "Switch", href: "/docs/components/switch" },
      { label: "Table", href: "/docs/components/table" },
      { label: "Tabs", href: "/docs/components/tabs" },
      { label: "Tooltip", href: "/docs/components/tooltip" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 shrink-0 overflow-y-auto py-8 pr-6 hidden lg:block">
      <nav className="space-y-6">
        {sections.map((section, sectionIdx) => (
          <div key={section.title}>
            {/* Section divider rule — skip for first section */}
            {sectionIdx > 0 && (
              <div className="mb-4 h-px bg-border" />
            )}
            <h4 className="mb-2.5 font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">
              {section.title}
            </h4>
            <ul className="space-y-px">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative block py-1 pl-3 text-[13px] transition-colors",
                        isActive
                          ? "font-medium text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {/* Active indicator — thin left rule */}
                      <span
                        className={cn(
                          "absolute left-0 top-1 bottom-1 w-[2px] transition-colors",
                          isActive
                            ? "bg-accent"
                            : "bg-transparent group-hover:bg-border"
                        )}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export { sections };
