import { CatBelly } from "@/components/art/CatBelly";
import { CatLoaf } from "@/components/art/CatLoaf";
import { FURN_ASSETS, UI_ASSETS } from "@/lib/artAssets";
import type { ArtKit } from "@/lib/types";
import { cn } from "@/lib/cn";

export function PuzzleCatSprite({ className }: { className?: string }) {
  return <CatBelly className={className} />;
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
  return <CatLoaf kit={kit} size={size} className={className} />;
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
  name:
    | keyof typeof UI_ASSETS;
  className?: string;
  alt?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={UI_ASSETS[name]} alt={alt} className={cn("select-none", className)} />
  );
}
