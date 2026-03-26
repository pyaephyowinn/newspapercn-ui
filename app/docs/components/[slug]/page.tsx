import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { componentDocs, getComponentBySlug } from "@/lib/component-docs";

export function generateStaticParams() {
  return componentDocs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 15 requires async params - but generateMetadata can work with sync access for static
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="section">{categoryLabel}</Badge>
        </div>
        <h1 className="text-4xl font-bold mb-2">{component.name}</h1>
        <p className="text-muted-foreground">{component.description}</p>
      </div>

      {/* Install command */}
      {component.installCommand && (
        <>
          <Separator />
          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Installation</h2>
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
            <h2 className="text-2xl font-bold">Variants</h2>
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
            <h2 className="text-2xl font-bold">Props</h2>
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
  );
}
