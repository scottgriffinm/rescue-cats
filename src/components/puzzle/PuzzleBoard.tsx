"use client";

import { useRef } from "react";
import { PuzzleCatSprite, UiIcon } from "@/components/art/Sprite";
import { cn } from "@/lib/cn";
import { GATE_ASSETS } from "@/lib/artAssets";
import { BOARD_COLOR_HEX } from "@/lib/colors";
import { cellKey } from "@/lib/directions";
import { blockedSet } from "@/lib/slide";
import type { Dir, Level, PieceCat } from "@/lib/types";

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
  const gateByCell = new Map(level.gates.map((gate) => [cellKey(gate.x, gate.y), gate]));
  const gateKeys = new Set(gateByCell.keys());
  const homeKeys = new Set(
    motion?.kind === "home"
      ? cats.filter((cat) => gateKeys.has(cellKey(cat.x, cat.y))).map((cat) => cellKey(cat.x, cat.y))
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
      className="paper-card paper-card-path relative mx-auto w-full max-w-[28rem] rounded-[24px] p-2"
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
            const gate = gateByCell.get(key);
            const isGate = Boolean(gate);
            const gateHex = gate?.color ? BOARD_COLOR_HEX[gate.color] : undefined;
            return (
              <div key={key} className="aspect-square p-[3px]">
                <div
                  className={cn(
                    "relative h-full w-full rounded-xl border border-ink/15 bg-paper-deep",
                    isGate && "border-path/70 bg-path/15",
                    isWall && "border-ink/70 bg-wood",
                    homeKeys.has(key) && "gate-home",
                  )}
                  style={
                    isGate && gateHex
                      ? {
                          background: `${gateHex}40`,
                          borderColor: gateHex,
                          boxShadow: `inset 0 0 0 2px ${gateHex}`,
                        }
                      : undefined
                  }
                >
                  {isGate ? (
                    gate?.color === "orange" || gate?.color === "gray" ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={GATE_ASSETS[gate.color]}
                        alt={`${gate.color} house`}
                        className="h-full w-full p-0.5"
                      />
                    ) : (
                      <GateMark colorHex={gateHex} />
                    )
                  ) : null}
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
                height: `${100 / level.height}%`,
                transitionProperty: sliding ? "left, top" : "none",
                transitionDuration: sliding ? `${active.durationMs ?? 160}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.2, 0.85, 0.2, 1)",
              }}
              aria-label={cat.color ? `Select ${cat.color} cat` : "Select cat"}
            >
              <PuzzleCatSprite
                color={cat.color}
                className={cn(
                  "h-[80%] w-[80%] max-h-[72px] max-w-[72px] drop-shadow-sm",
                  active?.kind === "slide" && active.axis === "y" && "slide-along-y",
                  active?.kind === "slide" && active.axis === "x" && "slide-along-x",
                  active?.kind === "settle" && "slide-settle",
                  active?.kind === "home" && "slide-home",
                )}
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

function GateMark({ colorHex }: { colorHex?: string }) {
  const body = colorHex ?? "#F7F0E6";
  const door = colorHex ? "#FFF8F0" : "#D96B4A";
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full p-1.5" aria-hidden>
      <path
        d="M6 16 L16 8 L26 16 V26 H6 Z"
        fill={body}
        stroke="#2B2A28"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13 26 V18 H19 V26" fill={door} stroke="#2B2A28" strokeWidth="1.5" />
    </svg>
  );
}
