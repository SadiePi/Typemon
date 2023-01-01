import { Codex, dexBuilder, power, Move, chance } from "../index.ts";

export const IceBeam: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Ice Beam",
  description: "The target is struck with an icy-cold beam of energy. This may also leave the target frozen.",
  type: C.Types.Ice,
  category: "Special",
  pp: 10,
  attack: power(90),
  target: "Any Adjacent",
  makesContact: false,
  status: chance(1 / 10, C.Statuses.Freeze),
}));
