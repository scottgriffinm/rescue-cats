"use client";

import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Field({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-full border-2 border-ink bg-white px-5 text-center font-sans text-lg text-ink outline-none placeholder:text-ink/30 focus:border-terracotta",
        className,
      )}
      {...props}
    />
  );
}
