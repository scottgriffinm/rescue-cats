"use client";

import { ArrowGlyph, HomeGlyph } from "@/components/art/ArrowGlyph";
import { CatSvg } from "@/components/art/CatSvg";
import { cn } from "@/lib/cn";
import { cellKey } from "@/lib/directions";
import { getCell } from "@/lib/simulate";
import type { Dir, Level, Vec } from "@/lib/types";

export function PuzzleBoard({
  level,
  dirs,
  cat,
  preview,
  selected,
  disabled,
  facing,
  onRotate,
}: {
  level: Level;
  dirs: Record<string, Dir>;
  cat: Vec;
  preview: Vec[];
  selected: string | null;
  disabled?: boolean;
  facing: "e" | "w";
  onRotate: (key: string) => void;
}) {
  const previewKeys = new Set(preview.map((pos) => cellKey(pos.x, pos.y)));
  const lastPreview = preview[preview.length - 1];

  return (
    <div
      className="relative mx-auto"
      style={{
        width: `min(100%, ${level.width * 62}px)`,
      }}
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${level.width}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: level.height }, (_, y) =>
          Array.from({ length: level.width }, (_, x) => {
            const key = cellKey(x, y);
            const cell = getCell(level, x, y);
            const onPath = previewKeys.has(key);
            const isEnd = lastPreview && lastPreview.x === x && lastPreview.y === y;
            const isStart = level.start.x === x && level.start.y === y;

            if (!cell) {
              return <div key={key} className="aspect-square p-1" />;
            }

            if (cell.kind === "goal") {
              return (
                <div key={key} className="aspect-square p-1">
                  <div
                    className={cn(
                      "relative h-full w-full rounded-2xl border-2 border-ink bg-white",
                      onPath && "bg-tan/25",
                    )}
                  >
                    <HomeGlyph />
                  </div>
                </div>
              );
            }

            const dir = dirs[key] ?? cell.dir ?? "e";
            const locked = Boolean(cell.locked);

            return (
              <div key={key} className="aspect-square p-1">
                <button
                  type="button"
                  disabled={disabled || locked}
                  onClick={() => onRotate(key)}
                  className={cn(
                    "relative h-full w-full rounded-2xl border-2 border-ink bg-white transition-transform active:scale-95",
                    onPath && "bg-tan/20",
                    selected === key && "scale-[1.04] ring-4 ring-tan/70",
                    isEnd && preview.length > 1 && "border-terracotta",
                    locked && "bg-paper-deep",
                  )}
                  aria-label={
                    locked
                      ? `Locked arrow facing ${dir}`
                      : `Rotate arrow facing ${dir}`
                  }
                >
                  <ArrowGlyph dir={dir} locked={locked} active={selected === key} />
                  {isStart ? (
                    <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-tan" />
                  ) : null}
                </button>
              </div>
            );
          }),
        )}
      </div>

      <div
        className="pointer-events-none absolute transition-[left,top] duration-200 ease-out"
        style={{
          width: `${100 / level.width}%`,
          height: `${100 / level.height}%`,
          left: `${(cat.x * 100) / level.width}%`,
          top: `${(cat.y * 100) / level.height}%`,
        }}
      >
        <CatSvg
          coat="calico"
          pose="walk"
          facing={facing}
          className="mx-auto h-[78%] w-[78%] drop-shadow-sm"
        />
      </div>
    </div>
  );
}
