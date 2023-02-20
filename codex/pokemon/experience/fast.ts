import { ExperienceGroup } from "../index.ts";
import loader from "../loader.ts"

export const Fast: ExperienceGroup = (l: number) => (4 * Math.pow(l, 3)) / 5;
