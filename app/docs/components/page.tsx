import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Browse all newspapercn-ui components — 10 custom One Piece components and 13 base components with newspaper variants.",
};
import { Separator } from "@/components/ui/separator";
import {
  getComponentsByCategory,
  type ComponentDoc,
} from "@/lib/component-docs";

function ComponentCard({ component }: { component: ComponentDoc }) {
  return (
    <Link
      href={`/docs/components/${component.slug}`}
      className="block rounded-sm border border-border p-4 transition-colors hover:bg-muted"
    >
      <h3 className="font-serif font-bold text-sm mb-1">{component.name}</h3>
      <p className="text-xs text-muted-foreground line-clamp-2">
        {component.description}
      </p>
      {component.variants && component.variants.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {component.variants.map((v) => (
            <span
              key={v.name}
              className="inline-block text-[9px] font-mono bg-muted px-1.5 py-0.5 rounded-sm text-muted-foreground"
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}

export default function ComponentsPage() {
  const custom = getComponentsByCategory("custom");
  const baseVariant = getComponentsByCategory("base-variant");
  const baseThemed = getComponentsByCategory("base-themed");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Components</h1>
        <p className="text-muted-foreground">
          {custom.length + baseVariant.length + baseThemed.length} components
          available. Custom One Piece components are installable via the shadcn
          registry.
        </p>
      </div>

      <Separator />

      {/* Custom */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Custom Components</h2>
          <Badge variant="section">{custom.length}</Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {custom.map((c) => (
            <ComponentCard key={c.slug} component={c} />
          ))}
        </div>
      </section>

      <Separator variant="ornamental" />

      {/* Base with Variants */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Base with Variants</h2>
          <Badge variant="section">{baseVariant.length}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Standard shadcn components with newspaper-specific CVA variants added.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {baseVariant.map((c) => (
            <ComponentCard key={c.slug} component={c} />
          ))}
        </div>
      </section>

      <Separator variant="ornamental" />

      {/* Base Themed */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-bold">Base Themed</h2>
          <Badge variant="section">{baseThemed.length}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Standard shadcn components styled via the newspaper theme CSS
          variables.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {baseThemed.map((c) => (
            <ComponentCard key={c.slug} component={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
