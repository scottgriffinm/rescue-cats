import { cn } from "@/lib/cn";

/** Puzzle-center calico belly @72 — cream + clay + slate blobs. */
export function CatBelly({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={cn("pointer-events-none select-none", className)}
      aria-hidden
    >
      <ellipse
        id="body"
        cx="36"
        cy="40"
        rx="22"
        ry="14"
        fill="#FFF8F0"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <ellipse id="blob-clay" cx="44" cy="38" rx="7" ry="5" fill="#E8A89A" />
      <ellipse id="blob-slate" cx="26" cy="44" rx="6" ry="4" fill="#5A5E6B" />
      <path
        id="ear-l"
        d="M22 30 C20 22 24 20 26 26"
        fill="#FFF8F0"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        id="ear-mid-l"
        d="M32 28 C31 20 35 18 36 24"
        fill="#FFF8F0"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        id="ear-mid-r"
        d="M42 28 C43 20 47 18 48 24"
        fill="#E8A89A"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        id="ear-r"
        d="M52 32 C54 24 58 24 56 30"
        fill="#FFF8F0"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        id="leg-l"
        d="M20 42 C16 38 16 34 20 36"
        fill="#E8A89A"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        id="leg-r"
        d="M24 46 C20 48 18 52 22 50"
        fill="#FFF8F0"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle id="eye-l" cx="34" cy="42" r="2" fill="#2B2A28" />
      <circle id="eye-r" cx="44" cy="40" r="2" fill="#2B2A28" />
      <path
        id="tail"
        d="M56 48 C62 52 64 46 60 44"
        fill="none"
        stroke="#2B2A28"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
