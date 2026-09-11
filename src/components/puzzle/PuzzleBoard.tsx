"use client";

import { useRef } from "react";
import { PuzzleCatSprite, UiIcon } from "@/components/art/Sprite";
import { cn } from "@/lib/cn";
import { cellKey } from "@/lib/directions";
import { blockedSet, mismatchedGateSolid } from "@/lib/slide";
import type { BoardColor, Dir, Level, PieceCat } from "@/lib/types";

export type CatMotion = {
  id: string;
  kind: "snap" | "slide" | "settle" | "home";
  axis?: "x" | "y";
  durationMs?: number;
};

export function PuzzleBoard({
  level,
  cats,
  selected,
  showCoach,
  disabled,
  motion,
  onSelect,
  onSlide,
}: {
  level: Level;
  cats: PieceCat[];
  selected: string | null;
  showCoach: boolean;
  disabled?: boolean;
  motion?: CatMotion | null;
  onSelect: (id: string) => void;
  onSlide: (dir: Dir) => void;
}) {
  const start = useRef<{ x: number; y: number } | null>(null);
  const blocked = blockedSet(level);
  const selectedCat = cats.find((cat) => cat.id === selected);
  const gatesByCell = new Map(level.gates.map((gate) => [cellKey(gate.x, gate.y), gate]));
  const catSize = level.width >= 6 ? 46 : 56;
  const homeKeys = new Set(
    motion?.kind === "home"
      ? cats
          .filter((cat) => gatesByCell.has(cellKey(cat.x, cat.y)))
          .map((cat) => cellKey(cat.x, cat.y))
      : [],
  );

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
      className="paper-card paper-card-path relative mx-auto w-full max-w-[320px] rounded-[24px] p-2"
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
            const gate = gatesByCell.get(key);
            const solidForSelected =
              Boolean(gate && selectedCat && mismatchedGateSolid(level, selectedCat, { x, y }));
            return (
              <div key={key} className="aspect-square p-[3px]">
                <div
                  className={cn(
                    "relative h-full w-full rounded-xl border border-ink/15 bg-paper-deep",
                    gate && !solidForSelected && gateCellClass(gate.color),
                    solidForSelected && "border-ink/70 bg-wood",
                    isWall && "border-ink/70 bg-wood",
                    homeKeys.has(key) && "gate-home",
                  )}
                >
                  {gate ? <GateMark color={gate.color} solid={solidForSelected} /> : null}
                </div>
              </div>
            );
          }),
        )}

        {cats.map((cat) => {
          const active = motion?.id === cat.id ? motion : null;
          const sliding = active?.kind === "slide";
          return (
            <button
              key={cat.id}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(cat.id)}
              className={cn(
                "absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center",
                selected === cat.id && "z-20",
              )}
              style={{
                left: `${((cat.x + 0.5) * 100) / level.width}%`,
                top: `${((cat.y + 0.5) * 100) / level.height}%`,
                width: `${100 / level.width}%`,
                transitionProperty: sliding ? "left, top" : "none",
                transitionDuration: sliding ? `${active.durationMs ?? 160}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.85, 0.2, 1)",
              }}
              aria-label={`Select cat`}
            >
              <span
                className={cn(
                  "absolute bottom-1 left-1/2 z-0 h-2 w-6 -translate-x-1/2 rounded-full",
                  cat.color === "gray" && "bg-[color:var(--fur-slate)]",
                  cat.color === "orange" && "bg-[color:var(--fur-ginger)]",
                  cat.color === "black" && "bg-ink/70",
                  !cat.color && "bg-path/50",
                )}
                aria-hidden
              />
              <PuzzleCatSprite
                className={cn(
                  "relative z-[1] drop-shadow-sm",
                  active?.kind === "slide" && active.axis === "y" && "slide-along-y",
                  active?.kind === "slide" && active.axis === "x" && "slide-along-x",
                  active?.kind === "settle" && "slide-settle",
                  active?.kind === "home" && "slide-home",
                )}
                style={{ width: catSize, height: catSize }}
              />
            </button>
          );
        })}

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

function gateCellClass(color?: BoardColor) {
  if (color === "orange") return "border-[color:var(--gate-orange)]/70 bg-[color:var(--gate-orange)]/20";
  if (color === "gray") return "border-[color:var(--gate-gray)]/70 bg-[color:var(--gate-gray)]/18";
  if (color === "black") return "border-ink/50 bg-ink/10";
  return "border-path/70 bg-path/15";
}

function GateMark({ color, solid }: { color?: BoardColor; solid?: boolean }) {
  if (color === "orange" || color === "gray") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={color === "orange" ? "/assets/ui/gate_orange.svg" : "/assets/ui/gate_gray.svg"}
        alt=""
        className={cn("h-full w-full p-1.5", solid && "opacity-55")}
      />
    );
  }
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full p-1.5" aria-hidden>
      <path
        d="M6 16 L16 8 L26 16 V26 H6 Z"
        fill={solid ? "#E2D4C2" : "#F7F0E6"}
        stroke="#2B2A28"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13 26 V18 H19 V26"
        fill={solid ? "#CABCAB" : "#D96B4A"}
        stroke="#2B2A28"
        strokeWidth="1.5"
      />
    </svg>
  );
}
