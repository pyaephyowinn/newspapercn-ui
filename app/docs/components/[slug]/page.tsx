import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "@/components/table-of-contents";
import { ComponentPreview } from "@/components/component-preview";
import { componentDocs, getComponentBySlug } from "@/lib/component-docs";
import { getComponentDemo } from "@/lib/component-demos";

export function generateStaticParams() {
  return componentDocs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata() {
  return {
    title: `newspapercn-ui`,
  };
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  const categoryLabel = {
    custom: "Custom Component",
    "base-variant": "Base with Variants",
    "base-themed": "Base Themed",
  }[component.category];

  const demo = getComponentDemo(slug);

  // Build TOC sections from available content
  const tocSections = [
    ...(demo ? [{ id: "preview", label: "Preview" }] : []),
    ...(component.installCommand
      ? [{ id: "installation", label: "Installation" }]
      : []),
    ...(component.variants && component.variants.length > 0
      ? [{ id: "variants", label: "Variants" }]
      : []),
    ...(component.props && component.props.length > 0
      ? [{ id: "props", label: "Props" }]
      : []),
  ];

  return (
    <div className="flex gap-0">
      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-8">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="section">{categoryLabel}</Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">{component.name}</h1>
          <p className="text-muted-foreground">{component.description}</p>
        </div>

        {/* Preview */}
        {demo && (
          <>
            <Separator />
            <section className="space-y-3">
              <h2 id="preview" className="text-2xl font-bold scroll-mt-20">
                Preview
              </h2>
              <ComponentPreview demo={demo.demo} code={demo.code} />
            </section>
          </>
        )}

        {/* Install command */}
        {component.installCommand && (
          <>
            <Separator />
            <section className="space-y-3">
              <h2 id="installation" className="text-2xl font-bold scroll-mt-20">
                Installation
              </h2>
              <div className="rounded-sm border border-border bg-card px-4 py-2.5 font-mono text-sm overflow-x-auto">
                {component.installCommand}
              </div>
            </section>
          </>
        )}

        {/* Variants */}
        {component.variants && component.variants.length > 0 && (
          <>
            <Separator />
            <section className="space-y-3">
              <h2 id="variants" className="text-2xl font-bold scroll-mt-20">
                Variants
              </h2>
              <div className="space-y-2">
                {component.variants.map((v) => (
                  <div
                    key={v.name}
                    className="flex items-start gap-3 rounded-sm border border-border p-3"
                  >
                    <code className="shrink-0 rounded-sm bg-muted px-2 py-0.5 font-mono text-xs">
                      {v.name}
                    </code>
                    <p className="text-sm text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Props */}
        {component.props && component.props.length > 0 && (
          <>
            <Separator />
            <section className="space-y-3">
              <h2 id="props" className="text-2xl font-bold scroll-mt-20">
                Props
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="py-2 pr-4 text-left font-serif font-bold text-xs uppercase tracking-wider">
                        Prop
                      </th>
                      <th className="py-2 pr-4 text-left font-serif font-bold text-xs uppercase tracking-wider">
                        Type
                      </th>
                      <th className="py-2 pr-4 text-left font-serif font-bold text-xs uppercase tracking-wider">
                        Default
                      </th>
                      <th className="py-2 text-left font-serif font-bold text-xs uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop) => (
                      <tr
                        key={prop.name}
                        className="border-b border-border/50"
                      >
                        <td className="py-2 pr-4">
                          <code className="font-mono text-xs font-bold">
                            {prop.name}
                          </code>
                        </td>
                        <td className="py-2 pr-4">
                          <code className="font-mono text-xs text-muted-foreground">
                            {prop.type}
                          </code>
                        </td>
                        <td className="py-2 pr-4">
                          {prop.default ? (
                            <code className="font-mono text-xs">
                              {prop.default}
                            </code>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              —
                            </span>
                          )}
                        </td>
                        <td className="py-2 text-xs text-muted-foreground">
                          {prop.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Right-side TOC */}
      <TableOfContents sections={tocSections} />
    </div>
  );
}
