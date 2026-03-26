import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl px-4">
      <DocsSidebar />
      <div className="flex-1 py-8 lg:pl-8 min-w-0">{children}</div>
    </div>
  );
}
