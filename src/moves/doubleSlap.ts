import { Codex, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const DoubleSlap: Move = preload.register<Move>((C: Codex) => ({
  name: "Double Slap",
  description: "The target is slapped repeatedly, back and forth, two to five times in a row.",
  type: C.Types.Normal,
  category: "Physical",
  pp: 10,
  target: "Any Adjacent",
  makesContact: true,

  accuracy: 85,
  attack: power(15),
}));
// TODO multihit
