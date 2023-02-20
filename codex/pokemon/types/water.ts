import { Type } from "../index.ts";
import loader from "../loader.ts"

export const Water: Type = loader.register<Type>(P => ({
  name: "Water",
  color: "#6890F0",
  weaknesses: [P.Types.Grass, P.Types.Electric],
  resistances: [P.Types.Steel, P.Types.Fire, P.Types.Water, P.Types.Ice],
  immunities: [],
}));
