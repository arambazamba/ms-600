import * as React from "react";
import {
  Provider,
  Flex,
  Text,
  Button,
  Header,
  ThemePrepared,
  themes,
  Input,
} from "@fluentui/react-northstar";
import TeamsBaseComponent, {
  ITeamsBaseComponentState,
} from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * State for the relatedVideosTabTab React component
 */
export interface IRelatedVideosTabState extends ITeamsBaseComponentState {
  entityId?: string;
  teamsTheme: ThemePrepared;
  youTubeVideoId?: string;
}

/**
 * Properties for the relatedVideosTabTab React component
 */
export interface IRelatedVideosTabProps {}

/**
 * Implementation of the Related Videos content page
 */
export class RelatedVideosTab extends TeamsBaseComponent<
  IRelatedVideosTabProps,
  IRelatedVideosTabState
> {
  public async componentWillMount() {
    // this.updateTheme(this.getQueryVariable("theme"));

    this.updateComponentTheme(this.getQueryVariable("theme"));
    this.setState(
      Object.assign({}, this.state, {
        youTubeVideoId: "VlEH4vtaxp4",
      })
    );

    if (await this.inTeams()) {
      microsoftTeams.initialize();
      microsoftTeams.registerOnThemeChangeHandler(this.updateComponentTheme);
      microsoftTeams.getContext((context) => {
        microsoftTeams.appInitialization.notifySuccess();
        this.setState({
          entityId: context.entityId,
        });
        this.updateTheme(context.theme);
      });
    } else {
      this.setState({
        entityId: "This is not hosted in Microsoft Teams",
      });
    }
  }

  /**
   * The render() method to create the UI of the tab
   */
  public render() {
    return (
      <Provider theme={this.state.teamsTheme}>
        <Flex column gap="gap.smaller">
          <Header>Task Module Demo</Header>
          <Text>YouTube Video ID:</Text>
          <Input value={this.state.youTubeVideoId} disabled></Input>
          <Button
            content="Change Video ID"
            onClick={this.onChangeVideo}
          ></Button>
          <Button
            content="Show Video"
            primary
            onClick={this.onShowVideo}
          ></Button>
          <Text content="(C) Copyright Contoso" size="smallest"></Text>
        </Flex>
      </Provider>
    );
  }

  private onShowVideo = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {};

  private onChangeVideo = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {};

  private updateComponentTheme = (teamsTheme: string = "default"): void => {
    let theme: ThemePrepared;

    switch (teamsTheme) {
      case "default":
        theme = themes.teams;
        break;
      case "dark":
        theme = themes.teamsDark;
        break;
      case "contrast":
        theme = themes.teamsHighContrast;
        break;
      default:
        theme = themes.teams;
        break;
    }
    // update the state
    this.setState(
      Object.assign({}, this.state, {
        teamsTheme: theme,
      })
    );
  };
}
