"use client";

import { cn } from "@/lib/cn";
import type { Dir } from "@/lib/types";

const KEYS: { dir: Dir; glyph: string; label: string; cell: string }[] = [
  { dir: "n", glyph: "↑", label: "Slide north", cell: "col-start-2 row-start-1" },
  { dir: "w", glyph: "←", label: "Slide west", cell: "col-start-1 row-start-2" },
  { dir: "e", glyph: "→", label: "Slide east", cell: "col-start-3 row-start-2" },
  { dir: "s", glyph: "↓", label: "Slide south", cell: "col-start-2 row-start-3" },
];

export function SlidePad({
  legal,
  disabled,
  dimmed,
  onSlide,
}: {
  legal: Dir[];
  disabled?: boolean;
  dimmed?: boolean;
  onSlide: (dir: Dir) => void;
}) {
  return (
    <div
      className={cn("dpad-band mx-auto grid w-fit grid-cols-3 grid-rows-3", dimmed && "dpad-dim")}
      aria-label="Slide directions"
    >
      {KEYS.map((key) => {
        const open = legal.includes(key.dir);
        return (
          <button
            key={key.dir}
            type="button"
            disabled={disabled || !open}
            onClick={() => onSlide(key.dir)}
            className={cn("dpad-key", key.cell)}
            aria-label={key.label}
          >
            <span className="dpad-glyph">{key.glyph}</span>
          </button>
        );
      })}
    </div>
  );
}
