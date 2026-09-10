export const SAVE_KEY = "rescue-cats.save.v2";
export const STARTING_LIVES = 3;
export const STARTING_TICKETS = 1;
export const MAX_NAME_LENGTH = 16;
export const PRODUCT_NAME = "Rescue Cats";
export const TEMPLATE_ID = "LT01_teach_slide";

export const ART_KIT_PATH: Record<
  "ginger" | "cream" | "slate" | "calico",
  { loaf48: string; loaf72: string }
> = {
  ginger: {
    loaf48: "/assets/cats/ginger_loaf_48.svg",
    loaf72: "/assets/cats/ginger_loaf_72.svg",
  },
  cream: {
    loaf48: "/assets/cats/cream_loaf_48.svg",
    loaf72: "/assets/cats/cream_loaf_72.svg",
  },
  slate: {
    loaf48: "/assets/cats/slate_loaf_48.svg",
    loaf72: "/assets/cats/slate_loaf_72.svg",
  },
  calico: {
    loaf48: "/assets/cats/calico_loaf_48.svg",
    loaf72: "/assets/cats/calico_loaf_72.svg",
  },
};

export const PUZZLE_CAT_SRC = "/assets/cats/calico_belly_72.svg";
