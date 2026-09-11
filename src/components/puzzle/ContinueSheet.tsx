"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useSave } from "@/components/providers/SaveProvider";

export function ContinueSheet({
  levelId,
  onContinue,
  onYard,
}: {
  levelId: string;
  onContinue: () => void;
  onYard: () => void;
}) {
  const { save, spendTicket, watchAdContinue } = useSave();
  const [watching, setWatching] = useState(false);

  function ticket() {
    if (!spendTicket(levelId)) return;
    onContinue();
  }

  function ad() {
    setWatching(true);
    window.setTimeout(() => {
      watchAdContinue(levelId);
      setWatching(false);
      onContinue();
    }, 1400);
  }

  return (
    <div className="fixed inset-0 z-20 flex items-end justify-center bg-ink/30 px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-16 sm:items-center">
      <div className="paper-card modal-spring w-full max-w-md rounded-[1.5rem] p-6">
        <h2 className="text-center font-display text-2xl tracking-wide">Three soft misses</h2>
        <p className="mt-2 text-center text-sm text-ink/60">
          Same printed board. A ticket or a short rest — never an ad mid-slide.
        </p>
        <div className="mt-5 space-y-2">
          <Button className="w-full" disabled={save.tickets <= 0} onClick={ticket}>
            Use a ticket ({save.tickets})
          </Button>
          <Button variant="paper" className="w-full" disabled={watching} onClick={ad}>
            {watching ? "Taking a breather…" : "Optional rest (ad stub)"}
          </Button>
          <Button variant="ghost" className="w-full" onClick={onYard}>
            Back to the yard
          </Button>
        </div>
      </div>
    </div>
  );
}
