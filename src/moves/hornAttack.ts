import { Codex, dexBuilder, power, Move } from "../index.ts";

export const HornAttack: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Horn Attack",
  description: "The target is jabbed with a sharply pointed horn to inflict damage.",
  type: C.Types.Normal,
  category: "Physical",
  pp: 25,
  attack: power(65),
  target: "Any Adjacent",
  makesContact: true,
}));
