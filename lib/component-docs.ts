export type ComponentCategory = "custom" | "base-variant" | "base-themed";

export interface ComponentDoc {
  name: string;
  slug: string;
  description: string;
  category: ComponentCategory;
  installCommand?: string;
  variants?: { name: string; description: string }[];
  props?: { name: string; type: string; default?: string; description: string }[];
}

export const componentDocs: ComponentDoc[] = [
  // ── Custom Components ──
  {
    name: "Masthead",
    slug: "masthead",
    description: "Newspaper header with title, date, volume/issue, and double-rule borders.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/masthead.json",
    props: [
      { name: "title", type: "string", description: "Publication name" },
      { name: "tagline", type: "string", description: "Subtitle/motto" },
      { name: "date", type: "Date | string", description: "Publication date" },
      { name: "issueNumber", type: "string | number", description: "Issue number" },
      { name: "volume", type: "string | number", description: "Volume number" },
      { name: "logo", type: "ReactNode", description: "Optional logo element" },
      { name: "variant", type: '"broadsheet" | "tabloid" | "compact"', default: '"broadsheet"', description: "Size variant" },
    ],
  },
  {
    name: "Wanted Poster",
    slug: "wanted-poster",
    description: "One Piece wanted poster bounty card with parchment texture and distressed edges.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/wanted-poster.json",
    props: [
      { name: "name", type: "string", description: "Character name" },
      { name: "image", type: "string | ReactNode", description: "Portrait image" },
      { name: "bounty", type: "string | number", description: "Bounty amount" },
      { name: "epithet", type: "string", description: 'Nickname (e.g. "Straw Hat")' },
      { name: "status", type: '"dead-or-alive" | "only-alive" | "captured"', default: '"dead-or-alive"', description: "Bounty status" },
      { name: "variant", type: '"standard" | "revised" | "torn"', default: '"standard"', description: "Edge style" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Poster size" },
    ],
  },
  {
    name: "Headline Banner",
    slug: "headline-banner",
    description: '"BIG NEWS!" breaking-news alert banner with severity levels and dismiss.',
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/headline-banner.json",
    props: [
      { name: "headline", type: "string", description: "Main news text" },
      { name: "prefix", type: "string", default: '"BIG NEWS!"', description: "Prefix label" },
      { name: "variant", type: '"banner" | "toast" | "ticker"', default: '"banner"', description: "Display variant" },
      { name: "severity", type: '"breaking" | "update" | "bulletin"', default: '"breaking"', description: "Color severity" },
      { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss button" },
    ],
  },
  {
    name: "Column Layout",
    slug: "column-layout",
    description: "Multi-column newspaper grid with column rules, drop caps, and justified text.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/column-layout.json",
    props: [
      { name: "columns", type: "1 | 2 | 3 | 4", default: "2", description: "Number of columns" },
      { name: "gap", type: '"sm" | "md" | "lg"', default: '"md"', description: "Column gap" },
      { name: "rule", type: 'boolean | "thin" | "thick" | "double"', default: "true", description: "Column rule style" },
      { name: "dropCap", type: "boolean", default: "false", description: "Enable drop-cap" },
      { name: "justified", type: "boolean", default: "true", description: "Justify text" },
    ],
  },
  {
    name: "News Coo Badge",
    slug: "news-coo-badge",
    description: "Notification badge with News Coo bird silhouette, supporting dot/count/icon/new variants.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/news-coo-badge.json",
    props: [
      { name: "count", type: "number", description: "Notification count" },
      { name: "maxCount", type: "number", default: "99", description: 'Max before "99+"' },
      { name: "variant", type: '"dot" | "count" | "icon" | "new"', default: '"count"', description: "Badge variant" },
      { name: "position", type: '"top-right" | "top-left" | "bottom-right" | "bottom-left"', default: '"top-right"', description: "Position" },
      { name: "animate", type: "boolean", default: "false", description: "Pulse animation" },
    ],
  },
  {
    name: "Log Pose Nav",
    slug: "log-pose-nav",
    description: "Navigation component styled like a Log Pose compass with compass and linear variants.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/log-pose-nav.json",
    props: [
      { name: "items", type: "{ label: string; href: string; active?: boolean }[]", description: "Navigation items" },
      { name: "variant", type: '"compass" | "linear"', default: '"linear"', description: "Display variant" },
    ],
  },
  {
    name: "Bounty Table",
    slug: "bounty-table",
    description: "Data table for pirate bounties with Berry currency formatting, rank medals, and status badges.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/bounty-table.json",
    props: [
      { name: "entries", type: "BountyEntry[]", description: "Array of bounty entries" },
      { name: "title", type: "string", description: "Table title" },
      { name: "showRank", type: "boolean", default: "true", description: "Show rank column" },
    ],
  },
  {
    name: "Den Den Mushi",
    slug: "den-den-mushi",
    description: "Chat/communication component styled like a Den Den Mushi snail phone.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/den-den-mushi.json",
    props: [
      { name: "messages", type: "DenDenMushiMessage[]", description: "Array of messages" },
      { name: "variant", type: '"chat" | "single" | "calling"', default: '"chat"', description: "Display variant" },
      { name: "callerName", type: "string", description: "Caller name (calling variant)" },
    ],
  },
  {
    name: "Poneglyph Code",
    slug: "poneglyph-code",
    description: "Code block styled like an ancient Poneglyph stone tablet with glow text and decipher toggle.",
    category: "custom",
    installCommand: "npx shadcn@latest add https://newspapercn-ui.vercel.app/r/poneglyph-code.json",
    props: [
      { name: "code", type: "string", description: "Code content" },
      { name: "language", type: "string", description: "Language label" },
      { name: "showLineNumbers", type: "boolean", default: "false", description: "Show line numbers" },
      { name: "copyable", type: "boolean", default: "true", description: "Show copy button" },
      { name: "translatable", type: "boolean", default: "false", description: "Show decipher toggle" },
    ],
  },

  // ── Base with Variants ──
  {
    name: "Accordion",
    slug: "accordion",
    description: "Collapsible content sections. Newspaper variant adds serif triggers and +/- toggle.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard accordion with chevron icons" },
      { name: "newspaper", description: "Serif triggers, uppercase tracking, +/− toggle" },
    ],
  },
  {
    name: "Alert",
    slug: "alert",
    description: "Alert messages for important information.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard alert" },
      { name: "destructive", description: "Error/warning alert" },
      { name: "breaking", description: "Red bg, bold serif title, slight rotation" },
      { name: "correction", description: "Amber border-left, italic description" },
    ],
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Small status indicators and labels.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Primary colored badge" },
      { name: "secondary", description: "Secondary colored badge" },
      { name: "destructive", description: "Destructive/error badge" },
      { name: "outline", description: "Bordered badge" },
      { name: "section", description: "All-caps, underlined, serif section label" },
      { name: "breaking", description: "Pulsing red breaking news badge" },
    ],
  },
  {
    name: "Button",
    slug: "button",
    description: "Clickable button element with multiple variants.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Primary navy button" },
      { name: "secondary", description: "Sepia secondary button" },
      { name: "destructive", description: "Destructive action" },
      { name: "outline", description: "Bordered button" },
      { name: "ghost", description: "No background" },
      { name: "link", description: "Underlined link style" },
      { name: "accent", description: "Bold red CTA" },
      { name: "newspaper", description: "Serif font, editorial link style" },
    ],
  },
  {
    name: "Card",
    slug: "card",
    description: "Container for grouping content.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard card with ring border" },
      { name: "article", description: "Left border accent, no ring" },
      { name: "featured", description: "Top border accent, larger padding" },
    ],
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "Toggle checkbox input.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard rounded checkbox" },
      { name: "ballot", description: "Sharp square, serif checkmark, thick border" },
    ],
  },
  {
    name: "Input",
    slug: "input",
    description: "Text input field.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Full border input" },
      { name: "editorial", description: "Bottom-border only, serif placeholder" },
    ],
  },
  {
    name: "Pagination",
    slug: "pagination",
    description: "Page navigation controls.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard pagination with chevrons" },
      { name: "editorial", description: "Serif numbers, underline active, guillemets" },
    ],
  },
  {
    name: "Progress",
    slug: "progress",
    description: "Progress indicator bar.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Rounded progress bar" },
      { name: "inkfill", description: "Striped hatched track, dark ink fill" },
    ],
  },
  {
    name: "Select",
    slug: "select",
    description: "Dropdown select input.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Standard select trigger" },
      { name: "classified", description: "Dashed border, serif font, classified-ad style" },
    ],
  },
  {
    name: "Separator",
    slug: "separator",
    description: "Visual divider between content sections.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Thin line" },
      { name: "thick", description: "2px solid line" },
      { name: "double", description: "3px double border" },
      { name: "dashed", description: "Dashed rule line" },
      { name: "ornamental", description: "Centered flourish divider" },
    ],
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "Loading placeholder.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Pulsing rounded blob" },
      { name: "newsprint", description: "Horizontal text-line pattern" },
    ],
  },
  {
    name: "Textarea",
    slug: "textarea",
    description: "Multi-line text input.",
    category: "base-variant",
    variants: [
      { name: "default", description: "Full border textarea" },
      { name: "letter", description: "Lined-paper effect, serif font" },
    ],
  },

  // ── Base Themed ──
  ...[
    { name: "Avatar", slug: "avatar", description: "User avatar with image and fallback." },
    { name: "Breadcrumb", slug: "breadcrumb", description: "Navigation breadcrumb trail." },
    { name: "Calendar", slug: "calendar", description: "Date picker calendar grid." },
    { name: "Context Menu", slug: "context-menu", description: "Right-click context menu." },
    { name: "Dialog", slug: "dialog", description: "Modal dialog overlay." },
    { name: "Dropdown Menu", slug: "dropdown-menu", description: "Dropdown menu trigger and content." },
    { name: "Hover Card", slug: "hover-card", description: "Card that appears on hover." },
    { name: "Label", slug: "label", description: "Form field label." },
    { name: "Menubar", slug: "menubar", description: "Horizontal menu bar." },
    { name: "Navigation Menu", slug: "navigation-menu", description: "Site navigation menu." },
    { name: "Popover", slug: "popover", description: "Floating popover panel." },
    { name: "Radio Group", slug: "radio-group", description: "Radio button group." },
    { name: "Scroll Area", slug: "scroll-area", description: "Custom scrollable area." },
    { name: "Sheet", slug: "sheet", description: "Side sheet/drawer panel." },
    { name: "Sidebar", slug: "sidebar-component", description: "Application sidebar navigation." },
    { name: "Sonner", slug: "sonner", description: "Toast notification system." },
    { name: "Switch", slug: "switch", description: "Toggle switch input." },
    { name: "Table", slug: "table", description: "Data table with rows and columns." },
    { name: "Tabs", slug: "tabs", description: "Tabbed content panels." },
    { name: "Tooltip", slug: "tooltip", description: "Informational tooltip on hover." },
  ].map((c) => ({ ...c, category: "base-themed" as ComponentCategory })),
];

export function getComponentBySlug(slug: string): ComponentDoc | undefined {
  return componentDocs.find((c) => c.slug === slug);
}

export function getComponentsByCategory(category: ComponentCategory): ComponentDoc[] {
  return componentDocs.filter((c) => c.category === category);
}
