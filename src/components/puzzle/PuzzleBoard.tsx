"use client";

import { useRef } from "react";
import { PuzzleCatSprite, UiIcon } from "@/components/art/Sprite";
import { cn } from "@/lib/cn";
import { cellKey } from "@/lib/directions";
import { blockedSet, legalDirs } from "@/lib/slide";
import type { Dir, Level, PieceCat } from "@/lib/types";

const SHIFT: Record<Dir, { x: number; y: number; glyph: string; label: string }> = {
  n: { x: 0, y: -30, glyph: "↑", label: "Slide north" },
  e: { x: 30, y: 0, glyph: "→", label: "Slide east" },
  s: { x: 0, y: 30, glyph: "↓", label: "Slide south" },
  w: { x: -30, y: 0, glyph: "←", label: "Slide west" },
};

export function PuzzleBoard({
  level,
  cats,
  selected,
  showCoach,
  disabled,
  onSelect,
  onSlide,
}: {
  level: Level;
  cats: PieceCat[];
  selected: string | null;
  showCoach: boolean;
  disabled?: boolean;
  onSelect: (id: string) => void;
  onSlide: (dir: Dir) => void;
}) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const blocked = blockedSet(level);
  const gateKeys = new Set(level.gates.map((gate) => cellKey(gate.x, gate.y)));
  const legal = selected ? legalDirs(level, cats, selected) : [];

  function endSwipe(clientX: number, clientY: number) {
    if (disabled || !selected || !start.current) return;
    const dx = clientX - start.current.x;
    const dy = clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) < 24 && Math.abs(dy) < 24) return;
    const dir: Dir =
      Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "e" : "w") : dy > 0 ? "s" : "n";
    onSlide(dir);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[320px] rounded-3xl border-2 border-ink bg-paper p-2"
      onPointerDown={(event) => {
        start.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => endSwipe(event.clientX, event.clientY)}
      onPointerCancel={() => {
        start.current = null;
      }}
    >
      <div
        className="relative grid touch-none"
        style={{ gridTemplateColumns: `repeat(${level.width}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: level.height }, (_, y) =>
          Array.from({ length: level.width }, (_, x) => {
            const key = cellKey(x, y);
            const isWall = blocked.has(key);
            const isGate = gateKeys.has(key);
            return (
              <div key={key} className="aspect-square p-[3px]">
                <div
                  className={cn(
                    "relative h-full w-full rounded-xl border border-ink/15 bg-paper-deep",
                    isGate && "border-path/70 bg-path/15",
                    isWall && "border-ink bg-wood",
                  )}
                >
                  {isGate ? <GateMark /> : null}
                </div>
              </div>
            );
          }),
        )}

        {cats.map((cat) => (
          <button
            key={cat.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(cat.id)}
            className={cn(
              "absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-[left,top] duration-200 ease-out",
              selected === cat.id && "z-20",
            )}
            style={{
              left: `${((cat.x + 0.5) * 100) / level.width}%`,
              top: `${((cat.y + 0.5) * 100) / level.height}%`,
              width: `${100 / level.width}%`,
            }}
            aria-label={`Select cat`}
          >
            <PuzzleCatSprite className="h-[56px] w-[56px] drop-shadow-sm" />
          </button>
        ))}

        {selected
          ? legal.map((dir) => {
              const cat = cats.find((item) => item.id === selected);
              if (!cat) return null;
              const shift = SHIFT[dir];
              return (
                <button
                  key={dir}
                  type="button"
                  disabled={disabled}
                  onClick={() => onSlide(dir)}
                  className="absolute z-20 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-path font-display text-sm text-paper"
                  style={{
                    left: `${((cat.x + 0.5) * 100) / level.width}%`,
                    top: `${((cat.y + 0.5) * 100) / level.height}%`,
                    transform: `translate(-50%, -50%) translate(${shift.x}px, ${shift.y}px)`,
                  }}
                  aria-label={shift.label}
                >
                  {shift.glyph}
                </button>
              );
            })
          : null}

        {showCoach && selected ? (
          <UiIcon
            name="hand_cursor"
            className="pointer-events-none absolute bottom-0 right-1 z-30 h-11 w-11 animate-pulse"
          />
        ) : null}
      </div>
    </div>
  );
}

function GateMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full p-1.5" aria-hidden>
      <path
        d="M6 16 L16 8 L26 16 V26 H6 Z"
        fill="#F7F0E6"
        stroke="#2B2A28"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13 26 V18 H19 V26" fill="#D96B4A" stroke="#2B2A28" strokeWidth="1.5" />
    </svg>
  );
}
