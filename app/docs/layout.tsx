import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl px-4">
      <DocsSidebar />
      {/* Column rule divider between sidebar and content */}
      <div className="hidden lg:block w-px bg-border shrink-0" />
      <div className="flex-1 py-8 lg:pl-10 min-w-0">{children}</div>
    </div>
  );
}
