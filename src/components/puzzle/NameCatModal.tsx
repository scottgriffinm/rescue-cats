"use client";

import { useMemo, useState } from "react";
import { FriendSprite, UiIcon } from "@/components/art/Sprite";
import { Button } from "@/components/ui/Button";
import { useSave } from "@/components/providers/SaveProvider";
import { allNameSuggestions, friendById, NAMING } from "@/lib/collection";
import { MAX_NAME_LENGTH } from "@/lib/constants";

export function NameCatModal({ onNamed }: { onNamed: () => void }) {
  const { save, namePendingFriend } = useSave();
  const pending = save.pendingUnlocks[0];
  const catalog = pending ? friendById(pending.friendId) : undefined;
  const pool = useMemo(() => allNameSuggestions(), []);
  const [name, setName] = useState(catalog?.defaultName ?? "Mango");

  if (!catalog) return null;

  function shuffle() {
    const pick = pool[Math.floor(Math.random() * pool.length)] ?? catalog?.defaultName ?? "Mango";
    setName(pick);
  }

  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-ink/30 px-4 pb-8 pt-16">
      <div className="paper-card modal-spring w-full rounded-[1.5rem] p-6">
        <div className="flex justify-center">
          <UiIcon name="star_marigold" className="h-8 w-8" />
        </div>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wide">
          {NAMING.title}
        </h2>
        <div className="mx-auto mt-3 grid h-[88px] w-[88px] place-items-center">
          <FriendSprite
            kit={catalog.phenotype.artKit}
            size={72}
            className="hero-squash h-[88px] w-[88px]"
          />
        </div>
        <p className="mt-1 text-center text-sm text-ink/65">{catalog.displayLine}</p>
        <form
          className="mt-4 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            namePendingFriend(name);
            onNamed();
          }}
        >
          <label className="block text-center text-xs tracking-wide text-ink/50">
            {NAMING.name_label}
          </label>
          <input
            value={name}
            maxLength={MAX_NAME_LENGTH}
            autoFocus
            placeholder={NAMING.placeholder}
            aria-label={NAMING.name_label}
            onFocus={(event) => event.currentTarget.select()}
            onChange={(event) => setName(event.target.value)}
            className="h-11 w-full rounded-lg border-0 bg-transparent bg-[url('/assets/ui/input_name.svg')] bg-[length:100%_100%] bg-no-repeat px-4 text-center font-sans text-lg text-ink outline-none"
          />
          <Button type="submit" variant="paper" className="w-full" aria-label={NAMING.cta_primary}>
            {NAMING.cta_primary}
          </Button>
          <button
            type="button"
            onClick={shuffle}
            className="w-full text-center text-sm text-ink/50 underline-offset-2 hover:underline"
          >
            {NAMING.cta_shuffle}
          </button>
        </form>
      </div>
    </div>
  );
}
