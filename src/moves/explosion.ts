import { Codex, power, Move } from "../index.ts";
import preload from "../preload.ts";

export const Explosion: Move = preload.register<Move>((C: Codex) => ({
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
