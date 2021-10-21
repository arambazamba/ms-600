import * as React from "react";
import styles from "./SpHttpClient.module.scss";
import { escape } from "@microsoft/sp-lodash-subset";
import { ISPList } from '../ISPList';

export interface ISpHttpClientProps {
  description: string;
  lists: ISPList[];
}

export default class SpHttpClient extends React.Component<ISpHttpClientProps, {}> {  
  
  public render(): React.ReactElement<ISpHttpClientProps> {
    return (
      <div className={styles.spHttpClient}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
          <ul className={styles.list}>
            {this.props.lists.map((list) => (
              <li key={list.Id} className={styles.item}>
                Id: {list.Id}, Title: {list.Title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
