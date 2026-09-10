"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "ink" | "paper" | "tan" | "ghost";

const VARIANTS: Record<Variant, string> = {
  ink: "bg-ink text-paper shadow-[0_3px_0_#111] active:translate-y-[2px] active:shadow-none",
  paper:
    "bg-white text-ink border-2 border-ink shadow-[0_3px_0_#1A1814] active:translate-y-[2px] active:shadow-none",
  tan: "bg-tan text-ink shadow-[0_3px_0_#8C734C] active:translate-y-[2px] active:shadow-none",
  ghost: "bg-transparent text-ink/70 hover:text-ink",
};

export function Button({
  variant = "ink",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-display text-base tracking-wide transition-transform disabled:pointer-events-none disabled:opacity-40",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
