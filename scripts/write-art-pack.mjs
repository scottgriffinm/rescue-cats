import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = "/workspace/public/assets";

function write(rel, contents) {
  const path = join(root, rel);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${contents.trim()}\n`);
}

const calicoBelly72 = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
  <ellipse cx="36" cy="40" rx="22" ry="14" fill="#FFF8F0" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <ellipse cx="44" cy="38" rx="7" ry="5" fill="#E8A89A"/>
  <ellipse cx="26" cy="44" rx="6" ry="4" fill="#5A5E6B"/>
  <path d="M22 30 C20 22 24 20 26 26" fill="#FFF8F0" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M32 28 C31 20 35 18 36 24" fill="#FFF8F0" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M42 28 C43 20 47 18 48 24" fill="#E8A89A" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M52 32 C54 24 58 24 56 30" fill="#FFF8F0" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M20 42 C16 38 16 34 20 36" fill="#E8A89A" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M24 46 C20 48 18 52 22 50" fill="#FFF8F0" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="34" cy="42" r="2" fill="#2B2A28"/>
  <circle cx="44" cy="40" r="2" fill="#2B2A28"/>
  <path d="M56 48 C62 52 64 46 60 44" fill="none" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
</svg>`;

function loaf({ w, h, body, ear, blobs = "" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 48 48" fill="none">
  <ellipse cx="24" cy="28" rx="16" ry="12" fill="${body}" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M12 20 C12 14 16 12 18 16" fill="${ear}" stroke="#2B2A28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M36 20 C36 14 32 12 30 16" fill="${ear}" stroke="#2B2A28" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  ${blobs}
  <circle cx="18" cy="26" r="1.6" fill="#2B2A28"/>
  <circle cx="28" cy="26" r="1.6" fill="#2B2A28"/>
  <path d="M38 32 C42 30 44 34 40 36" fill="none" stroke="#2B2A28" stroke-width="2" stroke-linecap="round"/>
</svg>`;
}

const calicoBlobs = `<ellipse cx="30" cy="30" rx="5" ry="4" fill="#E8A89A"/>
  <ellipse cx="16" cy="32" rx="4.5" ry="3.5" fill="#5A5E6B"/>`;

write("cats/calico_belly_72.svg", calicoBelly72);
write("cats/calico_loaf_48.svg", loaf({ w: 48, h: 48, body: "#FFF8F0", ear: "#E8A89A", blobs: calicoBlobs }));
write("cats/calico_loaf_72.svg", loaf({ w: 72, h: 72, body: "#FFF8F0", ear: "#E8A89A", blobs: calicoBlobs }));
write("cats/cream_loaf_48.svg", loaf({ w: 48, h: 48, body: "#FFF8F0", ear: "#FFF8F0" }));
write("cats/cream_loaf_72.svg", loaf({ w: 72, h: 72, body: "#FFF8F0", ear: "#FFF8F0" }));
write("cats/ginger_loaf_48.svg", loaf({ w: 48, h: 48, body: "#D38B5D", ear: "#B06D4D" }));
write("cats/ginger_loaf_72.svg", loaf({ w: 72, h: 72, body: "#D38B5D", ear: "#B06D4D" }));
write("cats/slate_loaf_48.svg", loaf({ w: 48, h: 48, body: "#5A5E6B", ear: "#4A4D5B" }));
write("cats/slate_loaf_72.svg", loaf({ w: 72, h: 72, body: "#5A5E6B", ear: "#4A4D5B" }));

write(
  "furniture/boxBed.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="72" viewBox="0 0 96 72" fill="none">
  <path d="M12 28 L48 12 L84 28 L48 44 Z" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M12 28 L12 52 L48 68 L48 44 Z" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M84 28 L84 52 L48 68 L48 44 Z" fill="#EDE4D8" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <ellipse cx="48" cy="36" rx="14" ry="8" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2" opacity="0.9"/>
</svg>`,
);

write(
  "furniture/fence.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="48" viewBox="0 0 120 48" fill="none">
  <rect x="8" y="8" width="6" height="32" rx="1.5" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2"/>
  <rect x="56" y="8" width="6" height="32" rx="1.5" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2"/>
  <rect x="104" y="8" width="6" height="32" rx="1.5" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2"/>
  <path d="M10 16 L110 16" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M10 28 L110 28" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
);

write(
  "furniture/postBell.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="96" viewBox="0 0 48 96" fill="none">
  <rect x="20" y="20" width="8" height="64" rx="2" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
  <path d="M24 20 C24 12 36 14 34 24" fill="none" stroke="#2B2A28" stroke-width="2" stroke-linecap="round"/>
  <circle cx="34" cy="28" r="7" fill="#F0B429" stroke="#2B2A28" stroke-width="2.5"/>
  <circle cx="34" cy="30" r="1.5" fill="#2B2A28"/>
  <ellipse cx="24" cy="84" rx="12" ry="4" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
</svg>`,
);

write(
  "furniture/swing.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
  <path d="M20 78 L48 18 L76 78" fill="none" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 78 L48 40 L64 78" fill="none" stroke="#2B2A28" stroke-width="2" stroke-linecap="round" opacity="0.35"/>
  <path d="M40 36 L40 58" stroke="#2B2A28" stroke-width="2" stroke-linecap="round"/>
  <path d="M56 36 L56 58" stroke="#2B2A28" stroke-width="2" stroke-linecap="round"/>
  <rect x="34" y="56" width="28" height="8" rx="2" fill="#E2D4C2" stroke="#2B2A28" stroke-width="2.5"/>
</svg>`,
);

write(
  "ui/btn_primary.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="44" viewBox="0 0 160 44" fill="none">
  <rect x="1.25" y="1.25" width="157.5" height="41.5" rx="10" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2.5"/>
</svg>`,
);

write(
  "ui/bubble_bang.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <ellipse cx="14" cy="12" rx="11" ry="10" fill="#E8A89A" stroke="#2B2A28" stroke-width="2"/>
  <path d="M10 22 L14 18 L18 22" fill="#E8A89A" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
  <path d="M14 6 L14 12" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="14" cy="16" r="1.4" fill="#2B2A28"/>
</svg>`,
);

write(
  "ui/fail_empty.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="none" stroke="#2B2A28" stroke-width="2.5"/>
</svg>`,
);

write(
  "ui/fail_mark.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <circle cx="14" cy="14" r="12" fill="#E8A89A" stroke="#2B2A28" stroke-width="2"/>
  <path d="M9 9 L19 19 M19 9 L9 19" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
);

write(
  "ui/hand_cursor.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <path d="M28 12 C28 8 34 8 34 12 L34 28 L38 26 C40 24 44 26 42 30 L36 40 L36 52 C36 56 32 58 28 56 L18 50 C14 48 14 42 18 40 L24 38 L24 12 Z" fill="#FFFFFF" stroke="#2B2A28" stroke-width="2.5" stroke-linejoin="round"/>
  <rect x="22" y="50" width="16" height="8" rx="2" fill="#2B2A28"/>
</svg>`,
);

write(
  "ui/icon_close.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6 6 L18 18 M18 6 L6 18" stroke="#2B2A28" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
);

write(
  "ui/input_name.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="44" viewBox="0 0 200 44" fill="none">
  <rect x="1.25" y="1.25" width="197.5" height="41.5" rx="8" fill="#F7F0E6" stroke="#2B2A28" stroke-width="2.5"/>
</svg>`,
);

write(
  "ui/star_marigold.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#F0B429" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_heather.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#9A5A8A" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_primrose.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#F2D4A0" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_buttercup.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#F5D030" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_cosmos.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#E8A0C0" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_clematis.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#7EC8E8" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_wisteria.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#B8A0E8" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

write(
  "ui/star_anemone.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path d="M20 4 L24 16 L36 16 L26 24 L30 36 L20 28 L10 36 L14 24 L4 16 L16 16 Z" fill="#F0A8C8" stroke="#2B2A28" stroke-width="2" stroke-linejoin="round"/>
</svg>`,
);

console.log("art pack written");
