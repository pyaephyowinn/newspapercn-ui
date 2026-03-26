"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  variant = "default",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  variant?: "default" | "inkfill"
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden",
        variant === "default" && "rounded-full bg-muted",
        variant === "inkfill" && "rounded-none h-2 border border-border bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,oklch(0.40_0.02_60_/_0.08)_2px,oklch(0.40_0.02_60_/_0.08)_4px)]",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "size-full flex-1 transition-all",
          variant === "default" && "bg-primary",
          variant === "inkfill" && "bg-foreground"
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
