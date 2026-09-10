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
        <ul className="flex flex-wrap justify-center gap-2">
          {friends.length === 0 ? (
            <li className="text-xs text-ink/40">No one named yet.</li>
          ) : (
            friends.map((friend) => {
              const catalog = friendById(friend.friendId);
              return (
                <li key={friend.instanceId} className="w-14 text-center">
                  <FriendSprite
                    kit={catalog?.phenotype.artKit ?? "ginger"}
                    size={48}
                    className="mx-auto h-10 w-10"
                  />
                  <p className="truncate font-display text-[10px]">{friend.name}</p>
                </li>
              );
            })
          )}
        </ul>
      ) : (
        <ul className="flex flex-wrap justify-center gap-2">
          {TUTORIAL_RESCUES.map((entry) => (
            <li
              key={entry.friendId}
              className={`w-14 text-center ${rescued.has(entry.friendId) ? "" : "opacity-40"}`}
            >
              <FriendSprite kit={entry.phenotype.artKit} size={48} className="mx-auto h-10 w-10" />
              <p className="truncate font-display text-[10px]">
                {rescued.has(entry.friendId) ? entry.defaultName : "???"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
