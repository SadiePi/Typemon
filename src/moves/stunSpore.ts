import { Codex, Move } from "../index.ts";
import preload from "../preload.ts";

export const StunSpore: Move = preload.register<Move>((C: Codex) => ({
  name: "Stun Spore",
  description: "The user scatters a cloud of numbing powder that paralyzes the target.",
  type: C.Types.Grass,
  category: "Status",
  pp: 30, // max 48
  accuracy: 75,
  target: "Any Adjacent",
  makesContact: false,
  status: C.Statuses.Paralysis,
}));
