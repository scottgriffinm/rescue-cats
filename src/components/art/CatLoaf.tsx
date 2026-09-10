import type { ArtKit } from "@/lib/types";
import { cn } from "@/lib/cn";

const FUR: Record<ArtKit, { body: string; ear: string; blobs: boolean }> = {
  cream: { body: "#FFF8F0", ear: "#FFF8F0", blobs: false },
  ginger: { body: "#D38B5D", ear: "#B06D4D", blobs: false },
  slate: { body: "#5A5E6B", ear: "#4A4D5B", blobs: false },
  calico: { body: "#FFF8F0", ear: "#E8A89A", blobs: true },
};

/** Procedural loaf kit — body, ears, eyes.open, mouth.w, tail.short, legs.stubby, pattern.blob. */
export function CatLoaf({
  kit,
  size = 48,
  className,
}: {
  kit: ArtKit;
  size?: 48 | 72 | 160;
  className?: string;
}) {
  const fur = FUR[kit];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden
    >
      <ellipse
        id="body"
        cx="24"
        cy="27"
        rx="16"
        ry="12"
        fill={fur.body}
        stroke="#2B2A28"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        id="ear-l"
        d="M12 20 C12 14 16 12 18 16"
        fill={fur.ear}
        stroke="#2B2A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="ear-r"
        d="M36 20 C36 14 32 12 30 16"
        fill={fur.ear}
        stroke="#2B2A28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {fur.blobs ? (
        <>
          <ellipse id="blob-clay" cx="30" cy="29" rx="5" ry="4" fill="#E8A89A" />
          <ellipse id="blob-slate" cx="16" cy="31" rx="4.5" ry="3.5" fill="#5A5E6B" />
        </>
      ) : null}
      <ellipse
        id="leg-l"
        cx="16"
        cy="37"
        rx="3.2"
        ry="2.2"
        fill={fur.body}
        stroke="#2B2A28"
        strokeWidth="1.6"
      />
      <ellipse
        id="leg-r"
        cx="32"
        cy="37"
        rx="3.2"
        ry="2.2"
        fill={fur.body}
        stroke="#2B2A28"
        strokeWidth="1.6"
      />
      <circle id="eye-l" cx="18" cy="25" r="1.6" fill="#2B2A28" />
      <circle id="eye-r" cx="28" cy="25" r="1.6" fill="#2B2A28" />
      <path
        id="mouth"
        d="M21 29 Q23 31 25 29"
        fill="none"
        stroke="#2B2A28"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        id="tail"
        d="M38 31 C42 29 44 33 40 35"
        fill="none"
        stroke="#2B2A28"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
