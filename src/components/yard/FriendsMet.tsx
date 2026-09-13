"use client";

import { useState } from "react";
import { FriendSprite } from "@/components/art/Sprite";
import { TUTORIAL_RESCUES, friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

export function FriendsMet({ friends }: { friends: FriendInstance[] }) {
  const [tab, setTab] = useState<"friends" | "met">("friends");
  const namedIds = new Set(friends.map((friend) => friend.friendId));
  const namedInOrder = TUTORIAL_RESCUES.filter((entry) => namedIds.has(entry.friendId));
  // Met: named friends + at most next 1–2 unmet upcoming (not the full ··· wall).
  const upcomingUnmet = TUTORIAL_RESCUES.filter((entry) => !namedIds.has(entry.friendId)).slice(
    0,
    2,
  );
  const metEntries = [...namedInOrder, ...upcomingUnmet];

  return (
    <div className="friends-met px-3 pb-1 sm:px-5">
      <div className="mb-2 flex justify-center gap-4 font-display text-xs tracking-wide">
        <button
          type="button"
          onClick={() => setTab("friends")}
          className={`min-h-9 px-1 ${tab === "friends" ? "text-ink" : "text-ink/35"}`}
        >
          Friends
        </button>
        <button
          type="button"
          onClick={() => setTab("met")}
          className={`min-h-9 px-1 ${tab === "met" ? "text-ink" : "text-ink/35"}`}
        >
          Met
        </button>
      </div>
      {tab === "friends" ? (
        <ul className="flex flex-nowrap justify-start gap-1.5 overflow-x-auto px-1 pb-1 sm:justify-center">
          {friends.length === 0 ? (
            <li className="w-full text-center text-xs text-ink/40">
              Friends show up after a few clears.
            </li>
          ) : (
            friends.map((friend) => {
              const catalog = friendById(friend.friendId);
              return (
                <li
                  key={friend.instanceId}
                  className="w-10 min-w-10 shrink-0 overflow-hidden text-center"
                >
                  <FriendSprite
                    kit={catalog?.phenotype.artKit ?? "ginger"}
                    size={48}
                    className="mx-auto h-6 w-6"
                  />
                  <p className="truncate font-display text-[9px] leading-none">{friend.name}</p>
                </li>
              );
            })
          )}
        </ul>
      ) : (
        <ul className="flex flex-nowrap justify-start gap-1.5 overflow-x-auto px-1 pb-1 sm:justify-center">
          {metEntries.map((entry) => {
            const named = friends.find((friend) => friend.friendId === entry.friendId);
            return (
              <li
                key={entry.friendId}
                className={`w-10 min-w-10 shrink-0 overflow-hidden text-center ${
                  named ? "" : "opacity-40"
                }`}
              >
                <FriendSprite kit={entry.phenotype.artKit} size={48} className="mx-auto h-6 w-6" />
                <p className="truncate font-display text-[9px] leading-none">
                  {named ? named.name : "···"}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
