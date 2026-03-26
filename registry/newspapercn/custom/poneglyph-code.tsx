"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Copy, Check, Eye, EyeOff } from "lucide-react";

interface PoneglyphCodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  copyable?: boolean;
  translatable?: boolean;
  translationLabel?: string;
}

const PoneglyphCode = React.forwardRef<HTMLDivElement, PoneglyphCodeProps>(
  (
    {
      className,
      code,
      language,
      showLineNumbers = false,
      copyable = true,
      translatable = false,
      translationLabel = "Decipher",
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const [revealed, setRevealed] = React.useState(!translatable);

    const lines = code.split("\n");

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-sm",
          // Stone tablet appearance
          "bg-[oklch(0.22_0.02_250)] text-[oklch(0.75_0.04_200)]",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]",
          "border border-[oklch(0.30_0.02_250)]",
          className
        )}
        {...props}
      >
        {/* Stone grain texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.8%22%20numOctaves%3D%224%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')]" />

        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-[oklch(0.30_0.02_250)] px-4 py-1.5">
          <div className="flex items-center gap-2">
            {language && (
              <span className="text-[10px] font-mono uppercase tracking-wider text-[oklch(0.55_0.03_200)]">
                {language}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {translatable && (
              <button
                onClick={() => setRevealed(!revealed)}
                className="inline-flex items-center gap-1 rounded-sm px-2 py-0.5 text-[10px] font-mono text-[oklch(0.60_0.04_200)] hover:text-[oklch(0.80_0.04_200)] transition-colors"
                title={revealed ? "Conceal" : translationLabel}
              >
                {revealed ? (
                  <EyeOff className="h-3 w-3" />
                ) : (
                  <Eye className="h-3 w-3" />
                )}
                {revealed ? "Conceal" : translationLabel}
              </button>
            )}
            {copyable && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center rounded-sm p-1 text-[oklch(0.55_0.03_200)] hover:text-[oklch(0.80_0.04_200)] transition-colors"
                title="Copy"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Code content */}
        <div className="overflow-x-auto p-4">
          <pre
            className={cn(
              "font-mono text-sm leading-relaxed transition-all duration-500",
              !revealed && "blur-sm select-none"
            )}
          >
            <code>
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {showLineNumbers && (
                    <span className="mr-4 inline-block w-6 text-right text-[oklch(0.40_0.02_250)] select-none">
                      {i + 1}
                    </span>
                  )}
                  <span
                    className={cn(
                      // Subtle glow effect on text
                      "[text-shadow:0_0_8px_oklch(0.50_0.06_200_/_0.3)]"
                    )}
                  >
                    {line || " "}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    );
  }
);

PoneglyphCode.displayName = "PoneglyphCode";

export { PoneglyphCode, type PoneglyphCodeProps };
