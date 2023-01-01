import { Codex, dexBuilder, power, Move, chance } from "../index.ts";

export const Confusion: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Confusion",
  description: "The target is hit by a weak telekinetic force. This may also confuse the target.",
  type: C.Types.Psychic,
  category: "Special",
  pp: 25, // max 40
  attack: power(50),
  target: "Any Adjacent",
  makesContact: false,
  status: chance(1 / 10, C.Statuses.Confusion),
}));
