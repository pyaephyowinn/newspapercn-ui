import Link from "next/link";
import { Masthead } from "@/registry/newspapercn/custom/masthead";
import { WantedPoster } from "@/registry/newspapercn/custom/wanted-poster";
import { PoneglyphCode } from "@/registry/newspapercn/custom/poneglyph-code";
import { HeadlineBanner } from "@/registry/newspapercn/custom/headline-banner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Newspaper, Palette, Package } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="section" className="mb-4">
            shadcn/ui variant
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-black tracking-tight mb-4">
            newspapercn-ui
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2 max-w-xl mx-auto">
            A One Piece newspaper-themed component library built on shadcn/ui.
            Cream parchment, serif typography, and editorial design.
          </p>
          <p className="text-sm text-muted-foreground font-sans mb-8">
            Grand Line Gazette Edition
          </p>

          {/* Install command */}
          <div className="mx-auto max-w-lg mb-8">
            <div className="flex items-center gap-2 rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm">
              <span className="text-muted-foreground select-none">$</span>
              <code className="flex-1 text-left overflow-x-auto">
                npx shadcn@latest add https://newspapercn-ui.vercel.app/r/newspaper-theme.json
              </code>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-4xl mx-auto" />

      {/* Features */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-sm border border-border bg-card p-6">
            <Palette className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">
              Newspaper Theme
            </h3>
            <p className="text-sm text-muted-foreground">
              OKLCH color tokens, serif fonts, sharp corners. Light and dark
              mode with warm parchment and ink aesthetics.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card p-6">
            <Newspaper className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">
              9 Custom Components
            </h3>
            <p className="text-sm text-muted-foreground">
              Masthead, WantedPoster, HeadlineBanner, ColumnLayout,
              BountyTable, DenDenMushi, PoneglyphCode, and more.
            </p>
          </div>
          <div className="rounded-sm border border-border bg-card p-6">
            <Package className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-serif text-lg font-bold mb-2">
              shadcn Registry
            </h3>
            <p className="text-sm text-muted-foreground">
              11 installable items via the shadcn CLI. Just{" "}
              <code className="text-xs font-mono bg-muted px-1 rounded-sm">
                npx shadcn add
              </code>{" "}
              and go.
            </p>
          </div>
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-4xl mx-auto" />

      {/* Showcase */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold mb-2">
              Component Showcase
            </h2>
            <p className="text-muted-foreground">
              A taste of what&apos;s inside
            </p>
          </div>

          {/* Masthead demo */}
          <Masthead
            title="Grand Line Gazette"
            tagline="All the News That's Fit to Print on the Grand Line"
            date={new Date()}
            volume={1}
            issueNumber={1}
          />

          {/* HeadlineBanner */}
          <HeadlineBanner
            headline="Straw Hat Luffy declared Fifth Emperor of the Sea!"
            severity="breaking"
          />

          {/* Wanted Posters */}
          <div className="flex flex-wrap gap-6 justify-center">
            <WantedPoster
              name="Monkey D. Luffy"
              epithet="Straw Hat"
              bounty={3000000000}
              image={
                <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl">
                  🏴‍☠️
                </div>
              }
              size="sm"
            />
            <WantedPoster
              name="Trafalgar Law"
              epithet="Surgeon of Death"
              bounty={3000000000}
              image={
                <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl">
                  ⚔️
                </div>
              }
              size="sm"
              variant="revised"
            />
          </div>

          {/* Poneglyph */}
          <PoneglyphCode
            language="typescript"
            showLineNumbers
            code={`import { WantedPoster } from "newspapercn-ui";

export function BountyCard() {
  return (
    <WantedPoster
      name="Monkey D. Luffy"
      bounty={3_000_000_000}
    />
  );
}`}
          />
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-4xl mx-auto" />

      {/* Install */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Get Started</h2>
          <div className="space-y-3 text-left">
            <p className="text-sm font-sans text-muted-foreground">
              1. Install the theme
            </p>
            <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm overflow-x-auto">
              npx shadcn@latest add https://newspapercn-ui.vercel.app/r/newspaper-theme.json
            </div>
            <p className="text-sm font-sans text-muted-foreground mt-4">
              2. Add components
            </p>
            <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm overflow-x-auto">
              npx shadcn@latest add https://newspapercn-ui.vercel.app/r/wanted-poster.json
            </div>
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-[3px] border-double border-foreground py-8 text-center">
        <p className="font-serif text-lg font-bold">newspapercn-ui</p>
        <p className="text-sm text-muted-foreground font-sans">
          A shadcn/ui variant with a One Piece newspaper theme
        </p>
        <p className="text-xs text-muted-foreground font-sans mt-2">
          <a
            href="https://github.com/pyaephyowinn/newspapercn-ui"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
