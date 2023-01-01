import { Codex, chance, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const ThunderPunch: Move = preload.register<Move>((C: Codex) => ({
  name: "Thunder Punch",
  description: "The target is punched with an electrified fist. This may also leave the target with paralysis.",
  type: C.Types.Electric,
  category: "Physical",
  pp: 15,
  attack: power(75),
  target: "Any Adjacent",
  makesContact: true,
  status: chance(1 / 10, C.Statuses.Paralysis),
}));
