import { Codex, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const SpikeCannon: Move = preload.register<Move>((C: Codex) => ({
  name: "Spike Cannon",
  description: "Sharp spikes are shot at the target in rapid succession. Two to five times in a row.",
  type: C.Types.Normal,
  target: "Any Adjacent",
  category: "Physical",
  pp: 15,
  attack: power(20),
  makesContact: false,
}));
// TODO multihit moves
