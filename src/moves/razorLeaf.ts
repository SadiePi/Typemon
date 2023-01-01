import { Codex, dexBuilder, power, Move } from "../index.ts";

export const RazorLeaf: Move = dexBuilder.register<Move>((C: Codex) => ({
  name: "Razor Leaf",
  description: "Sharp-edged leaves are launched to slash at opposing Pokémon. Critical hits land more easily.",
  type: C.Types.Grass,
  category: "Physical",
  pp: 25, // max 40
  attack: power(55),
  accuracy: 95,
  target: "Every Adjacent Foe",
  makesContact: false,
  criticalHitStage: 1,
}));
