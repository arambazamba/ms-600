import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration, PropertyPaneTextField } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "SkillsCrudWebPartStrings";
import SkillsCrud from "./components/SkillsCrud";
import { ISkillsCrudProps } from "./components/ISkillsCrudProps";
import { SPHttpClient } from "@microsoft/sp-http";
import { Skill } from "./components/skills-model";

export interface ISkillsCrudWebPartProps {
  description: string;
  skills: Skill[];
}

export default class SkillsCrudWebPart extends BaseClientSideWebPart<ISkillsCrudWebPartProps> {
  public render(): void {
    const element: React.ReactElement<ISkillsCrudProps> = React.createElement(SkillsCrud, {
      skills: this.properties.skills,
      context: this.context,
    });
    ReactDom.render(element, this.domElement);
  }

  public async onInit() {
    this.properties.skills = [];
    const url: string = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('skills')/items`;
    this.context.spHttpClient
      .get(url, SPHttpClient.configurations.v1)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("setting skills data", data);
        this.properties.skills = data;
      });
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
