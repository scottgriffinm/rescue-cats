import teach from "../../data/levels/L01-L03.json";
import l03 from "../../data/levels/L03.json";
import chapter2 from "../../data/levels/CHAPTER2_PUZZLE_L04_L09.json";
import chapter3 from "../../data/levels/CHAPTER3_PUZZLE_L11_L12.json";
import chapter3b from "../../data/levels/CHAPTER3_PUZZLE_L13_L15.json";
import chapter3c from "../../data/levels/CHAPTER3_PUZZLE_L16_L18.json";
import chapter3d from "../../data/levels/CHAPTER3_PUZZLE_L19_L21.json";
import chapter3e from "../../data/levels/CHAPTER3_PUZZLE_L22_L24.json";
import chapter3f from "../../data/levels/CHAPTER3_PUZZLE_L25_L27.json";
import chapter3g from "../../data/levels/CHAPTER3_PUZZLE_L28_L30.json";
import chapter3h from "../../data/levels/CHAPTER3_PUZZLE_L31_L33.json";
import chapter3i from "../../data/levels/CHAPTER3_PUZZLE_L34_L36.json";
import chapter3j from "../../data/levels/CHAPTER3_PUZZLE_L37_L39.json";
import chapter3k from "../../data/levels/CHAPTER3_PUZZLE_L40_L42.json";
import chapter3l from "../../data/levels/CHAPTER3_PUZZLE_L43_L45.json";
import chapter3m from "../../data/levels/CHAPTER3_PUZZLE_L46_L48.json";
import chapter3n from "../../data/levels/CHAPTER3_PUZZLE_L49_L51.json";
import chapter3o from "../../data/levels/CHAPTER3_PUZZLE_L52_L54.json";
import chapter3p from "../../data/levels/CHAPTER3_PUZZLE_L55_L57.json";
import chapter3q from "../../data/levels/CHAPTER3_PUZZLE_L58_L60.json";
import chapter3r from "../../data/levels/CHAPTER3_PUZZLE_L61_L63.json";
import chapter4a from "../../data/levels/CHAPTER4_PUZZLE_L64_L66.json";
import chapter4b from "../../data/levels/CHAPTER4_PUZZLE_L67_L69.json";
import chapter4c from "../../data/levels/CHAPTER4_PUZZLE_L70_L72.json";
import chapter4d from "../../data/levels/CHAPTER4_PUZZLE_L73_L75.json";
import chapter4e from "../../data/levels/CHAPTER4_PUZZLE_L76_L78.json";
import chapter4f from "../../data/levels/CHAPTER4_PUZZLE_L79_L81.json";
import chapter4g from "../../data/levels/CHAPTER4_PUZZLE_L82_L84.json";
import chapter4h from "../../data/levels/CHAPTER4_PUZZLE_L85_L87.json";
import chapter4i from "../../data/levels/CHAPTER4_PUZZLE_L88_L90.json";
import chapter4j from "../../data/levels/CHAPTER4_PUZZLE_L91_L93.json";
import chapter4k from "../../data/levels/CHAPTER4_PUZZLE_L94_L96.json";
import chapter4l from "../../data/levels/CHAPTER4_PUZZLE_L97_L99.json";
import chapter4m from "../../data/levels/CHAPTER4_PUZZLE_L100_L102.json";
import chapter4n from "../../data/levels/CHAPTER4_PUZZLE_L103_L105.json";
import chapter4o from "../../data/levels/CHAPTER4_PUZZLE_L106_L108.json";
import chapter4p from "../../data/levels/CHAPTER4_PUZZLE_L109_L111.json";
import chapter4q from "../../data/levels/CHAPTER4_PUZZLE_L112_L114.json";
import chapter4r from "../../data/levels/CHAPTER4_PUZZLE_L115_L117.json";
import chapter4s from "../../data/levels/CHAPTER4_PUZZLE_L118_L120.json";
import chapter4t from "../../data/levels/CHAPTER4_PUZZLE_L121_L123.json";
import chapter4u from "../../data/levels/CHAPTER4_PUZZLE_L124_L126.json";
import chapter4v from "../../data/levels/CHAPTER4_PUZZLE_L127_L129.json";
import chapter4w from "../../data/levels/CHAPTER4_PUZZLE_L130_L132.json";
import chapter4x from "../../data/levels/CHAPTER4_PUZZLE_L133_L135.json";
import chapter4y from "../../data/levels/CHAPTER4_PUZZLE_L136_L138.json";
import chapter4z from "../../data/levels/CHAPTER4_PUZZLE_L139_L141.json";
import chapter4aa from "../../data/levels/CHAPTER4_PUZZLE_L142_L144.json";
import chapter4ab from "../../data/levels/CHAPTER4_PUZZLE_L145_L147.json";
import chapter4ac from "../../data/levels/CHAPTER4_PUZZLE_L148_L150.json";
import chapter4ad from "../../data/levels/CHAPTER4_PUZZLE_L151_L153.json";
import chapter4ae from "../../data/levels/CHAPTER4_PUZZLE_L154_L156.json";
import chapter4af from "../../data/levels/CHAPTER4_PUZZLE_L157_L159.json";
import chapter4ag from "../../data/levels/CHAPTER4_PUZZLE_L160_L162.json";
import chapter4ah from "../../data/levels/CHAPTER4_PUZZLE_L163_L165.json";
import chapter4ai from "../../data/levels/CHAPTER4_PUZZLE_L166_L168.json";
import chapter4aj from "../../data/levels/CHAPTER4_PUZZLE_L169_L171.json";
import chapter4ak from "../../data/levels/CHAPTER4_PUZZLE_L172_L174.json";
import budgets from "../../data/levels/move_budget_L01-L30.json";
import { normalizeBoardColor } from "./colors";
import { TEMPLATE_ID } from "./constants";
import type { Level } from "./types";

