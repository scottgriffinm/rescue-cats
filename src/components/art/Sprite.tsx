import { CAT_ASSETS, FURN_ASSETS, UI_ASSETS } from "@/lib/artAssets";
import { ART_KIT_PATH, PUZZLE_CAT_SRC } from "@/lib/constants";
import type { ArtKit } from "@/lib/types";
import { cn } from "@/lib/cn";

export function PuzzleCatSprite({
  className,
  colorHex,
}: {
  className?: string;
  colorHex?: string;
}) {
  return (
    <span className="relative inline-flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PUZZLE_CAT_SRC} alt="" className={cn("pointer-events-none select-none", className)} />
      {colorHex ? (
        <span
          className="pointer-events-none absolute bottom-0.5 h-2 w-6 rounded-full"
          style={{ background: colorHex, boxShadow: `0 0 0 1.5px #2B2A28` }}
          aria-hidden
        />
      ) : null}
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
