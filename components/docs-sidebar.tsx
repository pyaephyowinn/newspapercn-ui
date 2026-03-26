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
    items: [
      { label: "Introduction", href: "/docs" },
    ],
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
    <aside className="w-56 shrink-0 border-r border-border overflow-y-auto py-6 pr-4 hidden lg:block">
      <nav className="space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-xs font-sans font-bold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-sm px-2 py-1 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-muted font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export { sections };
