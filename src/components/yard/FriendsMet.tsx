"use client";

import { useState } from "react";
import { FriendSprite } from "@/components/art/Sprite";
import { TUTORIAL_RESCUES, friendById } from "@/lib/collection";
import type { FriendInstance } from "@/lib/types";

export function FriendsMet({ friends }: { friends: FriendInstance[] }) {
  const [tab, setTab] = useState<"friends" | "met">("friends");
  const rescued = new Set(friends.map((friend) => friend.friendId));

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
        <ul className="flex flex-nowrap justify-center gap-0">
          {friends.length === 0 ? (
            <li className="text-xs text-ink/40">No one named yet.</li>
          ) : (
            friends.map((friend) => {
              const catalog = friendById(friend.friendId);
              return (
                <li key={friend.instanceId} className="w-7 min-w-0 text-center">
                  <FriendSprite
                    kit={catalog?.phenotype.artKit ?? "ginger"}
                    size={48}
                    className="mx-auto h-7 w-7"
                  />
                  <p className="truncate font-display text-[9px]">{friend.name}</p>
                </li>
              );
            })
          )}
        </ul>
      ) : (
        <ul className="flex flex-nowrap justify-center gap-0">
          {TUTORIAL_RESCUES.map((entry) => (
            <li
              key={entry.friendId}
              className={`w-7 min-w-0 text-center ${rescued.has(entry.friendId) ? "" : "opacity-40"}`}
            >
              <FriendSprite kit={entry.phenotype.artKit} size={48} className="mx-auto h-7 w-7" />
              <p className="truncate font-display text-[9px]">
                {rescued.has(entry.friendId) ? entry.defaultName : "???"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
