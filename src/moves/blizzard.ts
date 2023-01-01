import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

export const Blizzard: Move = dexBuilder.register<Move>(() => ({
  name: "Blizzard",
  description:
    "A howling blizzard is summoned to strike opposing Pokémon. This may also leave the opposing Pokémon frozen.",
  type: C.Types.Ice,
  category: "Special",
  pp: 5,
  attack: power(110),
  accuracy: 70,
  target: "Every Adjacent Foe",
  makesContact: false,
  status: [1 / 10, C.Statuses.Freeze],
}));
