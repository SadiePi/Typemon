import C from "./config.ts";
import Codemon from "./codemon.ts";
import { PermanentStat } from "./stats.ts";
import { Type } from "./type.ts";
import Types from "../base/types.ts";

export enum DamageCategory {
  Physical,
  Special,
  Status,
}

// eg move.targetingCategory = TC.All | TC.NonAdjacent | TC.Foes
export enum TargetingCategory {
  None = 0,
  Self = 1 << 0,
  Ally = 1 << 1,
  Foe = 1 << 2,
  Adjacent = 1 << 3,
  NonAdjacent = 1 << 4,
  All = 1 << 5, // target all that match other filters instead of one
}
export const TC = TargetingCategory; // for convenience

export interface IMove {
  name: string;
  type: Type;
  basePP: number;
  priority: number;
  ppScheme?: PPScheme;
  basePower: number; // TODO: Add Battle parameter
  baseAccuracy: number;
  makesContact: boolean;
  criticalHitStage: number;
  damageCategory: DamageCategory;
  targetingCategory: TargetingCategory; // TODO: Feels like this could be better
  criticalHitProbabilityMultiplier: number;
}

export class PPScheme {
  private base: number;
  private current: number;
  private max: number;
  private boosts = 0;

  constructor(base: number) {
    this.base = this.max = this.current = base;
  }

  public Use(pp = 1): boolean {
    if (this.current < pp) return false;
    this.current -= pp;
    return true;
  }

  public Restore(pp: number): number {
    pp = pp ?? this.max - this.current;
    const prev = this.current;
    this.current += pp;
    if (this.current > this.max) this.current = this.max;
    return this.current - prev;
  }

  public CanBoost(): boolean {
    return this.boosts < C.codemon.moves.maxPPBoosts;
  }

  public Boost(): number {
    if (!this.CanBoost()) return 0;
    this.boosts++;
    const change = this.base * C.codemon.moves.ppBoostMultiplier;
    this.max += change;
    this.current += change;
    return change;
  }
}

export interface MoveUsage {
  user: Codemon;
  move: Move;
  base: number;
  multitarget: number;
  weather: number;
  random: number;
  critical: number;
  stab: number;
  type: number;
  other: number;
  recoil: number;
}

export interface MoveReport {
  user: Codemon;
  target: Codemon;
  usage: MoveUsage;
  damage: number;
  // inflictedStatuses
}

export class Move {
  public PP: PPScheme;

  constructor(public args: IMove) {
    this.PP = args.ppScheme ?? new PPScheme(args.basePP);
  }

  // TODO: Complete this; it's only the rudimentary random check
  public TryCriticalHit(): boolean {
    const crit = Math.random();
    if (this.args.criticalHitStage >= 3) return true;
    if (this.args.criticalHitStage == 2) return crit < 1 / 2;
    if (this.args.criticalHitStage == 1) return crit < 1 / 8;
    return crit < 1 / 24;
  }

  public Use(
    self: Codemon,
    // deno-lint-ignore no-unused-vars
    target: Codemon,
    multitarget: boolean // TODO replace with check of TargetingCategory
    //battle: Battle
  ): MoveUsage {
    const ret: Partial<MoveUsage> = {};
    ret.critical = this.TryCriticalHit()
      ? C.codemon.moves.criticalMultiplier
      : 1;

    ret.base = (2 * self.experience.level) / 5 + 2;

    // TODO apply effective power, not base
    ret.base *= this.args.basePower;

    const stats: [PermanentStat, PermanentStat] =
      this.args.damageCategory === DamageCategory.Physical
        ? ["Attack", "Defense"]
        : ["SpecialAttack", "SpecialDefense"];

    // TODO fix?
    ret.base *= self.stats[stats[0]].value(
      ret.critical != 1 && self.stats[stats[0]].stage > 0
    );
    ret.base /= self.stats[stats[1]].value(
      ret.critical != 1 && self.stats[stats[1]].stage < 0
    );

    ret.base = ret.base / 50 + 2;

    ret.multitarget = multitarget ? 0.75 : 1; // TODO battle.multitargetDamageMultipler : 1

    ret.weather = 1; // TODO check weather
    ret.random = 0.85 + Math.random() * 0.15;
    ret.stab = 1; // TODO check types
    ret.type = 1; // TODO check types
    ret.other = 1;
    ret.recoil = 0;

    // TODO apply self's abilities etc

    return ret as MoveUsage;
  }
}
