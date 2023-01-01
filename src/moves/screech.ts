import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

// why isn't this a status move apdabiouaboduiboiuafb
export const Screech: Move = dexBuilder.register<Move>(() => ({
  name: "Screech",
  description: "An earsplitting screech harshly lowers the target's Defense stat.",
  type: C.Types.Normal,
  category: "Special",
  pp: 40, // max 64
  accuracy: 85,
  target: "Any Adjacent",
  makesContact: false,
  stages: { defense: -2 },
}));
