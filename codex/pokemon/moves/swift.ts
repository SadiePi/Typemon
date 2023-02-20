import { power, Move } from "../index.ts";
import loader from "../loader.ts"

export const Swift: Move = loader.register<Move>(P => ({
  name: "Swift",
  description: "Star-shaped rays are shot at the opposing Pokémon. This attack never misses.",
  type: P.Types.Normal,
  target: "Every Adjacent Foe",
  category: "Special",
  pp: 20,
  attack: power(60),
  makesContact: false,
}));
// TODO swift
