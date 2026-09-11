import type { BoardColor } from "./types";

export const BOARD_COLOR_HEX: Record<BoardColor, string> = {
  orange: "#D38B5D",
  gray: "#5A5E6B",
  black: "#2B2A28",
};

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
