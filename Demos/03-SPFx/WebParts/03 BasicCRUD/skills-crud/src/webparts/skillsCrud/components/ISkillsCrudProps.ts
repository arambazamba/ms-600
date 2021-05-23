import { WebPartContext } from "@microsoft/sp-webpart-base";
import { Skill } from "./skills-model";

export interface ISkillsCrudProps {
  skills: Skill[];
  context: WebPartContext;
}
