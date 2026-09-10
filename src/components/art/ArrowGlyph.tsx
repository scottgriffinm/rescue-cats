"use client";

import { DIR_ANGLE } from "@/lib/directions";
import type { Dir } from "@/lib/types";

export function ArrowGlyph({
  dir,
  locked,
  active,
}: {
  dir: Dir;
  locked?: boolean;
  active?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-full w-full"
      aria-hidden
      style={{ transform: `rotate(${DIR_ANGLE[dir]}deg)` }}
    >
      {active ? (
        <circle cx="32" cy="32" r="28" fill="#C4A574" fillOpacity="0.22" />
      ) : null}
      <path
        d="M12 32h28"
        stroke="#1A1814"
        strokeWidth={locked ? 5.2 : 4.4}
        strokeLinecap="round"
      />
      <path
        d="M34 20l16 12-16 12"
        fill="none"
        stroke="#1A1814"
        strokeWidth={locked ? 5.2 : 4.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {locked ? (
        <circle cx="20" cy="32" r="3.2" fill="#C4A574" stroke="#1A1814" strokeWidth="1.6" />
      ) : (
        <path
          d="M10 32h10"
          stroke="#C4A574"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.9"
        />
      )}
    </svg>
  );
}

export function HomeGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <path
        d="M12 30L32 14l20 16v22H12V30z"
        fill="#F7F1E8"
        stroke="#1A1814"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path d="M24 52V36h16v16" fill="#E8C48A" stroke="#1A1814" strokeWidth="2.4" />
      <circle cx="32" cy="26" r="3.2" fill="#C4785A" stroke="#1A1814" strokeWidth="1.6" />
    </svg>
  );
}
