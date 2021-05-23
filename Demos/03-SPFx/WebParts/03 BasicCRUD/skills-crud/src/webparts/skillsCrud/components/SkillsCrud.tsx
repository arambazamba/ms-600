import * as React from "react";
import styles from "./SkillsCrud.module.scss";
import { ISkillsCrudProps } from "./ISkillsCrudProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { Skills } from "./Skills/Skills";
const logo: string = require("./logo.svg");

export default class SkillsCrud extends React.Component<ISkillsCrudProps, {}> {
  public render(): React.ReactElement<ISkillsCrudProps> {
    return (
      <div className={styles.container}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to SPFx using React</h2>
        </div>
        <div className={styles.AppMain}>
          <Skills removeMsg="Click on item to remove" skills={this.props.skills} context={this.props.context} />
        </div>
      </div>
    );
  }
}
