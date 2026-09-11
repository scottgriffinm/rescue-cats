import { CAT_ASSETS, FURN_ASSETS, UI_ASSETS } from "@/lib/artAssets";
import { ART_KIT_PATH, PUZZLE_BELLY_SRC } from "@/lib/constants";
import type { ArtKit, BoardColor } from "@/lib/types";
import { cn } from "@/lib/cn";

export function PuzzleCatSprite({
  className,
  color,
}: {
  className?: string;
  /** Board coat. Uncolored teach cats (L1–L3) render orange — never cream calico. */
  color?: BoardColor;
}) {
  const src = PUZZLE_BELLY_SRC[color ?? "orange"];
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="pointer-events-none h-full w-full select-none" />
    </span>
  );
}

export function FriendSprite({
  kit,
  size = 72,
  className,
}: {
  kit: ArtKit;
  size?: 48 | 72 | 160;
  className?: string;
}) {
  const src =
    size === 48
      ? ART_KIT_PATH[kit].loaf48
      : size === 160 && kit === "ginger"
        ? CAT_ASSETS.ginger_loaf_160
        : ART_KIT_PATH[kit].loaf72;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={cn("pointer-events-none select-none", className)} />
  );
}

export function FurnitureImg({
  file,
  className,
}: {
  file: keyof typeof FURN_ASSETS;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={FURN_ASSETS[file]} alt="" className={cn("select-none", className)} />
  );
}

export function UiIcon({
  name,
  className,
  alt = "",
}: {
  name: keyof typeof UI_ASSETS;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={UI_ASSETS[name]} alt={alt} className={cn("select-none", className)} />
  );
}
