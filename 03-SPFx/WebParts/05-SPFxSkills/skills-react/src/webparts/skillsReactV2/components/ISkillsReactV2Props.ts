import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Skill } from "./skill.model";

export interface ISkillsReactV2Props {
  skills: Skill[];
  context: WebPartContext;
}
