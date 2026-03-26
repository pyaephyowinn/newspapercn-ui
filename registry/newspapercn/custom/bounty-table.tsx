import * as React from "react";
import { cn } from "@/lib/utils";

interface BountyEntry {
  rank?: number;
  name: string;
  epithet?: string;
  crew?: string;
  bounty: number;
  status?: "new" | "increased" | "unchanged" | "captured";
}

interface BountyTableProps extends React.HTMLAttributes<HTMLDivElement> {
  entries: BountyEntry[];
  title?: string;
  showRank?: boolean;
}

function formatBounty(amount: number): string {
  return amount.toLocaleString("en-US");
}

const statusBadge = {
  new: { label: "NEW", className: "bg-accent text-accent-foreground" },
  increased: {
    label: "↑ UP",
    className: "bg-primary text-primary-foreground",
  },
  unchanged: { label: "", className: "" },
  captured: {
    label: "CAPTURED",
    className: "bg-muted text-muted-foreground line-through",
  },
} as const;

const rankStyle = (rank: number): string => {
  if (rank === 1) return "text-[oklch(0.75_0.15_85)] font-black text-lg";
  if (rank === 2) return "text-[oklch(0.65_0.02_60)] font-bold";
  if (rank === 3) return "text-[oklch(0.55_0.08_50)] font-bold";
  return "text-muted-foreground";
};

const BountyTable = React.forwardRef<HTMLDivElement, BountyTableProps>(
  ({ className, entries, title, showRank = true, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {title && (
          <h3 className="mb-3 font-serif text-xl font-bold">{title}</h3>
        )}
        <div className="overflow-x-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b-2 border-foreground">
                {showRank && (
                  <th className="py-2 pr-2 text-left font-serif font-bold text-xs uppercase tracking-wider">
                    #
                  </th>
                )}
                <th className="py-2 px-2 text-left font-serif font-bold text-xs uppercase tracking-wider">
                  Pirate
                </th>
                <th className="py-2 px-2 text-left font-serif font-bold text-xs uppercase tracking-wider hidden sm:table-cell">
                  Crew
                </th>
                <th className="py-2 pl-2 text-right font-serif font-bold text-xs uppercase tracking-wider">
                  Bounty (฿)
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, i) => {
                const rank = entry.rank ?? i + 1;
                const status = entry.status ?? "unchanged";

                return (
                  <tr
                    key={`${entry.name}-${i}`}
                    className={cn(
                      "border-b border-border/50 transition-colors hover:bg-muted/30",
                      status === "captured" && "opacity-60"
                    )}
                  >
                    {showRank && (
                      <td className={cn("py-2 pr-2", rankStyle(rank))}>
                        {rank}
                      </td>
                    )}
                    <td className="py-2 px-2">
                      <div className="flex items-center gap-2">
                        <div>
                          <span className="font-serif font-bold">
                            {entry.name}
                          </span>
                          {entry.epithet && (
                            <span className="ml-1.5 text-xs text-muted-foreground italic">
                              &ldquo;{entry.epithet}&rdquo;
                            </span>
                          )}
                        </div>
                        {status !== "unchanged" && statusBadge[status].label && (
                          <span
                            className={cn(
                              "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                              statusBadge[status].className
                            )}
                          >
                            {statusBadge[status].label}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-2 px-2 text-muted-foreground hidden sm:table-cell">
                      {entry.crew ?? "—"}
                    </td>
                    <td
                      className={cn(
                        "py-2 pl-2 text-right font-mono font-bold tabular-nums",
                        status === "captured" && "line-through"
                      )}
                    >
                      ฿{formatBounty(entry.bounty)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);

BountyTable.displayName = "BountyTable";

export { BountyTable, type BountyTableProps, type BountyEntry };
