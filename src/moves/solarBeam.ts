import { Codex, dexBuilder, power, Move } from "../index.ts";

export const SolarBeam: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Solar Beam",
  description: "In this two-turn attack, the user gathers light, then blasts a bundled beam on the next turn.",
  type: C.Types.Grass,
  category: "Special",
  pp: 10, // max 16
  attack: power(120),
  target: "Any Adjacent",
  makesContact: false,
}));
// TODO multiturn moves
