"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DenDenMushiMessage {
  content: string;
  sender: string;
  timestamp?: string;
  direction: "incoming" | "outgoing";
}

interface DenDenMushiProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: DenDenMushiMessage[];
  variant?: "chat" | "single" | "calling";
  callerName?: string;
}

function SnailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Shell */}
      <ellipse cx="18" cy="14" rx="8" ry="7" fill="currentColor" opacity="0.8" />
      <ellipse cx="18" cy="14" rx="5.5" ry="4.5" fill="currentColor" opacity="0.5" />
      <ellipse cx="18" cy="14" rx="3" ry="2.5" fill="currentColor" opacity="0.3" />
      {/* Body */}
      <ellipse cx="14" cy="22" rx="10" ry="4" fill="currentColor" opacity="0.6" />
      {/* Head */}
      <circle cx="6" cy="18" r="4" fill="currentColor" opacity="0.7" />
      {/* Eyes (stalks) */}
      <line x1="4" y1="14" x2="3" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="14" x2="9" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="3" cy="9.5" r="1.5" fill="currentColor" />
      <circle cx="9" cy="9.5" r="1.5" fill="currentColor" />
    </svg>
  );
}

const DenDenMushi = React.forwardRef<HTMLDivElement, DenDenMushiProps>(
  (
    { className, messages, variant = "chat", callerName, ...props },
    ref
  ) => {
    if (variant === "calling") {
      return (
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-6 text-center",
            className
          )}
          {...props}
        >
          <div className="animate-bounce">
            <SnailIcon className="h-16 w-16 text-primary" />
          </div>
          <p className="font-serif text-sm italic text-muted-foreground animate-pulse tracking-widest">
            purupurupuru...
          </p>
          {callerName && (
            <p className="font-serif font-bold text-foreground">
              {callerName} is calling
            </p>
          )}
          <div className="flex gap-2 mt-2">
            <button className="rounded-sm bg-primary px-4 py-1.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors">
              Gacha!
            </button>
            <button className="rounded-sm bg-destructive/10 px-4 py-1.5 text-sm font-bold text-destructive hover:bg-destructive/20 transition-colors">
              Ignore
            </button>
          </div>
        </div>
      );
    }

    if (variant === "single" && messages.length > 0) {
      const msg = messages[0];
      return (
        <div
          ref={ref}
          className={cn(
            "flex items-start gap-3 rounded-sm border border-border bg-card p-4",
            className
          )}
          {...props}
        >
          <SnailIcon className="h-8 w-8 shrink-0 text-primary mt-0.5" />
          <div>
            <p className="font-serif text-sm font-bold">{msg.sender}</p>
            <p className="text-sm text-foreground mt-1">{msg.content}</p>
            {msg.timestamp && (
              <p className="text-xs text-muted-foreground mt-1 font-sans">
                {msg.timestamp}
              </p>
            )}
          </div>
        </div>
      );
    }

    // Chat variant
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3 rounded-sm border border-border bg-card p-4",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <SnailIcon className="h-6 w-6 text-primary" />
          <span className="font-serif text-sm font-bold">Den Den Mushi</span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col max-w-[75%]",
                msg.direction === "outgoing" ? "self-end items-end" : "self-start items-start"
              )}
            >
              <span className="text-[10px] font-sans text-muted-foreground mb-0.5">
                {msg.sender}
              </span>
              <div
                className={cn(
                  "rounded-sm px-3 py-1.5 text-sm",
                  msg.direction === "outgoing"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {msg.content}
              </div>
              {msg.timestamp && (
                <span className="text-[9px] font-sans text-muted-foreground mt-0.5">
                  {msg.timestamp}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

DenDenMushi.displayName = "DenDenMushi";

export { DenDenMushi, SnailIcon, type DenDenMushiProps, type DenDenMushiMessage };
