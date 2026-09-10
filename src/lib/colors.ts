import type { BoardColor } from "./types";

const MAP: Record<string, BoardColor> = {
  orange: "orange",
  color_orange: "orange",
  gray: "gray",
  grey: "gray",
  color_gray: "gray",
  color_grey: "gray",
  black: "black",
  color_black: "black",
};

export function normalizeBoardColor(raw?: string): BoardColor | undefined {
  if (!raw) return undefined;
  return MAP[raw.toLowerCase()];
}
