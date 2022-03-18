import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'SkillsReactWebPartStrings';
import SkillsReact from './components/SkillsReact';
import { ISkillsReactProps } from './components/ISkillsReactProps';
import { SPHttpClient } from '@microsoft/sp-http';
import { Skill } from './components/skill';

export interface ISkillsReactWebPartProps {
    description: string;
}

export default class SkillsReactWebPart extends BaseClientSideWebPart<ISkillsReactWebPartProps> {
    private _isDarkTheme: boolean = false;
    private _environmentMessage: string = '';

    protected onInit(): Promise<void> {
        this._environmentMessage = this._getEnvironmentMessage();

        return super.onInit();
    }

    public render(): void {
        this.getSkillData().then((data) => {
            const element: React.ReactElement<ISkillsReactProps> = React.createElement(SkillsReact, {
                description: this.properties.description,
                isDarkTheme: this._isDarkTheme,
                environmentMessage: this._environmentMessage,
                hasTeamsContext: !!this.context.sdks.microsoftTeams,
                userDisplayName: this.context.pageContext.user.displayName,
                skills: data,
                context: this.context,
            });

            ReactDom.render(element, this.domElement);
        });
    }

    private getSkillData(): Promise<Skill[]> {
        console.log('url: ', this.context.pageContext.web.absoluteUrl);
        const url: string = `${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('skills')/items`;
        return this.context.spHttpClient
            .get(url, SPHttpClient.configurations.v1)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                return json.value;
            }) as Promise<Skill[]>;
    }

    private _getEnvironmentMessage(): string {
        if (!!this.context.sdks.microsoftTeams) {
            // running in Teams
            return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
        }

        return this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment;
    }

    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
        if (!currentTheme) {
            return;
        }

        this._isDarkTheme = !!currentTheme.isInverted;
        const { semanticColors } = currentTheme;
        this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
        this.domElement.style.setProperty('--link', semanticColors.link);
        this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);
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
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
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
