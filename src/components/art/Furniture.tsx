export function CardboardBox({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} aria-hidden>
      <path d="M18 38l42-18 42 18-42 20z" fill="#E2C49A" stroke="#1A1814" strokeWidth="2.6" />
      <path d="M18 38v28l42 20V58z" fill="#C4A574" stroke="#1A1814" strokeWidth="2.6" />
      <path d="M102 38v28l-42 20V58z" fill="#D4B483" stroke="#1A1814" strokeWidth="2.6" />
      <path d="M60 20v16" stroke="#1A1814" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 42h24" stroke="#1A1814" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function CatTree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden>
      <path d="M48 36v78" stroke="#1A1814" strokeWidth="6" strokeLinecap="round" />
      <path d="M48 36v78" stroke="#C4A574" strokeWidth="3.2" strokeLinecap="round" />
      <ellipse cx="50" cy="118" rx="28" ry="8" fill="#EFE6D8" stroke="#1A1814" strokeWidth="2.4" />
      <ellipse cx="50" cy="78" rx="22" ry="7" fill="#F7F1E8" stroke="#1A1814" strokeWidth="2.4" />
      <ellipse cx="50" cy="40" rx="16" ry="6" fill="#F7F1E8" stroke="#1A1814" strokeWidth="2.4" />
      <path d="M34 78c-10-8-12-22-4-28" stroke="#1A1814" strokeWidth="2.4" fill="none" />
    </svg>
  );
}

export function Swing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 120" className={className} aria-hidden>
      <path d="M20 18h100" stroke="#1A1814" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 18v70" stroke="#1A1814" strokeWidth="2.4" />
      <path d="M106 18v70" stroke="#1A1814" strokeWidth="2.4" />
      <path d="M20 18l-8 78" stroke="#1A1814" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M120 18l8 78" stroke="#1A1814" strokeWidth="2.6" strokeLinecap="round" />
      <rect
        x="48"
        y="84"
        width="44"
        height="10"
        rx="3"
        fill="#E8C48A"
        stroke="#1A1814"
        strokeWidth="2.3"
      />
      <circle cx="70" cy="18" r="3" fill="#C4785A" stroke="#1A1814" strokeWidth="1.6" />
    </svg>
  );
}

export function CheckIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={className} aria-hidden>
      <path
        d="M14 3c6 0 11 4.4 11 10s-5 10-11 10c-1.4 0-2.8-.2-4-.7L3 25l1.8-5.2C3.6 18.2 3 16.2 3 13 3 7.4 8 3 14 3z"
        fill="#C4785A"
        stroke="#1A1814"
        strokeWidth="2"
      />
      <path d="M14 9v6" stroke="#F7F1E8" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="14" cy="18.2" r="1.2" fill="#F7F1E8" />
    </svg>
  );
}
