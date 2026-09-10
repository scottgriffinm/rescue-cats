"use client";

import type { Coat } from "@/lib/types";

const FUR: Record<Coat, { body: string; belly: string; ear: string; patch?: string; patch2?: string }> =
  {
    calico: {
      body: "#F4EFE6",
      belly: "#FFF9F2",
      ear: "#E8B89A",
      patch: "#C4A574",
      patch2: "#2A2622",
    },
    cream: { body: "#E8C48A", belly: "#F7E4C2", ear: "#D9A56A" },
    gray: { body: "#B8B3AD", belly: "#E4E0DA", ear: "#9C9791" },
    tuxedo: {
      body: "#2A2622",
      belly: "#F7F1E8",
      ear: "#1A1814",
      patch: "#F7F1E8",
    },
    peach: { body: "#E7B7A0", belly: "#F6D9C8", ear: "#D49882" },
    ink: { body: "#2A2622", belly: "#4A4540", ear: "#1A1814" },
  };

type Pose = "sit" | "loaf" | "walk";

export function CatSvg({
  coat,
  pose = "sit",
  className,
  facing = "e",
}: {
  coat: Coat;
  pose?: Pose;
  className?: string;
  facing?: "e" | "w";
}) {
  const fur = FUR[coat];
  const flip = facing === "w" ? "scale(-1,1) translate(-64,0)" : undefined;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
      fill="none"
    >
      <g transform={flip}>
        {pose === "walk" ? (
          <WalkCat fur={fur} />
        ) : pose === "loaf" ? (
          <LoafCat fur={fur} />
        ) : (
          <SitCat fur={fur} />
        )}
      </g>
    </svg>
  );
}

function SitCat({ fur }: { fur: (typeof FUR)[Coat] }) {
  return (
    <>
      <path
        d="M14 40c-4 8 2 16 18 16s22-8 18-16"
        stroke="#1A1814"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="40" rx="18" ry="13" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <ellipse cx="32" cy="44" rx="10" ry="7" fill={fur.belly} />
      {fur.patch ? (
        <ellipse cx="22" cy="36" rx="6" ry="5" fill={fur.patch} />
      ) : null}
      {fur.patch2 ? (
        <ellipse cx="40" cy="34" rx="5" ry="4.5" fill={fur.patch2} />
      ) : null}
      <circle cx="32" cy="26" r="11" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <path d="M23 18l3-8 6 6" fill={fur.body} stroke="#1A1814" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M41 18l-3-8-6 6" fill={fur.body} stroke="#1A1814" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M24.5 16.5l2-5" stroke={fur.ear} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M39.5 16.5l-2-5" stroke={fur.ear} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="28" cy="26" r="1.5" fill="#1A1814" />
      <circle cx="36" cy="26" r="1.5" fill="#1A1814" />
      <path d="M30 30h4" stroke="#1A1814" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M48 42c6-2 10 4 6 10" stroke="#1A1814" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="22" cy="52" r="2.2" fill={fur.body} stroke="#1A1814" strokeWidth="1.8" />
      <circle cx="42" cy="52" r="2.2" fill={fur.body} stroke="#1A1814" strokeWidth="1.8" />
    </>
  );
}

function LoafCat({ fur }: { fur: (typeof FUR)[Coat] }) {
  return (
    <>
      <ellipse cx="32" cy="42" rx="20" ry="11" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <ellipse cx="32" cy="45" rx="11" ry="6" fill={fur.belly} />
      {fur.patch ? <ellipse cx="20" cy="40" rx="6" ry="4.5" fill={fur.patch} /> : null}
      {fur.patch2 ? <ellipse cx="42" cy="39" rx="5" ry="4" fill={fur.patch2} /> : null}
      <circle cx="32" cy="30" r="10.5" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <path d="M24 23l2.5-7 5.5 5.5" fill={fur.body} stroke="#1A1814" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M40 23l-2.5-7-5.5 5.5" fill={fur.body} stroke="#1A1814" strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="28.5" cy="30" r="1.4" fill="#1A1814" />
      <circle cx="35.5" cy="30" r="1.4" fill="#1A1814" />
      <path d="M30.5 33.5h3" stroke="#1A1814" strokeWidth="1.7" strokeLinecap="round" />
    </>
  );
}

function WalkCat({ fur }: { fur: (typeof FUR)[Coat] }) {
  return (
    <>
      <path
        d="M50 38c6 1 8 8 3 12"
        stroke="#1A1814"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <ellipse cx="30" cy="40" rx="16" ry="10" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <ellipse cx="28" cy="43" rx="8" ry="5" fill={fur.belly} />
      {fur.patch ? <ellipse cx="22" cy="37" rx="5" ry="4" fill={fur.patch} /> : null}
      {fur.patch2 ? <ellipse cx="36" cy="36" rx="4.5" ry="3.5" fill={fur.patch2} /> : null}
      <circle cx="44" cy="30" r="9.5" fill={fur.body} stroke="#1A1814" strokeWidth="2.6" />
      <path d="M38 23l2-7 5 5" fill={fur.body} stroke="#1A1814" strokeWidth="2.3" strokeLinejoin="round" />
      <path d="M50 22l1-7 4 7" fill={fur.body} stroke="#1A1814" strokeWidth="2.3" strokeLinejoin="round" />
      <circle cx="46.5" cy="29.5" r="1.3" fill="#1A1814" />
      <path d="M48 33h3" stroke="#1A1814" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 48c0 3 3 5 6 4" stroke="#1A1814" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30 49c0 3 3 5 6 3" stroke="#1A1814" strokeWidth="2.2" strokeLinecap="round" />
    </>
  );
}