const HEADLINES: Record<string, string> = {
  L1: "STRAIGHT SHOT",
  L2: "GO AROUND",
  L3: "WALL AS BRAKE",
  L4: "TWO FRIENDS",
  L5: "COLLISION ORDER",
  L6: "BIGGER YARD",
  L7: "TIGHT ROUTES",
  L8: "MY GATE ONLY",
  L9: "SOFT LOCK",
  L11: "COLOR BRAKE",
  L12: "BRAKE FIRST",
  L13: "STEP OFF",
  L14: "NEAR BRAKE",
  L15: "THREAD BOTTOM",
  L16: "STAY BRAKE",
  L17: "UNDER BRAKE",
  L18: "ROW BRAKE",
  L19: "OVER BRAKE",
  L20: "SIDE BRAKE",
  L21: "LANE THREAD",
  L22: "LEFT BRAKE",
  L23: "CORNER BRAKE",
  L24: "ARC BRAKE",
  L25: "COLUMN SLIP",
  L26: "THREAD EAST",
  L27: "THREAD BLACK",
  L28: "WEST BRAKE",
  L29: "PAIR CUT",
  L30: "THREAD SOUTH",
  L31: "WEST SLIP",
  L32: "THREAD NORTH",
  L33: "THREAD WEST",
  L34: "WALL SEAL",
  L35: "CLEAR FIRST",
  L36: "HIGH BRAKE",
  L37: "LOW BRAKE",
  L38: "EAST SEAL",
  L39: "VACATE EAST",
  L40: "SOUTH SEAL",
  L41: "SOUTH SLIP",
  L42: "EAST BRAKE",
  L43: "THREAD WEST",
  L44: "NORTH SEAL",
  L45: "NORTH SLIP",
  L46: "TWIN PEG",
  L47: "SIDE SEAL",
  L48: "VACATE ROW",
  L49: "STEP CUT",
  L50: "COMMIT THROUGH",
  L51: "OFFSET BRAKE",
  L52: "GATE WEAVE",
  L53: "CATCH BAR",
  L54: "SPLIT LATCH",
  L55: "HOOK ROUTE",
  L56: "COLOR FORK",
  L57: "CORNER BRACE",
  L58: "PINCH ROUTE",
  L59: "SKEW GATE",
  L60: "POST BRACE",
  L61: "SPAN CUT",
  L62: "KNIGHT CUT",
  L63: "FAR PEG",
  L64: "CURL PATH",
  L65: "WEDGE GAP",
  L66: "PEG SPLIT",
  L67: "RIPPLE CUT",
  L68: "MOSS GAP",
  L69: "INK STOP",
  L70: "SHOAL CUT",
  L71: "ANEMONE GAP",
  L72: "HARBOR STOP",
  L73: "GLINT CUT",
  L74: "FERN GAP",
  L75: "EMBER STOP",
  L76: "CEDAR CUT",
  L77: "NEEDLE GAP",
  L78: "RESIN STOP",
  L79: "NIB CUT",
  L80: "VELLUM GAP",
  L81: "STAMP STOP",
  L82: "TRUFFLE CUT",
  L83: "FOAM GAP",
  L84: "BITTER STOP",
  L85: "UMBER CUT",
  L86: "TWILL GAP",
  L87: "FLAX STOP",
  L88: "NUTMEG CUT",
  L89: "CUMIN GAP",
  L90: "SAGE STOP",
  L91: "MARJORAM CUT",
  L92: "FENNEL GAP",
  L93: "LOVAGE STOP",
  L94: "CHIVE CUT",
  L95: "SAVORY GAP",
  L96: "DILL STOP",
  L97: "KELP CUT",
  L98: "NORI GAP",
  L99: "BRINE STOP",
  L100: "GREENGAGE CUT",
  L101: "SLOE GAP",
  L102: "MEDLAR STOP",
  L103: "FENCE CUT",
  L104: "BURR GAP",
  L105: "PERCH STOP",
  L106: "VINE CUT",
  L107: "THORN GAP",
  L108: "NEST STOP",
  L109: "RAIL CUT",
  L110: "SHADE GAP",
  L111: "PORCH STOP",
  L112: "STEM CUT",
  L113: "STING GAP",
  L114: "UNDER STOP",
  L115: "DOCK CUT",
  L116: "ZEST GAP",
  L117: "STOOP STOP",
  L118: "FROND CUT",
  L119: "ANISE GAP",
  L120: "BREEZE STOP",
  L121: "FRILL CUT",
  L122: "LACE GAP",
  L123: "SILL STOP",
  L124: "RIB CUT",
  L125: "RIB GAP",
  L126: "BED STOP",
  L127: "CURL CUT",
  L128: "SPRIG GAP",
  L129: "GARNISH STOP",
  L130: "SEED CUT",
  L131: "FRONDLET GAP",
  L132: "LEDGE STOP",
  L133: "SPEAR CUT",
  L134: "BITTERS GAP",
  L135: "CRUET STOP",
  L136: "STONE CUT",
  L137: "WILD GAP",
  L138: "PIZZA STOP",
  L139: "SOFTLEAF CUT",
  L140: "DUSTY GAP",
  L141: "PEEL STOP",
  L142: "PINCH CUT",
  L143: "TWIG GAP",
  L144: "JAR STOP",
  L145: "NEEDLE CUT",
  L146: "WOODY GAP",
  L147: "POT STOP",
  L148: "CHILL CUT",
  L149: "FROST GAP",
  L150: "TIN STOP",
  L151: "NIP CUT",
  L152: "DREAM GAP",
  L153: "POUCH STOP",
  L154: "BLOOM CUT",
  L155: "CALM GAP",
  L156: "BUNDLE STOP",
  L157: "DAISY CUT",
  L158: "TEA GAP",
  L159: "CUP STOP",
  L160: "CITRUS CUT",
  L161: "EARL GAP",
  L162: "SAUCER STOP",
  L163: "BLOSSOM CUT",
  L164: "HONEY GAP",
  L165: "BLOOM STOP",
  L166: "CREAM CUT",
  L167: "BLUSH GAP",
  L168: "BOWL STOP",
  L169: "ROSELLE CUT",
  L170: "PUNCH GAP",
  L171: "SIP STOP",
  L172: "SNOW DRIFT",
  L173: "VELVET LATCH",
  L174: "DISH CLAIM",
};

