"use client";

import { useState } from "react";
import { FriendSprite, UiIcon } from "@/components/art/Sprite";
import { Button } from "@/components/ui/Button";
import { useSave } from "@/components/providers/SaveProvider";
import {
  chipsForFriend,
  friendById,
  BISCUIT_FRIEND_ID,
  INK_FRIEND_ID,
  TUX_FRIEND_ID,
  GHOST_FRIEND_ID,
  MIST_FRIEND_ID,
  PEPPER_FRIEND_ID,
  PUMPKIN_FRIEND_ID,
  SHADOW_FRIEND_ID,
  NOODLE_FRIEND_ID,
  CLOVER_FRIEND_ID,
  ASH_FRIEND_ID,
  OAK_FRIEND_ID,
  DUMPLING_FRIEND_ID,
  STRIPE_FRIEND_ID,
  CLOUD_FRIEND_ID,
  DONNA_FRIEND_ID,
  SUNNY_FRIEND_ID,
  NIGEL_FRIEND_ID,
  BEAN_FRIEND_ID,
  LOVAGE_FRIEND_ID,
  PARSLEY_FRIEND_ID,
  DILL_FRIEND_ID,
  TARRAGON_FRIEND_ID,
  OREGANO_FRIEND_ID,
  MARJORAM_FRIEND_ID,
  THYME_FRIEND_ID,
  ROSEMARY_FRIEND_ID,
  MINT_FRIEND_ID,
  CATNIP_FRIEND_ID,
  LAVENDER_FRIEND_ID,
  CHAMOMILE_FRIEND_ID,
  BERGAMOT_FRIEND_ID,
  JASMINE_FRIEND_ID,
  MAGNOLIA_FRIEND_ID,
  HIBISCUS_FRIEND_ID,
  GARDENIA_FRIEND_ID,
  CAMELLIA_FRIEND_ID,
  PEONY_FRIEND_ID,
  AZALEA_FRIEND_ID,
  NAMING,
  shuffleNameChips,
} from "@/lib/collection";
import { MAX_NAME_LENGTH } from "@/lib/constants";

export function NameCatModal({ onNamed }: { onNamed: () => void }) {
  const { save, namePendingFriend } = useSave();
  const pending = save.pendingUnlocks[0];
  const catalog = pending ? friendById(pending.friendId) : undefined;
  const [name, setName] = useState("");
  const [chips, setChips] = useState<string[]>(() =>
    pending ? chipsForFriend(pending.friendId) : [],
  );

  if (!catalog) return null;

  const canWelcome = name.trim().length >= 1;
  const lockChips =
    catalog.friendId === INK_FRIEND_ID ||
    catalog.friendId === BISCUIT_FRIEND_ID ||
    catalog.friendId === TUX_FRIEND_ID ||
    catalog.friendId === GHOST_FRIEND_ID ||
    catalog.friendId === MIST_FRIEND_ID ||
    catalog.friendId === PEPPER_FRIEND_ID ||
    catalog.friendId === PUMPKIN_FRIEND_ID ||
    catalog.friendId === SHADOW_FRIEND_ID ||
    catalog.friendId === NOODLE_FRIEND_ID ||
    catalog.friendId === CLOVER_FRIEND_ID ||
    catalog.friendId === ASH_FRIEND_ID ||
    catalog.friendId === OAK_FRIEND_ID ||
    catalog.friendId === DUMPLING_FRIEND_ID ||
    catalog.friendId === STRIPE_FRIEND_ID ||
    catalog.friendId === CLOUD_FRIEND_ID ||
    catalog.friendId === DONNA_FRIEND_ID ||
    catalog.friendId === SUNNY_FRIEND_ID ||
    catalog.friendId === NIGEL_FRIEND_ID ||
    catalog.friendId === BEAN_FRIEND_ID ||
    catalog.friendId === LOVAGE_FRIEND_ID ||
    catalog.friendId === PARSLEY_FRIEND_ID ||
    catalog.friendId === DILL_FRIEND_ID ||
    catalog.friendId === TARRAGON_FRIEND_ID ||
    catalog.friendId === OREGANO_FRIEND_ID ||
    catalog.friendId === MARJORAM_FRIEND_ID ||
    catalog.friendId === THYME_FRIEND_ID ||
    catalog.friendId === ROSEMARY_FRIEND_ID ||
    catalog.friendId === MINT_FRIEND_ID ||
    catalog.friendId === CATNIP_FRIEND_ID ||
    catalog.friendId === LAVENDER_FRIEND_ID ||
    catalog.friendId === CHAMOMILE_FRIEND_ID ||
    catalog.friendId === BERGAMOT_FRIEND_ID ||
    catalog.friendId === JASMINE_FRIEND_ID ||
    catalog.friendId === MAGNOLIA_FRIEND_ID ||
    catalog.friendId === HIBISCUS_FRIEND_ID ||
    catalog.friendId === GARDENIA_FRIEND_ID ||
    catalog.friendId === CAMELLIA_FRIEND_ID ||
    catalog.friendId === PEONY_FRIEND_ID ||
    catalog.friendId === AZALEA_FRIEND_ID;

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center overflow-y-auto bg-ink/30 px-3 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-10 sm:items-center sm:px-4 sm:pt-16">
      <div className="paper-card modal-spring my-auto w-full max-w-md rounded-[1.5rem] p-4 sm:p-6">
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
            if (!canWelcome) return;
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
            onChange={(event) => setName(event.target.value)}
            className="h-11 w-full rounded-lg border-0 bg-transparent bg-[url('/assets/ui/input_name.svg')] bg-[length:100%_100%] bg-no-repeat px-4 text-center font-sans text-lg text-ink outline-none placeholder:text-ink/35"
          />
          <div className="flex flex-wrap justify-center gap-2" aria-label="Name suggestions">
            {chips.map((chip) => {
              const selected = name === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => setName(chip)}
                  className={`h-10 min-w-[4.5rem] rounded-full border-2 px-3 font-display text-sm ${
                    selected
                      ? "border-ink bg-wood text-ink"
                      : "border-ink/25 bg-paper text-ink/80"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
          <Button
            type="submit"
            variant="paper"
            className="w-full"
            disabled={!canWelcome}
            aria-label={NAMING.cta_primary}
          >
            {NAMING.cta_primary}
          </Button>
          {lockChips ? null : (
            <button
              type="button"
              onClick={() => setChips(shuffleNameChips(3, catalog.friendId))}
              aria-label={NAMING.cta_shuffle}
              className="w-full text-center text-sm text-ink/50 underline-offset-2 hover:underline"
            >
              {NAMING.cta_shuffle}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
