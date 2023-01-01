// TODO should this all be in /demo/traditional/?

export * from "./core/index.ts";
import preload from "./preload.ts";

// const getter =
//   <T>(obj: Record<string, T>) =>
//   (name: string): T | undefined =>
//     obj[name as keyof typeof obj];

import * as Abilities from "./abilities/index.ts";
// import * as Battles from "./battles/index.ts";
import * as Experience from "./experience/index.ts";
import * as Genders from "./genders/index.ts";
import * as Items from "./items/index.ts";
import * as Natures from "./natures/index.ts";

import * as Types from "./types/index.ts";
import * as Statuses from "./statuses/index.ts";
import * as Moves from "./moves/index.ts";
import * as Species from "./species/index.ts";

const C = {
  Abilities,
  // Battles,
  Experience,
  Genders,
  Items,
  Moves,
  Natures,
  Species,
  Statuses,
  Types,
} as const;
export type Codex = typeof C;

preload.build(C);

export default C;
