@AGENTS.md

# newspapercn-ui

A shadcn/ui variant with a One Piece "World Economic Journal" newspaper theme — **Grand Line Gazette**.

## Tech Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (OKLCH color space)
- **shadcn/ui** (radix-nova style) — base components, themed via CSS variables
- **pnpm** — package manager
- **next-themes** — dark mode
- **@fontsource** — self-hosted fonts (Playfair Display, Libre Baskerville, Montserrat)

## Project Structure

```
app/                          # Next.js app (showcase site)
  layout.tsx                  # Root layout (fonts, ThemeProvider)
  page.tsx                    # Showcase page with all components
  globals.css                 # Theme CSS variables (light + dark)
components/
  ui/                         # 34 shadcn base components (installed via CLI)
  theme-provider.tsx          # next-themes wrapper
hooks/
  use-mobile.ts               # Mobile detection hook (auto-added by shadcn)
registry/
  newspapercn/
    custom/                   # Custom One Piece components + theme
      masthead.tsx
      wanted-poster.tsx
      headline-banner.tsx
      column-layout.tsx
      news-coo-badge.tsx
      theme-toggle.tsx
      log-pose-nav.tsx
      bounty-table.tsx
      den-den-mushi.tsx
      poneglyph-code.tsx
      newspaper-theme.css     # Standalone theme file (installable)
public/r/                     # Generated registry JSON (from `shadcn build`)
registry.json                 # Registry manifest (defines all installable items)
```

## Key Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm registry:build   # Generate public/r/*.json from registry.json
```

## Theme: "Grand Line Gazette"

- **Light:** Cream parchment bg, dark ink text, navy primary, sepia secondary, red accent
- **Dark:** Warm dark brown bg, cream text, lighter navy, dark sepia
- **Fonts:** Playfair Display (headings), Libre Baskerville (body), Montserrat (UI)
- **Radius:** 0.125rem (sharp editorial corners)
- Color tokens use OKLCH format in `app/globals.css`

## Registry (11 installable items)

All served from https://newspapercn-ui.vercel.app/r/

| Item | Type | Install |
|------|------|---------|
| newspaper-theme | Theme CSS | `npx shadcn@latest add .../r/newspaper-theme.json` |
| theme-toggle | Component | `npx shadcn@latest add .../r/theme-toggle.json` |
| masthead | Component | `npx shadcn@latest add .../r/masthead.json` |
| wanted-poster | Component | `npx shadcn@latest add .../r/wanted-poster.json` |
| headline-banner | Component | `npx shadcn@latest add .../r/headline-banner.json` |
| column-layout | Component | `npx shadcn@latest add .../r/column-layout.json` |
| news-coo-badge | Component | `npx shadcn@latest add .../r/news-coo-badge.json` |
| log-pose-nav | Component | `npx shadcn@latest add .../r/log-pose-nav.json` |
| bounty-table | Component | `npx shadcn@latest add .../r/bounty-table.json` |
| den-den-mushi | Component | `npx shadcn@latest add .../r/den-den-mushi.json` |
| poneglyph-code | Component | `npx shadcn@latest add .../r/poneglyph-code.json` |

## Newspaper CVA Variants

13 base shadcn components have newspaper-specific variants:

**Tier 1:**
- Button: `accent`, `newspaper`
- Badge: `section`, `breaking`
- Card: `article`, `featured`
- Alert: `breaking`, `correction`
- Separator: `thick`, `double`, `dashed`, `ornamental`
- Input: `editorial`
- Textarea: `letter`

**Tier 2:**
- Accordion: `newspaper` (serif triggers, +/− toggle)
- Select: `classified` (dashed border, serif)
- Progress: `inkfill` (striped track, dark ink)
- Skeleton: `newsprint` (text-line pattern)
- Checkbox: `ballot` (sharp square, serif ✓)
- Pagination: `editorial` (serif, underline, « »)

## Adding a New Component

1. Create the component in `registry/newspapercn/custom/`
2. Add an entry to `registry.json` (name, type, description, dependencies, files)
3. Run `pnpm registry:build` to generate `public/r/<name>.json`
4. Add it to the showcase in `app/page.tsx`
5. Commit `registry.json` + `public/r/` + component file

## Adding a Newspaper Variant to a Base Component

1. Read the component in `components/ui/`
2. Add a `variant` prop (use CVA if component already uses it, otherwise add as a prop)
3. Add the variant-specific classes using `cn()` conditionals
4. Add a side-by-side demo (default vs variant) in `app/page.tsx`

## Conventions

- All custom components use `forwardRef` with proper TypeScript interfaces
- Use `cn()` from `@/lib/utils` for className merging
- Custom components go in `registry/newspapercn/custom/`, shadcn base components in `components/ui/`
- Theme tokens defined in `app/globals.css`, standalone copy in `registry/newspapercn/custom/newspaper-theme.css`
- Keep both CSS files in sync when changing theme tokens
- `.playwright-mcp/` is gitignored — don't commit Playwright logs or screenshots

## Deployment

- **Live:** https://newspapercn-ui.vercel.app
- **Repo:** https://github.com/pyaephyowinn/newspapercn-ui
- Auto-deploys on push to `main` via Vercel + GitHub integration
