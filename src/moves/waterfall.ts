import { Codex, chance, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const Waterfall: Move = preload.register<Move>((C: Codex) => ({
  name: "Waterfall",
  description: "The user charges at the target and may make it flinch.",
  type: C.Types.Water,
  target: "Any Adjacent",
  category: "Physical",
  pp: 15,
  attack: power(80),
  makesContact: true,
  status: chance(2 / 10, C.Statuses.Flinch),
}));
