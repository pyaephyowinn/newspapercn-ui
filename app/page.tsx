import { Masthead } from "@/registry/newspapercn/custom/masthead";
import { WantedPoster } from "@/registry/newspapercn/custom/wanted-poster";
import {
  HeadlineBanner,
} from "@/registry/newspapercn/custom/headline-banner";
import { ColumnLayout } from "@/registry/newspapercn/custom/column-layout";
import { NewsCooBadge } from "@/registry/newspapercn/custom/news-coo-badge";
import { LogPoseNav } from "@/registry/newspapercn/custom/log-pose-nav";
import { BountyTable } from "@/registry/newspapercn/custom/bounty-table";
import { DenDenMushi } from "@/registry/newspapercn/custom/den-den-mushi";
import { PoneglyphCode } from "@/registry/newspapercn/custom/poneglyph-code";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/registry/newspapercn/custom/theme-toggle";
import { Bell, Newspaper, AlertTriangle, Pencil } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-3 right-3 z-50">
        <ThemeToggle />
      </div>
      {/* Breaking News Banner */}
      <HeadlineBanner
        headline="Straw Hat Luffy declared Fifth Emperor of the Sea!"
        severity="breaking"
        dismissible
      />

      {/* Masthead */}
      <Masthead
        title="Grand Line Gazette"
        tagline="All the News That's Fit to Print on the Grand Line"
        date={new Date()}
        volume={1}
        issueNumber={1}
      />

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* ── Section: Lead Story with Column Layout ── */}
        <section>
          <h2 className="text-4xl mb-1">
            Revolutionary Army Makes Bold Move Against World Government
          </h2>
          <p className="text-muted-foreground text-sm font-sans uppercase tracking-wider mb-4">
            By &ldquo;Big News&rdquo; Morgans — Exclusive Report
          </p>
          <Separator className="mb-4" />
          <ColumnLayout columns={3} gap="md" rule="thin" dropCap justified>
            <p>
              In a stunning turn of events, the Revolutionary Army, led by the
              enigmatic Monkey D. Dragon, has launched a coordinated assault on
              multiple World Government facilities across the Grand Line. Sources
              within the Marines confirm that at least four key installations
              have been compromised.
            </p>
            <p>
              The attacks, which began in the early hours of the morning, caught
              the World Government largely off guard. Vice Admiral Smoker, who
              was among the first responders, described the situation as
              &ldquo;unprecedented in scale and coordination.&rdquo;
            </p>
            <p>
              Fleet Admiral Sakazuki has ordered a full mobilization of Marine
              forces, recalling all admirals from their current assignments. The
              Warlords of the Sea system, recently abolished, has left a
              significant gap in the Government&apos;s defensive capabilities.
            </p>
            <p>
              Cipher Pol agencies have been dispatched to gather intelligence,
              while the Gorosei convene an emergency session at Mary Geoise. The
              implications for the balance of power in the world remain to be
              seen.
            </p>
          </ColumnLayout>
        </section>

        <Separator />

        {/* ── Section: Article Cards ── */}
        <section>
          <h3 className="text-2xl mb-4">Latest Headlines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="section">World</Badge>
                  <span className="text-xs text-muted-foreground font-sans">
                    2 hours ago
                  </span>
                </div>
                <CardTitle>Wano Country Opens Its Borders</CardTitle>
                <CardDescription>
                  After centuries of isolation, the Land of Samurai welcomes
                  visitors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  In a historic declaration, Shogun Momonosuke has announced that
                  Wano Country will open its borders for the first time in over
                  800 years, following the defeat of Emperor Kaido.
                </p>
              </CardContent>
            </Card>

            <Card variant="article">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="section">Economy</Badge>
                  <span className="text-xs text-muted-foreground font-sans">
                    5 hours ago
                  </span>
                </div>
                <CardTitle>Berry Markets Surge After Pirate Festival</CardTitle>
                <CardDescription>
                  Trade routes stabilize as new alliances form
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Financial markets across the Grand Line have seen significant
                  gains following the annual Pirate Festival, with the Berry
                  climbing 15% against all major currencies.
                </p>
              </CardContent>
            </Card>

            <Card variant="featured">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="breaking">Breaking</Badge>
                  <span className="text-xs text-muted-foreground font-sans">
                    Just Now
                  </span>
                </div>
                <CardTitle>Sea Kings Spotted Near Calm Belt</CardTitle>
                <CardDescription>
                  Marine HQ issues navigation advisory
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  An unprecedented gathering of Sea Kings has been observed near
                  the Calm Belt, forcing merchant ships to reroute. Marine
                  scientists are investigating the unusual migration pattern.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* ── Section: Wanted Posters ── */}
        <section>
          <h3 className="text-2xl mb-4">Most Wanted Pirates</h3>
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
              size="md"
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
              size="md"
              variant="revised"
            />
            <WantedPoster
              name="Eustass Kid"
              epithet="Captain"
              bounty={3000000000}
              image={
                <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl">
                  🦾
                </div>
              }
              size="md"
              variant="torn"
            />
          </div>
        </section>

        <Separator />

        {/* ── Section: Tabs (Newspaper Sections) ── */}
        <section>
          <Tabs defaultValue="politics">
            <TabsList>
              <TabsTrigger value="politics">Politics</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
            </TabsList>
            <TabsContent value="politics" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Reverie Delegates Demand Naval Reform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Representatives from over 50 nations attending the Reverie
                    have formally petitioned the World Government to restructure
                    Marine command, citing recent failures to protect civilian
                    populations from pirate threats.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sports" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Davy Back Fight Championship Results Announced
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    The annual Grand Line Davy Back Fight Championship concluded
                    with the Foxy Pirates defending their title for the third
                    consecutive year, despite a strong showing from newcomers.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="science" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Vegapunk&apos;s Latest Invention Promises Clean Energy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Dr. Vegapunk has unveiled a new energy source derived from
                    sea prism stone technology that could revolutionize
                    navigation and power generation across all four seas.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <Separator />

        {/* ── Section: Bounty Table ── */}
        <section>
          <h3 className="text-2xl mb-4">Updated Bounty List</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Pirate</TableHead>
                <TableHead>Crew</TableHead>
                <TableHead className="text-right">Bounty (฿)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell className="font-serif font-bold">
                  Gol D. Roger
                </TableCell>
                <TableCell>Roger Pirates</TableCell>
                <TableCell className="text-right font-bold">
                  5,564,800,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell className="font-serif font-bold">
                  Edward Newgate
                </TableCell>
                <TableCell>Whitebeard Pirates</TableCell>
                <TableCell className="text-right font-bold">
                  5,046,000,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell className="font-serif font-bold">Kaido</TableCell>
                <TableCell>Beasts Pirates</TableCell>
                <TableCell className="text-right font-bold">
                  4,611,100,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell className="font-serif font-bold">
                  Big Mom
                </TableCell>
                <TableCell>Big Mom Pirates</TableCell>
                <TableCell className="text-right font-bold">
                  4,388,000,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell className="font-serif font-bold">Shanks</TableCell>
                <TableCell>Red Hair Pirates</TableCell>
                <TableCell className="text-right font-bold">
                  4,048,900,000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <Separator />

        {/* ── Section: Alerts ── */}
        <section className="space-y-4">
          <h3 className="text-2xl mb-4">Alerts & Notices</h3>
          <Alert>
            <Newspaper className="h-4 w-4" />
            <AlertTitle>Marine Bulletin</AlertTitle>
            <AlertDescription>
              All citizens are advised to report any Straw Hat Pirate sightings
              to the nearest Marine base immediately.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Storm Warning</AlertTitle>
            <AlertDescription>
              A massive storm system is approaching the Sabaody Archipelago.
              Ships are advised to remain in port until further notice.
            </AlertDescription>
          </Alert>
          <Alert variant="breaking">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>BREAKING: Blackbeard Sighted at Marineford</AlertTitle>
            <AlertDescription>
              Multiple witnesses confirm the appearance of the Yonko at the
              ruins of the former Marine headquarters. All units on high alert.
            </AlertDescription>
          </Alert>
          <Alert variant="correction">
            <Pencil className="h-4 w-4" />
            <AlertTitle>Editor&apos;s Correction</AlertTitle>
            <AlertDescription>
              An earlier edition incorrectly stated that Captain Buggy had been
              captured. We regret the error. Buggy remains at large and is now
              a cross-guild leader.
            </AlertDescription>
          </Alert>
        </section>

        <Separator />

        {/* ── Section: Buttons & Badges ── */}
        <section className="space-y-4">
          <h3 className="text-2xl mb-4">UI Components</h3>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg mb-3 font-sans text-muted-foreground">
                Buttons
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="accent">Accent (Red)</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="newspaper">Editorial Link</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-3 font-sans text-muted-foreground">
                Badges
              </h4>
              <div className="flex flex-wrap gap-2 items-center">
                <Badge>Default</Badge>
                <Badge variant="secondary">Economy</Badge>
                <Badge variant="destructive">Urgent</Badge>
                <Badge variant="outline">Draft</Badge>
                <Badge variant="section">Politics</Badge>
                <Badge variant="section">Sports</Badge>
                <Badge variant="breaking">Breaking</Badge>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-3 font-sans text-muted-foreground">
                News Coo Badges
              </h4>
              <div className="flex flex-wrap gap-6">
                <NewsCooBadge count={5}>
                  <Button variant="outline" size="icon">
                    <Bell className="h-4 w-4" />
                  </Button>
                </NewsCooBadge>
                <NewsCooBadge variant="dot">
                  <Button variant="outline" size="icon">
                    <Newspaper className="h-4 w-4" />
                  </Button>
                </NewsCooBadge>
                <NewsCooBadge variant="new" animate>
                  <Button variant="outline" size="icon">
                    <Newspaper className="h-4 w-4" />
                  </Button>
                </NewsCooBadge>
                <NewsCooBadge variant="icon">
                  <Avatar>
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                </NewsCooBadge>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* ── Section: Separator Variants ── */}
        <section className="space-y-6">
          <h3 className="text-2xl mb-4">Separator Variants</h3>
          <div className="space-y-4">
            <div><p className="text-xs font-sans text-muted-foreground mb-2">Default</p><Separator /></div>
            <div><p className="text-xs font-sans text-muted-foreground mb-2">Thick</p><Separator variant="thick" /></div>
            <div><p className="text-xs font-sans text-muted-foreground mb-2">Double</p><Separator variant="double" /></div>
            <div><p className="text-xs font-sans text-muted-foreground mb-2">Dashed</p><Separator variant="dashed" /></div>
            <div><p className="text-xs font-sans text-muted-foreground mb-2">Ornamental</p><Separator variant="ornamental" /></div>
          </div>
        </section>

        <Separator variant="ornamental" />

        {/* ── Section: Form Elements ── */}
        <section className="space-y-4 max-w-lg">
          <h3 className="text-2xl mb-4">Letter to the Editor</h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-2">Default inputs</p>
              <div className="space-y-3">
                <Input placeholder="Your name" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Write your letter here..." rows={5} />
              </div>
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-2">Editorial inputs</p>
              <div className="space-y-3">
                <Input variant="editorial" placeholder="Your name" />
                <Input variant="editorial" placeholder="Subject" />
                <Textarea variant="letter" placeholder="Write your letter here..." rows={5} />
              </div>
            </div>
            <Button>Submit Letter</Button>
          </div>
        </section>

        <Separator />

        {/* ── Section: Banner Variants ── */}
        <section className="space-y-4">
          <h3 className="text-2xl mb-4">Headline Banners</h3>
          <HeadlineBanner
            headline="Cross Guild offers bounties on Marine officers!"
            severity="breaking"
          />
          <HeadlineBanner
            headline="New trade route opens between Water 7 and Dressrosa"
            severity="update"
            prefix="UPDATE"
          />
          <HeadlineBanner
            headline="Weather forecast: Sunny skies expected across East Blue this week"
            severity="bulletin"
            prefix="BULLETIN"
          />
        </section>

        <Separator variant="ornamental" />

        {/* ── Section: Log Pose Navigation ── */}
        <section className="space-y-6">
          <h3 className="text-2xl mb-4">Log Pose Navigation</h3>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-3">Compass variant</p>
              <LogPoseNav
                variant="compass"
                items={[
                  { label: "Alabasta", href: "#", active: false },
                  { label: "Water 7", href: "#", active: false },
                  { label: "Sabaody", href: "#", active: true },
                  { label: "Fish-Man", href: "#", active: false },
                  { label: "Dressrosa", href: "#", active: false },
                  { label: "Wano", href: "#", active: false },
                ]}
              />
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-3">Linear variant</p>
              <LogPoseNav
                variant="linear"
                items={[
                  { label: "East Blue", href: "#" },
                  { label: "Grand Line", href: "#" },
                  { label: "New World", href: "#", active: true },
                  { label: "Laugh Tale", href: "#" },
                ]}
              />
            </div>
          </div>
        </section>

        <Separator variant="ornamental" />

        {/* ── Section: Bounty Table ── */}
        <section>
          <BountyTable
            title="Grand Line Most Wanted"
            entries={[
              { name: "Monkey D. Luffy", epithet: "Straw Hat", crew: "Straw Hat Pirates", bounty: 3000000000, status: "increased" },
              { name: "Trafalgar Law", epithet: "Surgeon of Death", crew: "Heart Pirates", bounty: 3000000000, status: "new" },
              { name: "Eustass Kid", epithet: "Captain", crew: "Kid Pirates", bounty: 3000000000, status: "new" },
              { name: "Buggy", epithet: "The Genius Jester", crew: "Cross Guild", bounty: 3189000000, status: "increased" },
              { name: "Crocodile", crew: "Cross Guild", bounty: 1965000000 },
              { name: "Boa Hancock", epithet: "Pirate Empress", crew: "Kuja Pirates", bounty: 1659000000, status: "captured" },
            ]}
          />
        </section>

        <Separator variant="ornamental" />

        {/* ── Section: Den Den Mushi ── */}
        <section className="space-y-6">
          <h3 className="text-2xl mb-4">Den Den Mushi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-3">Chat variant</p>
              <DenDenMushi
                variant="chat"
                messages={[
                  { content: "Luffy! Where are you?!", sender: "Nami", direction: "incoming", timestamp: "10:32" },
                  { content: "Shishishi! I found meat!", sender: "Luffy", direction: "outgoing", timestamp: "10:33" },
                  { content: "We need to leave NOW!", sender: "Nami", direction: "incoming", timestamp: "10:33" },
                  { content: "Just five more minutes...", sender: "Luffy", direction: "outgoing", timestamp: "10:34" },
                ]}
              />
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-3">Single variant</p>
              <DenDenMushi
                variant="single"
                messages={[
                  { content: "All hands on deck! Marine fleet spotted approaching from the south!", sender: "Vice Admiral Smoker", direction: "incoming", timestamp: "Marine HQ Broadcast" },
                ]}
              />
            </div>
            <div>
              <p className="text-xs font-sans text-muted-foreground mb-3">Calling variant</p>
              <DenDenMushi
                variant="calling"
                callerName="Big News Morgans"
                messages={[]}
              />
            </div>
          </div>
        </section>

        <Separator variant="ornamental" />

        {/* ── Section: Poneglyph Code ── */}
        <section className="space-y-6">
          <h3 className="text-2xl mb-4">Poneglyph Code Block</h3>
          <div className="space-y-4">
            <PoneglyphCode
              language="typescript"
              showLineNumbers
              code={`import { WantedPoster } from "newspapercn-ui";

export function BountyCard() {
  return (
    <WantedPoster
      name="Monkey D. Luffy"
      epithet="Straw Hat"
      bounty={3_000_000_000}
      status="dead-or-alive"
    />
  );
}`}
            />
            <PoneglyphCode
              language="ancient text"
              translatable
              translationLabel="Decipher"
              code={`The weapon that lies in Alabasta...
Pluton, the ancient battleship, rests beneath the sands.
Only those who can read these words shall know its location.`}
            />
          </div>
        </section>

        <Separator variant="double" />

        {/* Footer */}
        <footer className="border-t-[3px] border-double border-foreground pt-4 pb-8 text-center">
          <p className="font-serif text-lg font-bold">
            newspapercn-ui
          </p>
          <p className="text-sm text-muted-foreground font-sans">
            A shadcn/ui variant with a One Piece newspaper theme
          </p>
        </footer>
      </div>
    </main>
  );
}
