"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "ink" | "paper" | "tan" | "ghost";

const VARIANTS: Record<Variant, string> = {
  ink: "bg-ink text-paper shadow-[0_3px_0_#1A1918] active:translate-y-[2px] active:shadow-none",
  paper:
    "h-11 bg-paper text-ink border-[2.5px] border-ink bg-[url('/assets/ui/btn_primary.svg')] bg-[length:100%_100%] bg-no-repeat shadow-[0_3px_0_#2B2A28] active:translate-y-[2px] active:shadow-none",
  tan: "bg-clay text-ink shadow-[0_3px_0_#c48b80] active:translate-y-[2px] active:shadow-none",
  ghost: "bg-transparent text-ink/70 hover:text-ink",
};

export function Button({
  variant = "paper",
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-[10px] px-5 font-display text-base tracking-wide transition-transform disabled:pointer-events-none disabled:opacity-40",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
