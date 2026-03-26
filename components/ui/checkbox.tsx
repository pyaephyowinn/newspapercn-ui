"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"

function Checkbox({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  variant?: "default" | "ballot"
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative flex shrink-0 items-center justify-center border transition-colors outline-none group-has-disabled/field:opacity-50 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        variant === "default" && "size-4 rounded-[4px] border-input after:absolute after:-inset-x-3 after:-inset-y-2 dark:bg-input/30",
        variant === "ballot" && "size-5 rounded-none border-2 border-foreground/60 bg-transparent data-checked:bg-transparent data-checked:border-foreground data-checked:text-foreground dark:data-checked:bg-transparent dark:data-checked:text-foreground",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "grid place-content-center text-current transition-none",
          variant === "default" && "[&>svg]:size-3.5",
          variant === "ballot" && "font-serif text-sm font-black"
        )}
      >
        {variant === "ballot" ? (
          <span>✓</span>
        ) : (
          <CheckIcon />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