const HINTS: Record<string, string> = {
  L1: "One idea: slide south. They stop in the little house.",
  L2: "One idea: walls block. Slide around — the edge behind the house is the brake.",
  L3: "The wall south of the house brakes you on the gate. Side routes slide through.",
  L4: "Two friends, two houses. Slide each down.",
  L5: "Order matters — vacate the column before your friend can land.",
  L6: "Bigger board. Pillars force a longer route.",
  L7: "Crossed houses. Tight budget.",
  L8: "Orange for orange, gray for gray.",
  L9: "Wrong house first soft-locks — unique gates off L7.",
  L11: "Park a friend past the house. Matching coats still slide through.",
  L12: "Brake first — hold the setup cell before the house.",
  L13: "Home is not done — step off the edge house to brake the mid one.",
  L14: "Near brake — closer stop than L12.",
  L15: "Park past the mid house, then thread the bottom wall.",
  L16: "Stay brake — they are already the stop.",
  L17: "Under brake — cell under the house, not the far edge.",
  L18: "Row brake — park the row, then the next cell.",
  L19: "Over brake — cell above; south-first overshoots.",
  L20: "Side brake — east stop; slide-through misses.",
  L21: "Lane thread — brake the south lane, then west.",
  L22: "Left brake — west stop; slide-through misses.",
  L23: "Corner brake — corner cell above the house.",
  L24: "Arc into the gray stop — mid-column parks sail past it.",
  L25: "Slip the column — leave before the solid lands.",
  L26: "Park above, then thread the east lane. The west wall pair is a dead gap.",
  L27: "Black is a third lock color. Park east of the house, then thread south.",
  L28: "West brake — off L27 east park habits.",
  L29: "Pair-cut orange/black — not a hold-north retread.",
  L30: "Thread onto the south black solid. Hold-south alone is not enough.",
  L31: "West slip off the black solid — vacate-west farm killed.",
  L32: "Park above, then thread north. L31's east park slides through.",
  L33: "Sit past the house, then park west. North-first habits miss the stop.",
  L34: "Seal on the wall — gray brake, unique pair.",
  L35: "Clear first, then the solid — unique gates off L23.",
  L36: "High brake — sit past south, then above.",
  L37: "Low brake — sit past north, then below.",
  L38: "East seal on black — unique pair, not a farm twin.",
  L39: "Leave the house row, then the east solid. L38's solid-east slide goes through.",
  L40: "South seal — gray brake off the old farm spine.",
  L41: "South slip — leave before the black solid.",
  L42: "East brake — east of mid house; vacate-south misses.",
  L43: "Thread west through the corridor. Park-east habits from L42 miss the gap.",
  L44: "North seal — black brake, unique pair.",
  L45: "Slip the column first — then the north solid catches you.",
  L46: "Twin peg — two distant brakes, not Dual Brake farm.",
  L47: "Side seal west — unique pair off L46.",
  L48: "Leave the house row first — then the west solid. Sliding the solid early sails through.",
  L49: "Step cut — not Color Step’s farm twin.",
  L50: "Commit through the corridor — unique gates off L30.",
  L51: "Offset brakes — houses are not adjacent. Dual-cross habits miss the gap.",
  L52: "Weave through offset gray gates. Thread-north habits miss the weave.",
  L53: "Catch bar on gray — latch without the farm pair.",
  L54: "Split latch — houses are not adjacent. Swap/Dual habits miss the gap.",
  L55: "Hook the gray route. Rim-latch / Color-step habits miss the hook.",
  L56: "Color fork — pick the gray branch. Rim-latch habits miss the fork.",
  L57: "Corner brace on far corners — not Split Latch twin. Dual habits miss.",
  L58: "Pinch the gray route. Corner-brace habits miss the pinch.",
  L59: "Skew the orange/gray houses — not Color Step’s vertical twin.",
  L60: "Post brace on far corners (0,0)/(5,5) — not the (1,1)/(4,4) twin.",
  L61: "Span cut across the gray gap. Post-brace habits miss the cut.",
  L62: "Knight-step the orange/gray houses — not Color Fork’s same-row twin.",
  L63: "Far peg on the black house. Offset — Dual habits miss.",
  L64: "Curl path onto orange — not a Span Cut twin.",
  L65: "Wedge gap — gray seats east, not an L64 translate.",
  L66: "Peg split on far corners — dual habits miss.",
  L67: "Ripple cut — slide the gray before the orange docks.",
  L68: "Moss gap — leave the seam, then commit.",
  L69: "Ink stop on the black house — offset habits miss.",
  L70: "Shoal cut — shoal the route onto orange.",
  L71: "Anemone gap — gray seats after the Coral beat.",
  L72: "Harbor stop — orange/black harbor; not adjacent.",
  L73: "Glint cut — glint the route onto orange.",
  L74: "Fern gap — ferned gray gap after the Blue beat.",
  L75: "Ember stop — orange/black ember stops; not adjacent.",
  L76: "Cedar cut — cedar the route onto orange.",
  L77: "Needle gap — orange house off the Cedar (3,0) seat.",
  L78: "Resin stop — orange/black resin stops; not a Step Off twin.",
  L79: "Nib cut — nib the route onto orange.",
  L80: "Vellum gap — vellum gray gap after the Cocoa beat.",
  L81: "Stamp stop — orange/black stamp stops; not adjacent.",
  L82: "Truffle cut — truffle the route onto orange.",
  L83: "Foam gap — foam gray gap after the Cocoa beat.",
  L84: "Bitter stop — orange/black bitter stops; not adjacent.",
  L85: "Umber cut — umber the route onto orange.",
  L86: "Twill gap — twill black gap after the Linen beat.",
  L87: "Flax stop — orange/gray flax stops; not adjacent.",
  L88: "Nutmeg cut — nutmeg the route onto orange.",
  L89: "Cumin gap — cumin black gap after the Ivory beat.",
  L90: "Sage stop — orange/gray sage stops; not adjacent.",
  L91: "Marjoram cut — marjoram the route onto orange.",
  L92: "Fennel gap — fennel black gap after the Clay beat.",
  L93: "Lovage stop — orange/gray lovage stops; not Step Off (4,1).",
  L94: "Chive cut — chive the route onto orange; gray off Lovage (0,2).",
  L95: "Savory gap — savory black gap after the Basil beat.",
  L96: "Dill stop — orange/gray dill stops; not adjacent.",
  L97: "Kelp cut — kelp the route onto orange; gray off Dill (2,4).",
  L98: "Nori gap — nori black gap after the Fig beat; off Chive (4,5).",
  L99: "Brine stop — orange/gray brine stops; off Chive (4,5) / Lovage (0,2).",
  L100: "Greengage cut — greengage the route onto orange; habit-break Cut.",
  L101: "Sloe gap — sloe black gap after the Plum beat.",
  L102: "Medlar stop — orange/gray medlar stops; off Nori (5,5); not Hold*/Park*.",
  L103: "Fence cut — cut around the fence onto orange; not Greengage same-column.",
  L104: "Burr gap — burr black gap after the Thistle beat; black threads first.",
  L105: "Perch stop — orange/gray perch stops; off Medlar (5,1)/(1,2); not Hold*/Park*.",
  L106: "Vine cut — stacked column cut onto orange; not Fence horizontal brake.",
  L107: "Thorn gap — thorn black gap after the Briar beat; orange vacates first.",
  L108: "Nest stop — orange/gray nest stops; off Perch (5,0)/(0,5); not Hold*/Park*.",
  L109: "Rail cut — gray sits mid-rail; orange rails south then cuts; not Vine stacked column.",
  L110: "Shade gap — orange south-west first; black threads the shade after; not Thorn orange-north.",
  L111: "Porch stop — column porch seats; off Nest same-row; not Hold*/Park*.",
  L112: "Stem cut — orange west then south; gray threads the stem; not Rail south-then-cut.",
  L113: "Sting gap — orange west-north first; black stings after; not Shade orange-south-west.",
  L114: "Under stop — diagonal under-rail seats; off Porch column; not Hold*/Park*.",
  L115: "Dock cut — orange east first; gray docks after; not Stem west-then-south.",
  L116: "Zest gap — orange east then black threads; not Sting west-north, not Shade south-west.",
  L117: "Stoop stop — offset stoop seats; off Under diagonal; not Hold*/Park*.",
  L118: "Frond cut — gray east first; orange cuts after; not Dock orange-east.",
  L119: "Anise gap — black east then orange threads; not Zest orange-east, not Sting west-north.",
  L120: "Breeze stop — breeze-offset seats; off Stoop (1,1); not Hold*/Park*.",
  L121: "Frill cut — orange north first; gray cuts after; not Frond gray-east, not Dock orange-east.",
  L122: "Lace gap — orange south then black threads; not Anise black-east, not Zest orange-east.",
  L123: "Sill stop — sill-offset seats; off Breeze (1,-2); off Stoop (1,1); not Hold*/Park*.",
  L124: "Rib cut — gray north first; orange cuts after; not Frill orange-north, not Stem west-then-south.",
  L125: "Rib gap — orange east then black threads; not Lace orange-south, not Anise black-east.",
  L126: "Bed stop — bed-offset seats; off Sill (1,3); off Breeze (1,-2); off Stoop (1,1); not Hold*/Park*.",
  L127: "Curl cut — orange south first; gray curls after; not Rib gray-north, not Frill orange-north.",
  L128: "Sprig gap — orange north then black threads; not Rib orange-east, not Lace orange-south.",
  L129: "Garnish stop — garnish-offset seats; off Bed (2,1); off Sill (1,3); off Breeze (1,-2); not Hold*/Park*.",
  L130: "Seed cut — gray south first; orange cuts after; not Curl orange-south, not Rib gray-north, not Frill orange-north.",
  L131: "Frondlet gap — black west then orange threads; not Sprig orange-north, not Rib orange-east, not Lace orange-south.",
  L132: "Ledge stop — ledge-offset seats; off Garnish (2,4); off Bed (2,1); off Sill (1,3); not Hold*/Park*.",
  L133: "Spear cut — orange west first; gray cuts after; not Seed gray-south, not Curl orange-south, not Frill orange-north.",
  L134: "Bitters gap — black south then orange threads; not Frondlet black-west, not Sprig orange-north, not Lace orange-south.",
  L135: "Cruet stop — cruet-offset seats; off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L136: "Stone cut — gray east first; orange cuts after; not Spear orange-west, not Seed gray-south, not Curl orange-south, not Frill orange-north.",
  L137: "Wild gap — orange west then black threads; not Bitters black-south, not Frondlet black-west, not Sprig orange-north, not Lace orange-south.",
  L138: "Pizza stop — pizza-offset seats; off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L139: "Softleaf cut — orange east first; gray cuts after; not Stone gray-east, not Spear orange-west, not Seed gray-south, not Curl orange-south, not Frill orange-north.",
  L140: "Dusty gap — black north then orange threads; not Wild orange-west, not Bitters black-south, not Frondlet black-west, not Sprig orange-north, not Lace orange-south.",
  L141: "Peel stop — peel-offset seats; off Pizza (1,1); off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L142: "Pinch cut — gray west first; orange cuts after; not Softleaf orange-east, not Stone gray-east, not Spear orange-west, not Seed gray-south, not Curl orange-south, not Frill orange-north.",
  L143: "Twig gap — black east then orange threads; not Dusty black-north, not Wild orange-west, not Bitters black-south, not Frondlet black-west, not Sprig orange-north, not Lace orange-south.",
  L144: "Jar stop — jar-offset seats; off Peel (0,1)/(4,4); off Pizza (1,1)/(0,2); off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L145: "Needle cut — orange north first; gray cuts after; not Pinch gray-west, not Softleaf orange-east, not Stone gray-east, not Spear orange-west.",
  L146: "Woody gap — orange south then black threads; not Twig black-east, not Dusty black-north, not Wild orange-west, not Bitters black-south.",
  L147: "Pot stop — pot-offset seats; off Jar (3,2)/(5,4); off Peel (0,1)/(4,4); off Pizza (1,1)/(0,2); off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L148: "Chill cut — gray north first; orange cuts after; not Needle orange-north, not Pinch gray-west, not Softleaf orange-east, not Stone gray-east, not Spear orange-west.",
  L149: "Frost gap — orange east then black threads; not Woody orange-south, not Twig black-east, not Dusty black-north, not Wild orange-west, not Bitters black-south.",
  L150: "Tin stop — tin-offset seats; off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); off Peel (0,1)/(4,4); off Pizza (1,1)/(0,2); off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L151: "Nip cut — gray south first; orange cuts after; not Chill gray-north, not Needle orange-north, not Pinch gray-west, not Softleaf orange-east, not Stone gray-east, not Spear orange-west.",
  L152: "Dream gap — orange north then black threads; not Frost orange-east, not Woody orange-south, not Twig black-east, not Dusty black-north, not Wild orange-west, not Bitters black-south.",
  L153: "Pouch stop — pouch-offset seats; off Tin (0,3)/(3,5); off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); off Peel (0,1)/(4,4); off Pizza (1,1)/(0,2); off Cruet (1,4); off Ledge (1,5); off Garnish (2,4); off Bed (3,1); not Hold*/Park*.",
  L154: "Bloom cut — orange south first; gray cuts after; not Nip gray-south, not Chill gray-north, not Needle orange-north, not Pinch gray-west, not Softleaf orange-east, not Stone gray-east, not Spear orange-west.",
  L155: "Calm gap — black west then orange threads; not Dream orange-north, not Frost orange-east, not Woody orange-south, not Twig black-east, not Dusty black-north, not Wild orange-west, not Bitters black-south.",
  L156: "Bundle stop — bundle-offset seats; off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); not Hold*/Park*.",
  L157: "Daisy cut — orange north first; gray cuts after; not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L158: "Tea gap — black north then orange threads; not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L159: "Cup stop — cup-offset seats; off Bundle (2,4)/(1,1)/(2,1)/(4,5); off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); not Hold*/Park*.",
  L160: "Citrus cut — orange east first; gray cuts after; not Daisy orange-north, not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L161: "Earl gap — black east then orange threads; not Tea black-north, not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L162: "Saucer stop — saucer-offset seats; off Cup (4,4)/(5,2)/(3,1)/(1,5); off Bundle (2,4)/(1,1)/(2,1)/(4,5); off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); not Hold*/Park*.",
  L163: "Blossom cut — gray west first; orange cuts after; not Citrus orange-east, not Daisy orange-north, not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L164: "Honey gap — orange west then black threads; not Earl black-east, not Tea black-north, not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L165: "Bloom stop — bloom-offset seats; off Saucer (2,0)/(2,5)/(5,3)/(1,2); off Cup (4,4)/(5,2)/(3,1)/(1,5); off Bundle (2,4)/(1,1)/(2,1)/(4,5); off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); off Pot (1,3)/(2,2); off Jar (3,2)/(5,4); not Hold*/Park*.",
  L166: "Cream cut — orange west first; gray cuts after; not Blossom gray-west, not Citrus orange-east, not Daisy orange-north, not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L167: "Blush gap — black south then orange threads; not Honey orange-west, not Earl black-east, not Tea black-north, not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L168: "Bowl stop — bowl-offset seats; off Bloom (0,5)/(5,0)/(1,4)/(5,1); off Saucer (2,0)/(2,5)/(5,3)/(1,2); off Cup (4,4)/(5,2)/(3,1)/(1,5); off Bundle (2,4)/(1,1)/(2,1)/(4,5); off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); not Hold*/Park*.",
  L169: "Roselle cut — gray east first; orange cuts after; not Cream orange-west, not Blossom gray-west, not Citrus orange-east, not Daisy orange-north, not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L170: "Punch gap — orange south then black threads; not Blush black-south, not Honey orange-west, not Earl black-east, not Tea black-north, not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L171: "Sip stop — cup-sip seats; off Bowl (3,2)/(3,3)/(0,1)/(1,3); off Bloom (0,5)/(5,0)/(1,4)/(5,1); off Saucer (2,0)/(2,5)/(5,3)/(1,2); off Cup (4,4)/(5,2)/(3,1)/(1,5); off Bundle (2,4)/(1,1)/(2,1)/(4,5); off Pouch (4,2)/(4,0)/(4,1)/(0,4); off Tin (0,3)/(3,5); not Hold*/Park*.",
  L172: "Snow drift — gray west first; orange drifts after; not Roselle gray-east, not Cream orange-west, not Citrus orange-east, not Daisy orange-north, not Bloom orange-south, not Nip gray-south, not Chill gray-north.",
  L173: "Velvet latch — black north then orange threads; not Punch orange-south, not Blush black-south, not Honey orange-west, not Earl black-east, not Calm black-west, not Dream orange-north, not Frost orange-east.",
  L174: "Dish claim — dish-claim seats; off Sip (2,2)/(5,4)/(2,3)/(0,2); off Bowl (3,2)/(3,3)/(0,1)/(1,3); off Bloom (0,5)/(5,0)/(1,4)/(5,1); off Saucer (2,0)/(2,5)/(5,3)/(1,2); off Cup (4,4)/(5,2)/(3,1)/(1,5); not Hold*/Park*.",
};

