import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

export const Lick: Move = dexBuilder.register<Move>(() => ({
  name: "Lick",
  description: "The target is licked with a long tongue, causing damage. It may also leave the target with paralysis.",
  type: C.Types.Ghost,
  target: "Any Adjacent",
  category: "Physical",
  pp: 30,
  attack: power(30),
  makesContact: true,
  status: [3 / 10, C.Statuses.Paralysis],
}));
