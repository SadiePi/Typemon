import { Codex, dexBuilder, power, Move } from "../index.ts";

export const DragonBreath: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Dragon Breath",
  description: "The user exhales a mighty gust that inflicts damage. This may also leave the target with paralysis.",
  type: C.Types.Dragon,
  category: "Special",
  pp: 20,
  attack: power(60),
  target: "Any Adjacent",
  makesContact: false,
  status: [C.Statuses.Paralysis, 3 / 10],
}));
