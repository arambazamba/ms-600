import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UiFabricWpWebPartStrings';
import UiFabricWp from './components/UiFabricWp';
import { IUiFabricWpProps } from './components/IUiFabricWpProps';

export interface IUiFabricWpWebPartProps {
  description: string;
}

export default class UiFabricWpWebPart extends BaseClientSideWebPart<IUiFabricWpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IUiFabricWpProps> = React.createElement(
      UiFabricWp,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
