import { Codex, dexBuilder, Codemon, Move } from "../index.ts";

export const SeismicToss: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Seismic Toss",
  description: "The target is thrown using the power of gravity. It inflicts damage equal to the user's level.",
  type: C.Types.Fighting,
  category: "Physical",
  pp: 20,
  target: "Any Adjacent",
  makesContact: true,
  hp: (_, target) => (target instanceof Codemon ? target.experience.level : 0),
}));
