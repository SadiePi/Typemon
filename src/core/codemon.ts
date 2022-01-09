import Experience from "./experience.ts";
import { MoveReport, MoveUsage } from "./move.ts";
import { getRandomNature, Nature } from "./nature.ts";
import { Female, Male, Sex } from "./sex.ts";
import { Species } from "./species.ts";
import { IStats, StatSet } from "./stats.ts";

export interface ICodemon {
  species: Species;
  name?: string;
  sex?: Sex;
  level?: number;
  nature?: Nature;
  stats?: IStats;
  //moves: Move[]
}

// TODO: https://bulbapedia.bulbagarden.net/wiki/Affection
export class Codemon {
  public species: Species;
  public experience: Experience;
  public stats: StatSet;

  constructor(options: ICodemon) {
    // TODO enfore sane values
    this.species = options.species;
    this.name = options.name ?? this.species.name;
    this.sex =
      options.sex ?? Math.random() < this.species.sexRatio ? Male : Female;

    this.experience = new Experience({
      group: options.species.experienceGroup,
      level: options.level,
    });

    this._originalNature = this.temporaryNature =
      options.nature ?? getRandomNature();

    this.stats = new StatSet({ self: this, ...options.stats });
  }

  // Name
  protected _name = "Initialization error";
  public get name() {
    return this.species.overrideName?.(this, this._name) ?? this._name;
  }
  public set name(name: string) {
    name = name ?? this.species.name;
    this._name = this.species.overrideName?.(this, name) ?? name;
  }

  // Sex
  protected _sex: Sex = { name: "Initialization error" };
  public get sex() {
    return this.species.overrideSex?.(this, this._sex) ?? this._sex;
  }
  public set sex(sex: Sex) {
    this._sex = this.species.overrideSex?.(this, sex) ?? sex;
  }

  // Stats & Nature
  private _originalNature: Nature;
  public get originalNature() {
    return (
      this.species.overrideNature?.(this, this._originalNature) ??
      this._originalNature
    );
  }
  private temporaryNature: Nature;
  public get nature() {
    return (
      this.species.overrideNature?.(this, this.temporaryNature) ??
      this.temporaryNature
    );
  }
  public set nature(value: Nature) {
    this.temporaryNature = this.species.overrideNature?.(this, value) ?? value;
  }
  public resetNature() {
    this.nature = this.originalNature;
  }

  // deno-lint-ignore no-unused-vars
  public RecieveMove(from: Codemon, move: MoveUsage): MoveReport {
    // TODO apply abilities etc to move
    const ret: Partial<MoveReport> = { usage: move };
    ret.damage =
      move.base *
      move.multitarget *
      move.weather *
      move.critical *
      move.random *
      move.stab *
      move.type *
      move.other;

    this.stats.HP.current -= ret.damage;

    return ret as MoveReport;
  }

  public toString() {
    const identity = `Level ${this.experience.level}, ${this.nature.name}, ${
      this.sex.name
    } ${this.species.name}${
      this.name === this.species.name ? "" : " named " + this.name
    }`;

    // TODO make this stat.toString()
    const stats =
      `HP: ${this.stats.HP.current}/${this.stats.HP.value()}, ` +
      `Attack: ${this.stats.Attack.value(true)}${
        this.stats.Attack.stage === 0
          ? ""
          : ` (${this.stats.Attack.value(false)})`
      }, ` +
      `Defense: ${this.stats.Defense.value(true)}${
        this.stats.Defense.stage === 0
          ? ""
          : ` (${this.stats.Defense.value(false)})`
      }, ` +
      `Speed: ${this.stats.Speed.value(true)}${
        this.stats.Speed.stage === 0
          ? ""
          : ` (${this.stats.Speed.value(false)})`
      }\n` +
      `Special Attack: ${this.stats.SpecialAttack.value(true)}${
        this.stats.SpecialAttack.stage === 0
          ? ""
          : ` (${this.stats.SpecialAttack.value(false)})`
      }, ` +
      `Special Defense: ${this.stats.SpecialDefense.value(true)}${
        this.stats.SpecialDefense.stage === 0
          ? ""
          : ` (${this.stats.SpecialDefense.value(false)})`
      }` +
      `${
        this.stats.Evasion.stage ? ", Evasion: " + this.stats.Evasion.stage : ""
      }` +
      `${
        this.stats.Accuracy.stage
          ? ", Accuracy: " + this.stats.Accuracy.stage
          : ""
      }`;

    // TODO make this move.toString()
    const moves = "";

    return [identity, stats, moves].join("\n");
  }
}
export default Codemon;
