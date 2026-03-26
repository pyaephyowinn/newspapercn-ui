import { cn } from "@/lib/utils"

function Skeleton({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "default" | "newsprint"
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        variant === "default" && "animate-pulse rounded-md bg-muted",
        variant === "newsprint" && "rounded-none bg-[repeating-linear-gradient(transparent,transparent_0.6rem,oklch(0.40_0.02_60_/_0.12)_0.6rem,oklch(0.40_0.02_60_/_0.12)_0.7rem)] animate-pulse",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
