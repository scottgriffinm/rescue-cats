import { ART_KIT_PATH, PUZZLE_CAT_SRC } from "@/lib/constants";
import type { ArtKit } from "@/lib/types";
import { cn } from "@/lib/cn";

export function PuzzleCatSprite({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={PUZZLE_CAT_SRC} alt="" className={cn("pointer-events-none select-none", className)} />
  );
}

export function FriendSprite({
  kit,
  size = 72,
  className,
}: {
  kit: ArtKit;
  size?: 48 | 72;
  className?: string;
}) {
  const src = size === 48 ? ART_KIT_PATH[kit].loaf48 : ART_KIT_PATH[kit].loaf72;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" className={cn("pointer-events-none select-none", className)} />
  );
}

export function FurnitureImg({
  file,
  className,
}: {
  file: "boxBed" | "fence" | "postBell" | "swing" | "fountain";
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/assets/furniture/${file}.svg`} alt="" className={cn("select-none", className)} />
  );
}

export function UiIcon({
  name,
  className,
  alt = "",
}: {
  name:
    | "fail_empty"
    | "fail_mark"
    | "star_marigold"
    | "bubble_bang"
    | "hand_cursor"
    | "icon_close";
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`/assets/ui/${name}.svg`} alt={alt} className={cn("select-none", className)} />
  );
}
