"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function SonnerDemoButton() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Breaking News!", {
          description:
            "New bounty update released by the World Economy News Paper.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
