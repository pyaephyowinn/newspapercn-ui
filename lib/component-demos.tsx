import * as React from "react";

// Custom components
import { Masthead } from "@/registry/newspapercn/custom/masthead";
import { WantedPoster } from "@/registry/newspapercn/custom/wanted-poster";
import { HeadlineBanner } from "@/registry/newspapercn/custom/headline-banner";
import { ColumnLayout } from "@/registry/newspapercn/custom/column-layout";
import { NewsCooBadge } from "@/registry/newspapercn/custom/news-coo-badge";
import { LogPoseNav } from "@/registry/newspapercn/custom/log-pose-nav";
import { BountyTable } from "@/registry/newspapercn/custom/bounty-table";
import { DenDenMushi } from "@/registry/newspapercn/custom/den-den-mushi";
import { PoneglyphCode } from "@/registry/newspapercn/custom/poneglyph-code";

// Base components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SonnerDemoButton } from "@/components/sonner-demo-button";
import { AlertTriangle, Newspaper, Bell, Anchor, Map, Ship } from "lucide-react";

interface ComponentDemo {
  demo: React.ReactNode;
  code: string;
}


export const componentDemos: Record<string, ComponentDemo> = {
  // ══════════════════════════════
  // CUSTOM COMPONENTS
  // ══════════════════════════════

  masthead: {
    demo: (
      <Masthead
        title="Grand Line Gazette"
        tagline="All the News That's Fit to Print"
        date={new Date()}
        volume={1}
        issueNumber={1}
        variant="compact"
      />
    ),
    code: `<Masthead
  title="Grand Line Gazette"
  tagline="All the News That's Fit to Print"
  date={new Date()}
  volume={1}
  issueNumber={1}
  variant="compact"
/>`,
  },

  "wanted-poster": {
    demo: (
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
    ),
    code: `<WantedPoster
  name="Monkey D. Luffy"
  epithet="Straw Hat"
  bounty={3000000000}
  image={
    <div className="w-full h-full bg-secondary flex items-center justify-center text-4xl">
      🏴‍☠️
    </div>
  }
  size="sm"
/>`,
  },

  "headline-banner": {
    demo: (
      <div className="w-full space-y-2">
        <HeadlineBanner headline="Straw Hat Luffy declared Fifth Emperor!" severity="breaking" />
        <HeadlineBanner headline="New trade route opens" severity="update" prefix="UPDATE" />
        <HeadlineBanner headline="Fair skies across East Blue" severity="bulletin" prefix="BULLETIN" />
      </div>
    ),
    code: `<HeadlineBanner headline="Straw Hat Luffy declared Fifth Emperor!" severity="breaking" />
<HeadlineBanner headline="New trade route opens" severity="update" prefix="UPDATE" />
<HeadlineBanner headline="Fair skies across East Blue" severity="bulletin" prefix="BULLETIN" />`,
  },

  "column-layout": {
    demo: (
      <ColumnLayout columns={2} gap="md" rule="thin" dropCap justified>
        <p>
          In a stunning turn of events, the Revolutionary Army has launched a
          coordinated assault on multiple World Government facilities across the
          Grand Line. Sources confirm at least four key installations have been
          compromised.
        </p>
        <p>
          Fleet Admiral Sakazuki has ordered a full mobilization of Marine forces,
          recalling all admirals from their current assignments.
        </p>
      </ColumnLayout>
    ),
    code: `<ColumnLayout columns={2} gap="md" rule="thin" dropCap justified>
  <p>
    In a stunning turn of events, the Revolutionary Army has launched a
    coordinated assault on multiple World Government facilities across the
    Grand Line. Sources confirm at least four key installations have been
    compromised.
  </p>
  <p>
    Fleet Admiral Sakazuki has ordered a full mobilization of Marine forces,
    recalling all admirals from their current assignments.
  </p>
</ColumnLayout>`,
  },

  "news-coo-badge": {
    demo: (
      <div className="flex gap-6 items-center">
        <NewsCooBadge count={5}>
          <Button variant="outline" size="icon"><Bell className="h-4 w-4" /></Button>
        </NewsCooBadge>
        <NewsCooBadge variant="dot">
          <Button variant="outline" size="icon"><Newspaper className="h-4 w-4" /></Button>
        </NewsCooBadge>
        <NewsCooBadge variant="new" animate>
          <Button variant="outline" size="icon"><Newspaper className="h-4 w-4" /></Button>
        </NewsCooBadge>
        <NewsCooBadge variant="icon">
          <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
        </NewsCooBadge>
      </div>
    ),
    code: `<NewsCooBadge count={5}>
  <Button variant="outline" size="icon"><Bell className="h-4 w-4" /></Button>
</NewsCooBadge>
<NewsCooBadge variant="dot">
  <Button variant="outline" size="icon"><Newspaper className="h-4 w-4" /></Button>
</NewsCooBadge>
<NewsCooBadge variant="new" animate>
  <Button variant="outline" size="icon"><Newspaper className="h-4 w-4" /></Button>
</NewsCooBadge>
<NewsCooBadge variant="icon">
  <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
</NewsCooBadge>`,
  },

  "log-pose-nav": {
    demo: (
      <LogPoseNav
        variant="linear"
        items={[
          { label: "East Blue", href: "#" },
          { label: "Grand Line", href: "#" },
          { label: "New World", href: "#", active: true },
          { label: "Laugh Tale", href: "#" },
        ]}
      />
    ),
    code: `<LogPoseNav
  variant="linear"
  items={[
    { label: "East Blue", href: "#" },
    { label: "Grand Line", href: "#" },
    { label: "New World", href: "#", active: true },
    { label: "Laugh Tale", href: "#" },
  ]}
/>`,
  },

  "bounty-table": {
    demo: (
      <BountyTable
        entries={[
          { name: "Monkey D. Luffy", epithet: "Straw Hat", crew: "Straw Hat Pirates", bounty: 3000000000, status: "increased" },
          { name: "Trafalgar Law", epithet: "Surgeon of Death", crew: "Heart Pirates", bounty: 3000000000, status: "new" },
          { name: "Buggy", epithet: "The Genius Jester", crew: "Cross Guild", bounty: 3189000000 },
        ]}
      />
    ),
    code: `<BountyTable
  entries={[
    { name: "Monkey D. Luffy", epithet: "Straw Hat", crew: "Straw Hat Pirates", bounty: 3000000000, status: "increased" },
    { name: "Trafalgar Law", epithet: "Surgeon of Death", crew: "Heart Pirates", bounty: 3000000000, status: "new" },
    { name: "Buggy", epithet: "The Genius Jester", crew: "Cross Guild", bounty: 3189000000 },
  ]}
/>`,
  },

  "den-den-mushi": {
    demo: (
      <DenDenMushi
        variant="chat"
        messages={[
          { content: "Luffy! Where are you?!", sender: "Nami", direction: "incoming", timestamp: "10:32" },
          { content: "Shishishi! I found meat!", sender: "Luffy", direction: "outgoing", timestamp: "10:33" },
          { content: "We need to leave NOW!", sender: "Nami", direction: "incoming", timestamp: "10:33" },
        ]}
      />
    ),
    code: `<DenDenMushi
  variant="chat"
  messages={[
    { content: "Luffy! Where are you?!", sender: "Nami", direction: "incoming", timestamp: "10:32" },
    { content: "Shishishi! I found meat!", sender: "Luffy", direction: "outgoing", timestamp: "10:33" },
    { content: "We need to leave NOW!", sender: "Nami", direction: "incoming", timestamp: "10:33" },
  ]}
/>`,
  },

  "poneglyph-code": {
    demo: (
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
    ),
    code: `<PoneglyphCode
  language="typescript"
  showLineNumbers
  code={\`import { WantedPoster } from "newspapercn-ui";

export function BountyCard() {
  return (
    <WantedPoster
      name="Monkey D. Luffy"
      bounty={3_000_000_000}
    />
  );
}\`}
/>`,
  },

  // ══════════════════════════════
  // BASE WITH VARIANTS
  // ══════════════════════════════

  button: {
    demo: (
      <div className="flex flex-wrap gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="newspaper">Editorial</Button>
        <Button variant="link">Link</Button>
      </div>
    ),
    code: `<Button>Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="newspaper">Editorial</Button>
<Button variant="link">Link</Button>`,
  },

  badge: {
    demo: (
      <div className="flex flex-wrap gap-2 items-center">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="section">Politics</Badge>
        <Badge variant="breaking">Breaking</Badge>
      </div>
    ),
    code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="section">Politics</Badge>
<Badge variant="breaking">Breaking</Badge>`,
  },

  card: {
    demo: (
      <div className="grid grid-cols-3 gap-3 w-full">
        <Card>
          <CardHeader><CardTitle>Default</CardTitle><CardDescription>Standard card</CardDescription></CardHeader>
          <CardContent><p className="text-sm">Card content here.</p></CardContent>
        </Card>
        <Card variant="article">
          <CardHeader><CardTitle>Article</CardTitle><CardDescription>Left border</CardDescription></CardHeader>
          <CardContent><p className="text-sm">Article content.</p></CardContent>
        </Card>
        <Card variant="featured">
          <CardHeader><CardTitle>Featured</CardTitle><CardDescription>Top accent</CardDescription></CardHeader>
          <CardContent><p className="text-sm">Featured content.</p></CardContent>
        </Card>
      </div>
    ),
    code: `<Card>
  <CardHeader><CardTitle>Default</CardTitle><CardDescription>Standard card</CardDescription></CardHeader>
  <CardContent><p>Card content here.</p></CardContent>
</Card>
<Card variant="article">
  <CardHeader><CardTitle>Article</CardTitle><CardDescription>Left border</CardDescription></CardHeader>
  <CardContent><p>Article content.</p></CardContent>
</Card>
<Card variant="featured">
  <CardHeader><CardTitle>Featured</CardTitle><CardDescription>Top accent</CardDescription></CardHeader>
  <CardContent><p>Featured content.</p></CardContent>
</Card>`,
  },

  alert: {
    demo: (
      <div className="w-full space-y-3">
        <Alert>
          <Newspaper className="h-4 w-4" />
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>Standard alert message.</AlertDescription>
        </Alert>
        <Alert variant="breaking">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>BREAKING</AlertTitle>
          <AlertDescription>Urgent breaking news alert.</AlertDescription>
        </Alert>
        <Alert variant="correction">
          <Newspaper className="h-4 w-4" />
          <AlertTitle>Editor&apos;s Correction</AlertTitle>
          <AlertDescription>A correction to an earlier report.</AlertDescription>
        </Alert>
      </div>
    ),
    code: `<Alert>
  <Newspaper className="h-4 w-4" />
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>Standard alert message.</AlertDescription>
</Alert>
<Alert variant="breaking">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>BREAKING</AlertTitle>
  <AlertDescription>Urgent breaking news alert.</AlertDescription>
</Alert>
<Alert variant="correction">
  <Newspaper className="h-4 w-4" />
  <AlertTitle>Editor's Correction</AlertTitle>
  <AlertDescription>A correction to an earlier report.</AlertDescription>
</Alert>`,
  },

  separator: {
    demo: (
      <div className="w-full space-y-6">
        <div><p className="text-xs text-muted-foreground mb-2">Default</p><Separator /></div>
        <div><p className="text-xs text-muted-foreground mb-2">Thick</p><Separator variant="thick" /></div>
        <div><p className="text-xs text-muted-foreground mb-2">Double</p><Separator variant="double" /></div>
        <div><p className="text-xs text-muted-foreground mb-2">Dashed</p><Separator variant="dashed" /></div>
        <div><p className="text-xs text-muted-foreground mb-2">Ornamental</p><Separator variant="ornamental" /></div>
      </div>
    ),
    code: `<Separator />
<Separator variant="thick" />
<Separator variant="double" />
<Separator variant="dashed" />
<Separator variant="ornamental" />`,
  },

  input: {
    demo: (
      <div className="w-full max-w-sm space-y-4">
        <Input placeholder="Default input" />
        <Input variant="editorial" placeholder="Editorial input" />
      </div>
    ),
    code: `<Input placeholder="Default input" />
<Input variant="editorial" placeholder="Editorial input" />`,
  },

  textarea: {
    demo: (
      <div className="w-full max-w-sm space-y-4">
        <Textarea placeholder="Default textarea" rows={3} />
        <Textarea variant="letter" placeholder="Letter variant" rows={3} />
      </div>
    ),
    code: `<Textarea placeholder="Default textarea" rows={3} />
<Textarea variant="letter" placeholder="Letter variant" rows={3} />`,
  },

  checkbox: {
    demo: (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Checkbox id="demo-c1" defaultChecked />
          <Label htmlFor="demo-c1">Default checkbox</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="demo-c2" variant="ballot" defaultChecked />
          <Label htmlFor="demo-c2" className="font-serif">Ballot checkbox</Label>
        </div>
      </div>
    ),
    code: `<div className="flex items-center gap-2">
  <Checkbox id="c1" defaultChecked />
  <Label htmlFor="c1">Default checkbox</Label>
</div>
<div className="flex items-center gap-2">
  <Checkbox id="c2" variant="ballot" defaultChecked />
  <Label htmlFor="c2" className="font-serif">Ballot checkbox</Label>
</div>`,
  },

  progress: {
    demo: (
      <div className="w-full space-y-4">
        <div><p className="text-xs text-muted-foreground mb-2">Default</p><Progress value={65} /></div>
        <div><p className="text-xs text-muted-foreground mb-2">Inkfill</p><Progress variant="inkfill" value={65} /></div>
      </div>
    ),
    code: `<Progress value={65} />
<Progress variant="inkfill" value={65} />`,
  },

  skeleton: {
    demo: (
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Default</p>
          <div className="space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Newsprint</p>
          <div className="space-y-2">
            <Skeleton variant="newsprint" className="h-4 w-3/4" />
            <Skeleton variant="newsprint" className="h-4 w-full" />
            <Skeleton variant="newsprint" className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    ),
    code: `{/* Default */}
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-5/6" />

{/* Newsprint */}
<Skeleton variant="newsprint" className="h-4 w-3/4" />
<Skeleton variant="newsprint" className="h-4 w-full" />
<Skeleton variant="newsprint" className="h-4 w-5/6" />`,
  },

  accordion: {
    demo: (
      <div className="w-full grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Default</p>
          <Accordion type="single" collapsible>
            <AccordionItem value="1"><AccordionTrigger>What is the Grand Line?</AccordionTrigger><AccordionContent>The Grand Line is the ocean current running perpendicular to the Red Line.</AccordionContent></AccordionItem>
            <AccordionItem value="2"><AccordionTrigger>Who are the Yonko?</AccordionTrigger><AccordionContent>The Four Emperors ruling the New World.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Newspaper</p>
          <Accordion type="single" collapsible variant="newspaper">
            <AccordionItem value="1"><AccordionTrigger>What is the Grand Line?</AccordionTrigger><AccordionContent>The Grand Line is the ocean current running perpendicular to the Red Line.</AccordionContent></AccordionItem>
            <AccordionItem value="2"><AccordionTrigger>Who are the Yonko?</AccordionTrigger><AccordionContent>The Four Emperors ruling the New World.</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </div>
    ),
    code: `{/* Default */}
<Accordion type="single" collapsible>
  <AccordionItem value="1">
    <AccordionTrigger>What is the Grand Line?</AccordionTrigger>
    <AccordionContent>The Grand Line is the ocean current running perpendicular to the Red Line.</AccordionContent>
  </AccordionItem>
</Accordion>

{/* Newspaper */}
<Accordion type="single" collapsible variant="newspaper">
  <AccordionItem value="1">
    <AccordionTrigger>What is the Grand Line?</AccordionTrigger>
    <AccordionContent>The Grand Line is the ocean current running perpendicular to the Red Line.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  },

  select: {
    demo: (
      <div className="flex gap-6">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Default</p>
          <Select><SelectTrigger className="w-40"><SelectValue placeholder="Select sea" /></SelectTrigger><SelectContent><SelectItem value="east">East Blue</SelectItem><SelectItem value="west">West Blue</SelectItem></SelectContent></Select>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Classified</p>
          <Select><SelectTrigger variant="classified" className="w-40"><SelectValue placeholder="Select sea" /></SelectTrigger><SelectContent><SelectItem value="east">East Blue</SelectItem><SelectItem value="west">West Blue</SelectItem></SelectContent></Select>
        </div>
      </div>
    ),
    code: `{/* Default */}
<Select>
  <SelectTrigger className="w-40">
    <SelectValue placeholder="Select sea" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="east">East Blue</SelectItem>
    <SelectItem value="west">West Blue</SelectItem>
  </SelectContent>
</Select>

{/* Classified */}
<Select>
  <SelectTrigger variant="classified" className="w-40">
    <SelectValue placeholder="Select sea" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="east">East Blue</SelectItem>
    <SelectItem value="west">West Blue</SelectItem>
  </SelectContent>
</Select>`,
  },

  pagination: {
    demo: (
      <div className="w-full space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-2">Default</p>
          <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#" /></PaginationItem><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#" /></PaginationItem></PaginationContent></Pagination>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-2">Editorial</p>
          <Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#" variant="editorial" /></PaginationItem><PaginationItem><PaginationLink href="#" variant="editorial">1</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#" variant="editorial" isActive>2</PaginationLink></PaginationItem><PaginationItem><PaginationLink href="#" variant="editorial">3</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#" variant="editorial" /></PaginationItem></PaginationContent></Pagination>
        </div>
      </div>
    ),
    code: `{/* Default */}
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>

{/* Editorial */}
<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" variant="editorial" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" variant="editorial" isActive>2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" variant="editorial" /></PaginationItem>
  </PaginationContent>
</Pagination>`,
  },

  // ══════════════════════════════
  // BASE THEMED
  // ══════════════════════════════

  avatar: {
    demo: (
      <div className="flex gap-3 items-center">
        <Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>ZR</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>NM</AvatarFallback></Avatar>
      </div>
    ),
    code: `<Avatar><AvatarFallback>ML</AvatarFallback></Avatar>
<Avatar><AvatarFallback>ZR</AvatarFallback></Avatar>
<Avatar><AvatarFallback>NM</AvatarFallback></Avatar>`,
  },

  table: {
    demo: (
      <div className="w-full text-sm">
        <table className="w-full">
          <thead><tr className="border-b-2 border-foreground"><th className="py-2 pr-4 text-left font-serif font-bold text-xs uppercase">Pirate</th><th className="py-2 text-right font-serif font-bold text-xs uppercase">Bounty</th></tr></thead>
          <tbody>
            <tr className="border-b border-border/50"><td className="py-2 pr-4 font-serif font-bold">Gol D. Roger</td><td className="py-2 text-right font-mono">฿5,564,800,000</td></tr>
            <tr className="border-b border-border/50"><td className="py-2 pr-4 font-serif font-bold">Edward Newgate</td><td className="py-2 text-right font-mono">฿5,046,000,000</td></tr>
          </tbody>
        </table>
      </div>
    ),
    code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Pirate</TableHead>
      <TableHead className="text-right">Bounty</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-serif font-bold">Gol D. Roger</TableCell>
      <TableCell className="text-right font-mono">฿5,564,800,000</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-serif font-bold">Edward Newgate</TableCell>
      <TableCell className="text-right font-mono">฿5,046,000,000</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  },

  tabs: {
    demo: (
      <Tabs defaultValue="politics" className="w-full">
        <TabsList><TabsTrigger value="politics">Politics</TabsTrigger><TabsTrigger value="sports">Sports</TabsTrigger></TabsList>
        <TabsContent value="politics" className="mt-3"><p className="text-sm">Reverie delegates demand naval reform.</p></TabsContent>
        <TabsContent value="sports" className="mt-3"><p className="text-sm">Davy Back Fight championship results.</p></TabsContent>
      </Tabs>
    ),
    code: `<Tabs defaultValue="politics">
  <TabsList>
    <TabsTrigger value="politics">Politics</TabsTrigger>
    <TabsTrigger value="sports">Sports</TabsTrigger>
  </TabsList>
  <TabsContent value="politics">
    <p>Reverie delegates demand naval reform.</p>
  </TabsContent>
  <TabsContent value="sports">
    <p>Davy Back Fight championship results.</p>
  </TabsContent>
</Tabs>`,
  },

  label: {
    demo: (
      <div className="space-y-2">
        <Label htmlFor="demo-name">Your Name</Label>
        <Input id="demo-name" placeholder="Enter your name" />
      </div>
    ),
    code: `<Label htmlFor="name">Your Name</Label>
<Input id="name" placeholder="Enter your name" />`,
  },

  switch: {
    demo: (
      <div className="flex items-center gap-2">
        <Switch id="demo-switch" />
        <Label htmlFor="demo-switch">Enable notifications</Label>
      </div>
    ),
    code: `<Switch id="notify" />
<Label htmlFor="notify">Enable notifications</Label>`,
  },

  "radio-group": {
    demo: (
      <RadioGroup defaultValue="east">
        <div className="flex items-center gap-2"><RadioGroupItem value="east" id="r1" /><Label htmlFor="r1">East Blue</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="grand" id="r2" /><Label htmlFor="r2">Grand Line</Label></div>
        <div className="flex items-center gap-2"><RadioGroupItem value="new" id="r3" /><Label htmlFor="r3">New World</Label></div>
      </RadioGroup>
    ),
    code: `<RadioGroup defaultValue="east">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="east" id="r1" />
    <Label htmlFor="r1">East Blue</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="grand" id="r2" />
    <Label htmlFor="r2">Grand Line</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="new" id="r3" />
    <Label htmlFor="r3">New World</Label>
  </div>
</RadioGroup>`,
  },

  breadcrumb: {
    demo: (
      <nav className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li><a href="#" className="hover:text-foreground">Home</a></li>
          <li className="select-none">/</li>
          <li><a href="#" className="hover:text-foreground">Docs</a></li>
          <li className="select-none">/</li>
          <li className="text-foreground font-medium">Components</li>
        </ol>
      </nav>
    ),
    code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/docs">Docs</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Components</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },

  calendar: {
    demo: (
      <Calendar mode="single" />
    ),
    code: `<Calendar mode="single" selected={date} onSelect={setDate} />`,
  },

  "context-menu": {
    demo: (
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="flex h-32 w-64 items-center justify-center rounded-sm border border-dashed border-border text-sm text-muted-foreground">
            Right click here
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Read Article</ContextMenuItem>
          <ContextMenuItem>Save for Later</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
          <ContextMenuItem>Print</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    code: `<ContextMenu>
  <ContextMenuTrigger>
    <div className="flex h-32 w-64 items-center justify-center rounded-sm border border-dashed border-border text-sm text-muted-foreground">
      Right click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Read Article</ContextMenuItem>
    <ContextMenuItem>Save for Later</ContextMenuItem>
    <ContextMenuItem>Share</ContextMenuItem>
    <ContextMenuItem>Print</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  },

  dialog: {
    demo: (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Breaking News</DialogTitle>
            <DialogDescription>
              The Revolutionary Army has launched a coordinated assault on multiple
              World Government facilities across the Grand Line.
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm">Sources within the Marines confirm that at least four key installations have been compromised.</p>
        </DialogContent>
      </Dialog>
    ),
    code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Breaking News</DialogTitle>
      <DialogDescription>
        The Revolutionary Army has launched a coordinated assault on multiple
        World Government facilities across the Grand Line.
      </DialogDescription>
    </DialogHeader>
    <p>Sources within the Marines confirm that at least four key installations have been compromised.</p>
  </DialogContent>
</Dialog>`,
  },

  "dropdown-menu": {
    demo: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Sections</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>World News</DropdownMenuItem>
          <DropdownMenuItem>Politics</DropdownMenuItem>
          <DropdownMenuItem>Sports</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Opinion</DropdownMenuItem>
          <DropdownMenuItem>Classifieds</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Sections</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>World News</DropdownMenuItem>
    <DropdownMenuItem>Politics</DropdownMenuItem>
    <DropdownMenuItem>Sports</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Opinion</DropdownMenuItem>
    <DropdownMenuItem>Classifieds</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  },

  "hover-card": {
    demo: (
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="font-serif">@BigNewsMorgans</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="space-y-1">
            <h4 className="font-serif text-sm font-bold">&ldquo;Big News&rdquo; Morgans</h4>
            <p className="text-xs text-muted-foreground">President of the World Economy News Paper. Albatross Zoan user.</p>
            <p className="text-xs text-muted-foreground">Joined: 1524</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    ),
    code: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link" className="font-serif">@BigNewsMorgans</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-64">
    <div className="space-y-1">
      <h4 className="font-serif text-sm font-bold">"Big News" Morgans</h4>
      <p className="text-xs text-muted-foreground">President of the World Economy News Paper.</p>
    </div>
  </HoverCardContent>
</HoverCard>`,
  },

  menubar: {
    demo: (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Article</MenubarItem>
            <MenubarItem>Open Draft</MenubarItem>
            <MenubarItem>Save</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Print Preview</MenubarItem>
            <MenubarItem>Full Screen</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
    code: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Article</MenubarItem>
      <MenubarItem>Open Draft</MenubarItem>
      <MenubarItem>Save</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo</MenubarItem>
      <MenubarItem>Redo</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Print Preview</MenubarItem>
      <MenubarItem>Full Screen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  },

  "navigation-menu": {
    demo: (
      <nav className="flex items-center gap-4 font-sans text-sm">
        <a href="#" className="font-medium text-foreground hover:text-primary transition-colors">World</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Politics</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Sports</a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Opinion</a>
      </nav>
    ),
    code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="#">World</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#">Politics</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="#">Sports</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },

  popover: {
    demo: (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm">Subscribe</h4>
            <p className="text-xs text-muted-foreground">Get the Grand Line Gazette delivered by News Coo.</p>
            <Input placeholder="your@email.com" />
            <Button size="sm" className="w-full">Subscribe</Button>
          </div>
        </PopoverContent>
      </Popover>
    ),
    code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <div className="space-y-2">
      <h4 className="font-serif font-bold text-sm">Subscribe</h4>
      <p className="text-xs text-muted-foreground">Get the Grand Line Gazette delivered by News Coo.</p>
      <Input placeholder="your@email.com" />
      <Button size="sm" className="w-full">Subscribe</Button>
    </div>
  </PopoverContent>
</Popover>`,
  },

  "scroll-area": {
    demo: (
      <ScrollArea className="h-48 w-64 rounded-sm border border-border p-3">
        <div className="space-y-3">
          {["Gol D. Roger", "Edward Newgate", "Kaido", "Charlotte Linlin", "Shanks", "Marshall D. Teach", "Monkey D. Luffy", "Dracule Mihawk", "Buggy", "Trafalgar Law", "Eustass Kid", "Boa Hancock"].map((name) => (
            <div key={name} className="text-sm border-b border-border/50 pb-2">
              <p className="font-serif font-bold">{name}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    ),
    code: `<ScrollArea className="h-48 w-64 rounded-sm border border-border p-3">
  <div className="space-y-3">
    {pirates.map((name) => (
      <div key={name} className="text-sm border-b border-border/50 pb-2">
        <p className="font-serif font-bold">{name}</p>
      </div>
    ))}
  </div>
</ScrollArea>`,
  },

  sheet: {
    demo: (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Article Details</SheetTitle>
            <SheetDescription>Full article view for the Grand Line Gazette.</SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-3">
            <p className="text-sm">By &ldquo;Big News&rdquo; Morgans — Exclusive Report</p>
            <p className="text-sm text-muted-foreground">The Revolutionary Army has launched a coordinated assault on multiple World Government facilities.</p>
          </div>
        </SheetContent>
      </Sheet>
    ),
    code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Article Details</SheetTitle>
      <SheetDescription>Full article view for the Grand Line Gazette.</SheetDescription>
    </SheetHeader>
    <div className="py-4 space-y-3">
      <p className="text-sm">By "Big News" Morgans — Exclusive Report</p>
      <p className="text-sm text-muted-foreground">The Revolutionary Army has launched a coordinated assault...</p>
    </div>
  </SheetContent>
</Sheet>`,
  },

  "sidebar-component": {
    demo: (
      <div className="h-64 w-full overflow-hidden rounded-sm border border-border bg-card">
        <div className="flex h-full">
          <div className="w-48 shrink-0 border-r border-border bg-sidebar p-4 space-y-4">
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-muted-foreground">Sections</h4>
            <nav className="space-y-1">
              {[
                { icon: <Newspaper className="h-3.5 w-3.5" />, label: "World News", active: true },
                { icon: <Anchor className="h-3.5 w-3.5" />, label: "Politics" },
                { icon: <Ship className="h-3.5 w-3.5" />, label: "Sports" },
                { icon: <Map className="h-3.5 w-3.5" />, label: "Opinion" },
              ].map((item) => (
                <a key={item.label} href="#" className={`flex items-center gap-2 rounded-sm px-2 py-1.5 text-xs transition-colors ${item.active ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`}>
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex-1 p-4">
            <p className="text-xs text-muted-foreground">Main content area</p>
          </div>
        </div>
      </div>
    ),
    code: `<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Sections</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#"><Newspaper /> World News</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`,
  },

  sonner: {
    demo: (
      <div className="space-y-2 text-center">
        <Toaster position="bottom-center" />
        <SonnerDemoButton />
      </div>
    ),
    code: `import { toast } from "sonner";

<Button
  variant="outline"
  onClick={() => toast("Breaking News!", {
    description: "New bounty update released.",
  })}
>
  Show Toast
</Button>`,
  },

  tooltip: {
    demo: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Breaking news from the Grand Line</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Breaking news from the Grand Line</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },
};

export function getComponentDemo(slug: string): ComponentDemo | undefined {
  return componentDemos[slug];
}
