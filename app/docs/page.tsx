import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/table-of-contents";

const tocSections = [
  { id: "installation", label: "Installation" },
  { id: "theme", label: "Theme" },
  { id: "explore", label: "Explore" },
];

export default function DocsPage() {
  return (
    <div className="flex gap-0">
      <div className="flex-1 min-w-0 space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Getting Started</h1>
          <p className="text-muted-foreground text-lg">
            Install the Grand Line Gazette theme and start building with
            newspaper-styled components.
          </p>
        </div>

        <Separator />

        {/* Installation */}
        <section className="space-y-4">
          <h2 id="installation" className="text-2xl font-bold scroll-mt-20">
            Installation
          </h2>
          <p className="text-sm text-muted-foreground">
            newspapercn-ui works with any existing shadcn/ui project. Install the
            theme first, then add individual components.
          </p>

          <div className="space-y-3">
            <h3 className="text-lg font-bold">1. Install the theme</h3>
            <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm overflow-x-auto">
              npx shadcn@latest add https://newspapercn-ui.vercel.app/r/newspaper-theme.json
            </div>

            <h3 className="text-lg font-bold mt-6">2. Add font imports</h3>
            <p className="text-sm text-muted-foreground">
              Add these imports to your root layout file:
            </p>
            <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-xs overflow-x-auto">
              <pre>{`import "@fontsource-variable/playfair-display";
import "@fontsource/libre-baskerville";
import "@fontsource/libre-baskerville/700.css";
import "@fontsource/libre-baskerville/400-italic.css";
import "@fontsource-variable/montserrat";`}</pre>
            </div>

            <h3 className="text-lg font-bold mt-6">3. Add components</h3>
            <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm overflow-x-auto">
              npx shadcn@latest add https://newspapercn-ui.vercel.app/r/wanted-poster.json
            </div>
          </div>
        </section>

        <Separator />

        {/* Theme */}
        <section className="space-y-4">
          <h2 id="theme" className="text-2xl font-bold scroll-mt-20">
            Theme: Grand Line Gazette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="space-y-1">
              <div className="h-12 rounded-sm bg-primary" />
              <p className="text-xs font-sans">Primary (Navy)</p>
            </div>
            <div className="space-y-1">
              <div className="h-12 rounded-sm bg-secondary" />
              <p className="text-xs font-sans">Secondary (Sepia)</p>
            </div>
            <div className="space-y-1">
              <div className="h-12 rounded-sm bg-accent" />
              <p className="text-xs font-sans">Accent (Red)</p>
            </div>
            <div className="space-y-1">
              <div className="h-12 rounded-sm bg-muted" />
              <p className="text-xs font-sans">Muted</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Fonts:</strong> Playfair Display (headings), Libre
              Baskerville (body), Montserrat (UI)
            </p>
            <p>
              <strong>Radius:</strong> 0.125rem (sharp editorial corners)
            </p>
            <p>
              <strong>Colors:</strong> OKLCH color space with warm cream, dark
              ink, navy, sepia, and red accent tokens
            </p>
          </div>
        </section>

        <Separator />

        {/* Quick links */}
        <section className="space-y-4">
          <h2 id="explore" className="text-2xl font-bold scroll-mt-20">
            Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link
              href="/docs/components"
              className="block rounded-sm border border-border p-4 transition-colors hover:bg-muted"
            >
              <h3 className="font-serif font-bold mb-1">All Components</h3>
              <p className="text-xs text-muted-foreground">
                Browse all 43 components
              </p>
            </Link>
            <Link
              href="/docs/components/wanted-poster"
              className="block rounded-sm border border-border p-4 transition-colors hover:bg-muted"
            >
              <h3 className="font-serif font-bold mb-1">Wanted Poster</h3>
              <p className="text-xs text-muted-foreground">
                One Piece bounty cards
              </p>
            </Link>
            <Link
              href="/docs/components/poneglyph-code"
              className="block rounded-sm border border-border p-4 transition-colors hover:bg-muted"
            >
              <h3 className="font-serif font-bold mb-1">Poneglyph Code</h3>
              <p className="text-xs text-muted-foreground">
                Ancient stone code blocks
              </p>
            </Link>
          </div>
        </section>
      </div>

      {/* Right-side TOC */}
      <TableOfContents sections={tocSections} />
    </div>
  );
}