type RawLevel = {
  id: string;
  name: string;
  width: number;
  height: number;
  moveBudget: number;
  nudges?: number;
  colorLocks?: boolean;
  walls?: { x: number; y: number }[];
  blockers?: { x: number; y: number }[];
  cats: { id: string; x: number; y: number; color?: string; colorId?: string }[];
  gates: { id: string; x: number; y: number; color?: string; colorId?: string }[];
  teach?: string;
  templateId?: string;
};

function levelNumberFromId(id: string, fallbackIndex: number) {
  const match = /^L(\d+)$/i.exec(id);
  if (!match) return fallbackIndex + 1;
  return Number(match[1]);
}

function hydrate(raw: RawLevel, index: number): Level {
  const budgetRow = budgets.levels.find((row) => row.id === raw.id);
  return {
    id: raw.id,
    number: levelNumberFromId(raw.id, index),
    name: raw.name,
    headline: HEADLINES[raw.id] ?? raw.name.toUpperCase(),
    hint: HINTS[raw.id] ?? "Slide every cat onto a yard gate.",
    templateId: raw.templateId ?? TEMPLATE_ID,
    width: raw.width,
    height: raw.height,
    moveBudget: budgetRow?.moveBudget ?? raw.moveBudget,
    nudges: budgetRow?.nudges ?? raw.nudges ?? 0,
    colorLocks: budgetRow?.colorLocks ?? raw.colorLocks ?? false,
    walls: raw.walls ?? [],
    blockers: raw.blockers ?? [],
    cats: raw.cats.map((cat) => ({
      ...cat,
      color: normalizeBoardColor(cat.colorId ?? cat.color),
    })),
    gates: raw.gates.map((gate) => ({
      ...gate,
      color: normalizeBoardColor(gate.colorId ?? gate.color),
    })),
    teach: raw.teach,
  };
}

