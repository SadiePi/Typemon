import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

export const Cut: Move = dexBuilder.register<Move>(() => ({
  name: "Cut",
  description: "The target is cut with a scythe or claw.",
  type: C.Types.Normal,
  category: "Physical",
  pp: 30,
  attack: power(50),
  accuracy: 95,
  target: "Any Adjacent",
  makesContact: true,
}));
