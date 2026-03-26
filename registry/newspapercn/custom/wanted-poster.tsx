import * as React from "react";
import { cn } from "@/lib/utils";

interface WantedPosterProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string | React.ReactNode;
  bounty?: string | number;
  epithet?: string;
  status?: "dead-or-alive" | "only-alive" | "captured";
  variant?: "standard" | "revised" | "torn";
  size?: "sm" | "md" | "lg";
}

function formatBounty(bounty: string | number): string {
  if (typeof bounty === "string") return bounty;
  return bounty.toLocaleString("en-US");
}

const statusLabels = {
  "dead-or-alive": "DEAD OR ALIVE",
  "only-alive": "ONLY ALIVE",
  captured: "CAPTURED",
} as const;

const WantedPoster = React.forwardRef<HTMLDivElement, WantedPosterProps>(
  (
    {
      className,
      name,
      image,
      bounty,
      epithet,
      status = "dead-or-alive",
      variant = "standard",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-[oklch(0.88_0.04_70)] text-[oklch(0.20_0.03_50)] border-[3px] border-[oklch(0.35_0.03_55)] shadow-lg",
          "flex flex-col items-center font-serif",
          // Distressed edge effect
          variant === "torn" &&
            "[clip-path:polygon(2%_0%,98%_1%,100%_3%,99%_97%,97%_100%,3%_99%,0%_97%,1%_2%)]",
          variant === "revised" && "border-double border-[5px]",
          // Size variants
          size === "sm" && "w-56 p-3",
          size === "md" && "w-72 p-5",
          size === "lg" && "w-96 p-7",
          className
        )}
        {...props}
      >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.65%22%20numOctaves%3D%223%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')]" />

        {/* WANTED header */}
        <h2
          className={cn(
            "font-black tracking-[0.2em] uppercase relative",
            size === "sm" && "text-2xl",
            size === "md" && "text-3xl",
            size === "lg" && "text-4xl"
          )}
        >
          WANTED
        </h2>

        {/* Thin rule */}
        <div className="w-full border-t border-[oklch(0.35_0.03_55)] my-2" />

        {/* Image area */}
        <div
          className={cn(
            "relative bg-[oklch(0.82_0.03_65)] border-2 border-[oklch(0.40_0.03_55)] overflow-hidden",
            size === "sm" && "w-40 h-40",
            size === "md" && "w-52 h-52",
            size === "lg" && "w-72 h-72"
          )}
        >
          {typeof image === "string" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {image}
            </div>
          )}
        </div>

        {/* Status line */}
        <p
          className={cn(
            "font-bold tracking-[0.15em] uppercase mt-2 relative",
            size === "sm" && "text-[10px]",
            size === "md" && "text-xs",
            size === "lg" && "text-sm",
            status === "captured" && "text-[oklch(0.50_0.20_28)]"
          )}
        >
          {statusLabels[status]}
        </p>

        {/* Name */}
        <h3
          className={cn(
            "font-black tracking-wider uppercase text-center relative mt-1",
            size === "sm" && "text-lg",
            size === "md" && "text-xl",
            size === "lg" && "text-2xl"
          )}
        >
          {epithet && (
            <span className="block text-xs font-normal tracking-widest mb-0.5 opacity-70">
              &ldquo;{epithet}&rdquo;
            </span>
          )}
          {name}
        </h3>

        {/* Bounty */}
        {bounty !== undefined && (
          <>
            <div className="w-full border-t border-[oklch(0.35_0.03_55)] my-2" />
            <p
              className={cn(
                "font-black tracking-wide relative",
                size === "sm" && "text-lg",
                size === "md" && "text-2xl",
                size === "lg" && "text-3xl"
              )}
            >
              <span className="mr-1">฿</span>
              {formatBounty(bounty)}
            </p>
          </>
        )}
      </div>
    );
  }
);

WantedPoster.displayName = "WantedPoster";

export { WantedPoster, type WantedPosterProps };
