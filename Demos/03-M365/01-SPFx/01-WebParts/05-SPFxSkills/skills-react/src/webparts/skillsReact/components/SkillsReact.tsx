import * as React from 'react';
import styles from './SkillsReact.module.scss';
import { ISkillsReactProps } from './ISkillsReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Hello } from './Hello/Hello';
import { Skills } from './Skills/Skills';


export default class SkillsReact extends React.Component<ISkillsReactProps, {}> {
  public render(): React.ReactElement<ISkillsReactProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.AppHeader}>
          <h2>Welcome to SPFx using React</h2>
        </div>
        <div className={styles.AppIntro}>
          <Hello />
          <Skills
            removeMsg="Click on item to remove"
            skills={this.props.skills}
            context={this.props.context}
          />
        </div>
      </div>
    );
  }
}
