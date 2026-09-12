"use client";

import { useState } from "react";
import { FriendSprite } from "@/components/art/Sprite";
import { TUTORIAL_RESCUES, friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

export function FriendsMet({ friends }: { friends: FriendInstance[] }) {
  const [tab, setTab] = useState<"friends" | "met">("friends");
  return (
    <div className="px-5 pb-1">
      <div className="mb-2 flex justify-center gap-3 font-display text-xs tracking-wide">
        <button
          type="button"
          onClick={() => setTab("friends")}
          className={tab === "friends" ? "text-ink" : "text-ink/35"}
        >
          Friends
        </button>
        <button
          type="button"
          onClick={() => setTab("met")}
          className={tab === "met" ? "text-ink" : "text-ink/35"}
        >
          Met
        </button>
      </div>
      {tab === "friends" ? (
        <ul className="flex flex-nowrap justify-center gap-0 overflow-x-auto">
          {friends.length === 0 ? (
            <li className="text-xs text-ink/40">Friends show up after a few clears.</li>
          ) : (
            friends.map((friend) => {
              const catalog = friendById(friend.friendId);
              return (
                <li key={friend.instanceId} className="w-6 min-w-0 text-center">
                  <FriendSprite
                    kit={catalog?.phenotype.artKit ?? "ginger"}
                    size={48}
                    className="mx-auto h-6 w-6"
                  />
                  <p className="truncate font-display text-[9px]">{friend.name}</p>
                </li>
              );
            })
          )}
        </ul>
      ) : (
        <ul className="flex flex-nowrap justify-center gap-0 overflow-x-auto">
          {TUTORIAL_RESCUES.map((entry) => {
            const named = friends.find((friend) => friend.friendId === entry.friendId);
            return (
              <li
                key={entry.friendId}
                className={`w-6 min-w-0 text-center ${named ? "" : "opacity-40"}`}
              >
                <FriendSprite kit={entry.phenotype.artKit} size={48} className="mx-auto h-6 w-6" />
                <p className="truncate font-display text-[9px]">
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
