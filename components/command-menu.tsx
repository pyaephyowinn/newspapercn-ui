"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { sections } from "@/components/docs-sidebar";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback(
    (command: () => void) => {
      setOpen(false);
      command();
    },
    []
  );

  return (
    <>
      {/* Desktop trigger */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex h-8 items-center gap-2 rounded-sm border border-border bg-background px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="font-sans text-xs">Search...</span>
        <kbd className="pointer-events-none ml-2 inline-flex h-5 items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-8 w-8 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
      </button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search Components"
        description="Search for components and documentation pages."
      >
        <Command>
          <CommandInput placeholder="Search components..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {sections.map((section) => (
              <CommandGroup key={section.title} heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={item.label}
                    onSelect={() => runCommand(() => router.push(item.href))}
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
