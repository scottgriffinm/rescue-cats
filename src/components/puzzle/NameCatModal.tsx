"use client";

import { useState } from "react";
import { CatSvg } from "@/components/art/CatSvg";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { nextCoat, nextSuggestion } from "@/lib/cats";
import { MAX_NAME_LENGTH } from "@/lib/constants";
import { useSave } from "@/components/providers/SaveProvider";

export function NameCatModal({ onNamed }: { onNamed: () => void }) {
  const { save, namePendingCat } = useSave();
  const suggestion = nextSuggestion(save.cats);
  const coat = nextCoat(save.cats);
  const [name, setName] = useState<string>(suggestion);

  return (
    <div className="absolute inset-0 z-30 flex items-end justify-center bg-[#1C1916]/35 px-4 pb-8 pt-16 backdrop-blur-[2px]">
      <div className="w-full rounded-[2rem] border-2 border-ink bg-paper p-6 shadow-[0_12px_0_#1A1814]">
        <p className="text-center font-display text-[11px] tracking-[0.22em] text-tan">
          INVITE THEM HOME
        </p>
        <h2 className="mt-1 text-center font-display text-3xl tracking-wide">
          A New Friend!
        </h2>
        <div className="mx-auto mt-4 grid h-28 w-28 place-items-center">
          <CatSvg coat={coat} pose="sit" className="h-28 w-28" />
        </div>
        <p className="mt-1 text-center text-sm text-ink/60">
          Please give me a name.
        </p>
        <form
          className="mt-4 space-y-3"
          onSubmit={(event) => {
            event.preventDefault();
            namePendingCat(name);
            onNamed();
          }}
        >
          <Field
            value={name}
            maxLength={MAX_NAME_LENGTH}
            autoFocus
            aria-label="Cat name"
            onFocus={(event) => event.currentTarget.select()}
            onChange={(event) => setName(event.target.value)}
          />
          <Button type="submit" className="w-full">
            Welcome home
          </Button>
        </form>
      </div>
    </div>
  );
}
