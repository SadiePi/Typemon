import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

export const DragonRush: Move = dexBuilder.register<Move>(() => ({
  name: "Dragon Rush",
  description:
    "The user tackles the target while exhibiting overwhelming menace. This may also make the target flinch.",
  type: C.Types.Dragon,
  category: "Physical",
  pp: 10, // max 16
  attack: power(100),
  accuracy: 75,
  target: "Any Adjacent",
  makesContact: true,
}));
// TODO status consideration (boost against minimize)
