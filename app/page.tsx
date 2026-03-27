import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/registry/newspapercn/custom/masthead";

export const metadata: Metadata = {
  title: "newspapercn-ui — One Piece Newspaper Component Library",
  description:
    "A shadcn/ui variant with One Piece newspaper aesthetics. 10 custom components, 13 newspaper variants, OKLCH color tokens. Install with one CLI command.",
};
import { HeadlineBanner } from "@/registry/newspapercn/custom/headline-banner";
import { LogPoseNav } from "@/registry/newspapercn/custom/log-pose-nav";
import {
  ColumnLayout,
  ColumnSpan,
} from "@/registry/newspapercn/custom/column-layout";
import { BountyTable } from "@/registry/newspapercn/custom/bounty-table";
import { WantedPoster } from "@/registry/newspapercn/custom/wanted-poster";
import { DenDenMushi } from "@/registry/newspapercn/custom/den-den-mushi";
import { PoneglyphCode } from "@/registry/newspapercn/custom/poneglyph-code";
import { NewsCooBadge } from "@/registry/newspapercn/custom/news-coo-badge";
import { ThemeToggle } from "@/registry/newspapercn/custom/theme-toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — MASTHEAD
      ═══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 pt-8">
        <Masthead
          title="newspapercn-ui"
          tagline="A One Piece Newspaper-Themed Component Library Built on shadcn/ui"
          date={new Date()}
          volume={1}
          issueNumber={1}
          variant="broadsheet"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — BREAKING NEWS BANNER
      ═══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 mt-4">
        <HeadlineBanner
          headline="10 Custom Components, 13 Newspaper Variants, OKLCH Tokens — Install with One CLI Command!"
          severity="breaking"
          variant="banner"
          prefix="EXTRA! EXTRA!"
        />
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — TABLE OF CONTENTS
      ═══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-5xl px-4 mt-8">
        <div className="flex flex-col items-center gap-3">
          <Badge variant="section">In This Issue</Badge>
          <LogPoseNav
            variant="linear"
            items={[
              { label: "Front Page", href: "#front-page", active: true },
              { label: "Bounty Board", href: "#bounty-board" },
              { label: "Rogues' Gallery", href: "#rogues-gallery" },
              { label: "Transmissions", href: "#transmissions" },
              { label: "Classifieds", href: "#classifieds" },
            ]}
          />
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — LEAD ARTICLE (FRONT PAGE)
      ═══════════════════════════════════════════════════════ */}
      <section
        id="front-page"
        className="scroll-mt-20 mx-auto max-w-5xl px-4"
      >
        <Badge variant="section" className="mb-3">
          Front Page
        </Badge>

        <ColumnLayout
          columns={2}
          dropCap
          justified
          rule="thin"
          gap="lg"
        >
          <ColumnSpan span="all">
            <h2 className="font-serif text-3xl md:text-5xl font-black tracking-tight leading-tight mb-1">
              Mysterious Library Emerges From the New World: shadcn/ui Variant
              Brings Newspaper Aesthetics to Modern Web
            </h2>
            <p className="text-sm text-muted-foreground font-sans mb-6 italic">
              By the News Coo Editorial Board
            </p>
          </ColumnSpan>

          <p>
            Reports have confirmed the arrival of a powerful new force in the
            world of frontend development. Dubbed &ldquo;newspapercn-ui,&rdquo;
            this shadcn/ui variant brings the unmistakable aesthetic of the World
            Economic Journal to any React application. Developers across the
            Grand Line have begun integrating its cream parchment backgrounds,
            serif typography, and editorial design into their projects.
          </p>

          <p>
            The library harnesses the OKLCH color space for precise color
            tokens — warm parchment in light mode, rich ink-dark browns in dark
            mode. Typography is anchored by Playfair Display for headlines, Libre
            Baskerville for body text, and Montserrat for UI elements. Sharp
            corners at 0.125rem radius complete the editorial aesthetic that sets
            it apart from every other component library on the sea.
          </p>

          <p>
            At present, the registry contains ten custom components inspired by
            the One Piece universe — from the Masthead that crowns every gazette
            to the Poneglyph Code blocks that render source code as ancient stone
            tablets. In addition, thirteen base shadcn components have been
            enhanced with newspaper-specific CVA variants, including editorial
            buttons, section badges, article cards, and ornamental separators.
          </p>

          <ColumnSpan span="all">
            <Card variant="featured" className="my-6">
              <CardContent>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                  Quick Installation
                </p>
                <div className="flex items-center gap-2 rounded-sm border border-border bg-background px-3 sm:px-4 py-2.5 font-mono text-xs sm:text-sm mb-4">
                  <span className="text-muted-foreground select-none">$</span>
                  <code className="flex-1 text-left overflow-x-auto whitespace-nowrap">
                    npx shadcn@latest add
                    https://newspapercn-ui.vercel.app/r/newspaper-theme.json
                  </code>
                </div>
                <div className="flex items-center gap-3">
                  <NewsCooBadge variant="new" animate>
                    <Button variant="accent" asChild>
                      <Link href="/docs">Get Started</Link>
                    </Button>
                  </NewsCooBadge>
                  <Button variant="newspaper" asChild>
                    <Link href="/docs/components">Browse Components</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </ColumnSpan>

          <p>
            Installation requires only a single CLI command through the shadcn
            registry. Every component — theme, masthead, wanted poster, and
            beyond — can be added individually, ensuring developers take only
            what they need. Built on Next.js 15, React 19, and Tailwind CSS v4,
            the library represents the latest in modern web standards while
            maintaining the timeless charm of print journalism.
          </p>
        </ColumnLayout>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 — BOUNTY BOARD
      ═══════════════════════════════════════════════════════ */}
      <section
        id="bounty-board"
        className="scroll-mt-20 mx-auto max-w-5xl px-4"
      >
        <Badge variant="section" className="mb-3">
          Bounty Board
        </Badge>
        <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-2">
          Official Bounties: Registry Components at a Glance
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6 italic">
          The World Government has placed the following bounties on these
          components. Install them at your own risk.
        </p>

        <Card variant="article">
          <CardContent>
            <BountyTable
              title="Component Registry — Most Wanted"
              showRank
              entries={[
                {
                  rank: 1,
                  name: "Newspaper Theme",
                  epithet: "The Foundation",
                  crew: "Core",
                  bounty: 100000000,
                  status: "new",
                },
                {
                  rank: 2,
                  name: "Masthead",
                  epithet: "The Herald",
                  crew: "Custom",
                  bounty: 90000000,
                  status: "new",
                },
                {
                  rank: 3,
                  name: "Wanted Poster",
                  epithet: "Dead or Alive",
                  crew: "Custom",
                  bounty: 85000000,
                  status: "new",
                },
                {
                  rank: 4,
                  name: "Headline Banner",
                  epithet: "Big News",
                  crew: "Custom",
                  bounty: 80000000,
                  status: "new",
                },
                {
                  rank: 5,
                  name: "Column Layout",
                  epithet: "The Broadsheet",
                  crew: "Custom",
                  bounty: 75000000,
                  status: "new",
                },
                {
                  rank: 6,
                  name: "Bounty Table",
                  epithet: "The Ledger",
                  crew: "Custom",
                  bounty: 70000000,
                  status: "new",
                },
                {
                  rank: 7,
                  name: "Den Den Mushi",
                  epithet: "The Transponder",
                  crew: "Custom",
                  bounty: 65000000,
                  status: "new",
                },
                {
                  rank: 8,
                  name: "Poneglyph Code",
                  epithet: "The Ancient Text",
                  crew: "Custom",
                  bounty: 60000000,
                  status: "new",
                },
                {
                  rank: 9,
                  name: "Log Pose Nav",
                  epithet: "The Compass",
                  crew: "Custom",
                  bounty: 55000000,
                  status: "new",
                },
                {
                  rank: 10,
                  name: "News Coo Badge",
                  epithet: "The Messenger",
                  crew: "Custom",
                  bounty: 50000000,
                  status: "new",
                },
                {
                  rank: 11,
                  name: "Theme Toggle",
                  epithet: "Day & Night",
                  crew: "Custom",
                  bounty: 45000000,
                  status: "new",
                },
              ]}
            />
          </CardContent>
        </Card>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 — ROGUES' GALLERY
      ═══════════════════════════════════════════════════════ */}
      <section
        id="rogues-gallery"
        className="scroll-mt-20 mx-auto max-w-5xl px-4"
      >
        <Badge variant="section" className="mb-3">
          Rogues&apos; Gallery
        </Badge>
        <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-2">
          Most Wanted: Featured Components
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-8 italic">
          Three specimens captured in the wild, each displaying a distinct
          variant of the Wanted Poster component.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <WantedPoster
            name="Masthead"
            epithet="The Herald"
            bounty={90000000}
            image={
              <div className="w-full h-full bg-secondary flex items-center justify-center text-5xl">
                📰
              </div>
            }
            variant="standard"
            size="sm"
          />

          <NewsCooBadge variant="new" animate>
            <WantedPoster
              name="Wanted Poster"
              epithet="Dead or Alive"
              bounty={85000000}
              image={
                <div className="w-full h-full bg-secondary flex items-center justify-center text-5xl">
                  🏴‍☠️
                </div>
              }
              variant="revised"
              size="sm"
            />
          </NewsCooBadge>

          <WantedPoster
            name="Poneglyph Code"
            epithet="The Ancient Text"
            bounty={60000000}
            image={
              <div className="w-full h-full bg-secondary flex items-center justify-center text-5xl">
                🪨
              </div>
            }
            variant="torn"
            size="sm"
          />
        </div>

        <div className="text-center mt-6">
          <Badge variant="breaking">
            All suspects considered armed with excellent DX
          </Badge>
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 — INTERCEPTED TRANSMISSIONS
      ═══════════════════════════════════════════════════════ */}
      <section
        id="transmissions"
        className="scroll-mt-20 mx-auto max-w-5xl px-4"
      >
        <Badge variant="section" className="mb-3">
          Intercepted Transmissions
        </Badge>
        <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-2">
          What Developers Are Saying
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6 italic">
          The following Den Den Mushi transmissions were intercepted by our
          correspondents in the field.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DenDenMushi
            variant="chat"
            messages={[
              {
                sender: "Captain Dev",
                content:
                  "Just installed newspapercn-ui. The Masthead component alone is worth the install.",
                direction: "incoming",
                timestamp: "14:32",
              },
              {
                sender: "Navigator",
                content:
                  "The ColumnLayout with drop caps makes my blog look like an actual newspaper!",
                direction: "outgoing",
                timestamp: "14:33",
              },
              {
                sender: "Captain Dev",
                content:
                  "And it's all just shadcn add commands. Zero extra dependencies.",
                direction: "incoming",
                timestamp: "14:35",
              },
              {
                sender: "Navigator",
                content:
                  "The dark mode parchment-to-ink transition is chef's kiss.",
                direction: "outgoing",
                timestamp: "14:36",
              },
            ]}
          />

          <DenDenMushi
            variant="single"
            messages={[
              {
                sender: "Big News Morgans",
                content:
                  "This is the biggest scoop in frontend development since CSS Grid! Every developer on the Grand Line needs this library. I've already dispatched News Coos to spread the word — cream parchment backgrounds, serif type, and editorial design for all!",
                direction: "incoming",
                timestamp: "Today",
              },
            ]}
          />
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 8 — CLASSIFIED SECTION
      ═══════════════════════════════════════════════════════ */}
      <section
        id="classifieds"
        className="scroll-mt-20 mx-auto max-w-5xl px-4"
      >
        <Badge variant="section" className="mb-3">
          Classified Section
        </Badge>
        <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight mb-2">
          Ancient Installation Texts
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6 italic">
          These sacred commands have been deciphered from the Poneglyphs. Click
          &ldquo;Decipher&rdquo; to reveal the installation instructions.
        </p>

        <div className="space-y-6">
          <NewsCooBadge variant="icon">
            <div className="w-full">
              <PoneglyphCode
                language="bash"
                translatable
                translationLabel="Decipher"
                copyable
                code={`# Step 1: Install the newspaper theme
npx shadcn@latest add https://newspapercn-ui.vercel.app/r/newspaper-theme.json

# Step 2: Add any component you need
npx shadcn@latest add https://newspapercn-ui.vercel.app/r/masthead.json
npx shadcn@latest add https://newspapercn-ui.vercel.app/r/wanted-poster.json
npx shadcn@latest add https://newspapercn-ui.vercel.app/r/bounty-table.json`}
              />
            </div>
          </NewsCooBadge>

          <PoneglyphCode
            language="tsx"
            showLineNumbers
            copyable
            code={`import { Masthead } from "@/components/newspapercn/masthead";
import { WantedPoster } from "@/components/newspapercn/wanted-poster";
import { ColumnLayout } from "@/components/newspapercn/column-layout";

export default function MyGazette() {
  return (
    <>
      <Masthead
        title="My Gazette"
        tagline="News from the New World"
        variant="broadsheet"
      />
      <ColumnLayout columns={2} dropCap justified>
        <p>Your editorial content here...</p>
      </ColumnLayout>
      <WantedPoster
        name="Monkey D. Luffy"
        bounty={3_000_000_000}
      />
    </>
  );
}`}
          />
        </div>
      </section>

      <Separator variant="ornamental" className="max-w-5xl mx-auto my-10" />

      {/* ═══════════════════════════════════════════════════════
          SECTION 9 — CALL TO ACTION
      ═══════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-3xl px-4">
        <Card variant="featured">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-3xl md:text-4xl font-black tracking-tight">
              Set Sail With newspapercn-ui
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground font-body mb-6">
              Read the full documentation or browse all components. The Grand
              Line awaits.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Button variant="accent" asChild>
                <Link href="/docs">Read the Docs</Link>
              </Button>
              <Button variant="newspaper" asChild>
                <Link href="/docs/components">Browse Components</Link>
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <ThemeToggle size="sm" />
                <span className="hidden sm:inline">Toggle the ink</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 10 — NEWSPAPER FOOTER
      ═══════════════════════════════════════════════════════ */}
      <footer className="mt-12 border-t-[3px] border-double border-foreground py-8 text-center">
        <p className="font-serif text-2xl font-black tracking-tight">
          newspapercn-ui
        </p>
        <p className="text-sm text-muted-foreground font-body mt-1">
          A shadcn/ui variant with a One Piece newspaper theme
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-sm font-sans">
          <a
            href="https://github.com/pyaephyowinn/newspapercn-ui"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">|</span>
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <span className="text-border">|</span>
          <Link
            href="/docs/components"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Components
          </Link>
        </div>
        <p className="text-xs text-muted-foreground font-sans mt-4">
          Price: Free &middot; Est. 2025
        </p>
      </footer>
    </div>
  );
}
