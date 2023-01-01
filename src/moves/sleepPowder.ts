import { Codex, Move } from "../index.ts";
import preload from "../preload.ts";

export const SleepPowder: Move = preload.register<Move>((C: Codex) => ({
  name: "Sleep Powder",
  description: "The user scatters a big cloud of sleep-inducing dust around the target.",
  type: C.Types.Grass,
  category: "Status",
  pp: 15, // max 24
  accuracy: 75,
  target: "Any Adjacent",
  makesContact: false,
  status: C.Statuses.Sleep,
}));