const authored = [
  ...teach.levels.filter((level) => level.id !== "L3"),
  l03,
  ...chapter2.levels,
  ...chapter3.levels,
  ...chapter3b.levels,
  ...chapter3c.levels,
  ...chapter3d.levels,
  ...chapter3e.levels,
  ...chapter3f.levels,
  ...chapter3g.levels,
  ...chapter3h.levels,
  ...chapter3i.levels,
  ...chapter3j.levels,
  ...chapter3k.levels,
  ...chapter3l.levels,
  ...chapter3m.levels,
  ...chapter3n.levels,
  ...chapter3o.levels,
  ...chapter3p.levels,
  ...chapter3q.levels,
  ...chapter3r.levels,
  ...chapter4a.levels,
  ...chapter4b.levels,
  ...chapter4c.levels,
  ...chapter4d.levels,
  ...chapter4e.levels,
  ...chapter4f.levels,
  ...chapter4g.levels,
  ...chapter4h.levels,
  ...chapter4i.levels,
  ...chapter4j.levels,
  ...chapter4k.levels,
  ...chapter4l.levels,
  ...chapter4m.levels,
  ...chapter4n.levels,
  ...chapter4o.levels,
  ...chapter4p.levels,
  ...chapter4q.levels,
  ...chapter4r.levels,
  ...chapter4s.levels,
  ...chapter4t.levels,
  ...chapter4u.levels,
  ...chapter4v.levels,
  ...chapter4w.levels,
  ...chapter4x.levels,
  ...chapter4y.levels,
  ...chapter4z.levels,
  ...chapter4aa.levels,
  ...chapter4ab.levels,
  ...chapter4ac.levels,
  ...chapter4ad.levels,
  ...chapter4ae.levels,
  ...chapter4af.levels,
  ...chapter4ag.levels,
  ...chapter4ah.levels,
  ...chapter4ai.levels,
  ...chapter4aj.levels,
  ...chapter4ak.levels,
] as RawLevel[];

export const LEVELS: Level[] = authored.map(hydrate);

/** Highest campaign L-number (L10 off-path does not shrink this). */
export const CAMPAIGN_LEVEL_COUNT = LEVELS.reduce(
  (max, level) => Math.max(max, level.number),
  0,
);

export const MOVE_BUDGET_TABLE = budgets.levels;

export function getLevel(id: string) {
  return LEVELS.find((level) => level.id === id);
}

/** Next board on the campaign path (array order — L9 → L11, never phantom L10). */
export function nextCampaignLevel(levelId: string) {
  const index = LEVELS.findIndex((level) => level.id === levelId);
  if (index < 0) return undefined;
  return LEVELS[index + 1];
}

export function nextLevel(completedIds: string[]) {
  return LEVELS.find((level) => !completedIds.includes(level.id)) ?? LEVELS[LEVELS.length - 1];
}
