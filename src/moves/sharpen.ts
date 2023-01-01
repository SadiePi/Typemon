import { Codex, dexBuilder, Move } from "../index.ts";

export const Sharpen: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Sharpen",
  description: "The user makes its edges more jagged, which raises its Attack stat.",
  type: C.Types.Normal,
  target: "Self",
  category: "Status",
  pp: 30,
  makesContact: false,
  stages: { attack: 1 },
}));
