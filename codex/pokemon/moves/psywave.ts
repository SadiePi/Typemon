import { Move, Codemon } from "../mod.ts";
import loader from "../loader.ts";

export const Psywave: Move = loader.register<Move>(P => ({
  name: "Psywave",
  description: "The target is attacked with an odd psychic wave. The attack varies in intensity.",
  type: P.Types.Psychic,
  target: { position: "Adjacent" },
  category: "Special",
  pp: 15,
  makesContact: false,
  hp: ({ action }) =>
    action.source instanceof Codemon ? Math.floor((action.source.stats.level * (Math.random() * +50)) / 100) : 0,
}));
