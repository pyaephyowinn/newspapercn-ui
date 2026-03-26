"use client"

import * as React from "react"
import { Separator as SeparatorPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 data-horizontal:w-full data-vertical:self-stretch",
  {
    variants: {
      variant: {
        default:
          "bg-border data-horizontal:h-px data-vertical:w-px",
        thick:
          "bg-border data-horizontal:h-0.5 data-vertical:w-0.5",
        double:
          "bg-transparent data-horizontal:h-[3px] data-horizontal:border-y data-horizontal:border-border data-vertical:w-[3px] data-vertical:border-x data-vertical:border-border",
        dashed:
          "bg-transparent data-horizontal:h-px data-horizontal:border-t data-horizontal:border-dashed data-horizontal:border-border data-vertical:w-px data-vertical:border-l data-vertical:border-dashed data-vertical:border-border",
        ornamental:
          "relative bg-transparent data-horizontal:h-px data-horizontal:bg-border data-vertical:w-px data-vertical:bg-border data-horizontal:after:content-['✦'] data-horizontal:after:absolute data-horizontal:after:left-1/2 data-horizontal:after:top-1/2 data-horizontal:after:-translate-x-1/2 data-horizontal:after:-translate-y-1/2 data-horizontal:after:bg-background data-horizontal:after:px-2 data-horizontal:after:text-xs data-horizontal:after:text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "default",
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> &
  VariantProps<typeof separatorVariants>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Separator, separatorVariants }
