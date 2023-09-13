import { Move, Codemon } from "../mod.ts";
import loader from "../loader.ts";

export const SoftBoiled: Move = loader.register<Move>(P => ({
  name: "Soft-Boiled",
  description: "The user restores its own HP by up to half of its max HP.",
  type: P.Types.Normal,
  target: { alignment: "Self" },
  category: "Status",
  pp: 5,
  makesContact: false,
  hp: ({ action }) => (action.source instanceof Codemon ? action.source.stats.hp.max / 2 : 0),
}));
