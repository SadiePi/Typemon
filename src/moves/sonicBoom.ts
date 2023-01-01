import { Codex, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const SonicBoom: Move = preload.register<Move>((C: Codex) => ({
  name: "Sonic Boom",
  description: "The target is hit with a destructive shock wave that always inflicts 20 HP damage.",
  type: C.Types.Normal,
  category: "Special",
  pp: 20,
  attack: power(20),
  accuracy: 90,
  target: "Any Adjacent",
  makesContact: false,
  hp: -20,
}));
