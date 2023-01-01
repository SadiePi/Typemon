import { Codex, Move } from "../index.ts";
import preload from "../preload.ts";

export const Teleport: Move = preload.register<Move>((C: Codex) => ({
  name: "Teleport",
  description:
    "The user switches places with another party Pokémon. It may also be used to warp to the last Pokémon Center visited. If a wild Pokémon uses this move, it flees.",
  type: C.Types.Psychic,
  category: "Status",
  pp: 20, // max 32
  priority: -6,
  target: "Self",
  makesContact: false,
  eject: true,
}));
