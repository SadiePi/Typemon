import { Codex, Move } from "../index.ts";
import preload from "../preload.ts";

export const Sing: Move = preload.register<Move>((C: Codex) => ({
  name: "Sing",
  description: "A soothing lullaby is sung in a calming voice that puts the target into a deep slumber.",
  type: C.Types.Normal,
  category: "Status",
  pp: 15,
  accuracy: 55,
  target: "Any Adjacent",
  makesContact: false,
  status: C.Statuses.Sleep,
}));
