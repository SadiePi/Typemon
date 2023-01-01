import C, { power, Move } from "../index.ts";
import dexBuilder from "../core/codex.ts";

export const Explosion: Move = dexBuilder.register<Move>(() => ({
  name: "Explosion",
  description:
    "The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.",
  type: C.Types.Normal,
  target: "Every Adjacent",
  category: "Physical",
  pp: 5,
  attack: power(250),
  makesContact: false,
  recoil: { faint: true },
}));
