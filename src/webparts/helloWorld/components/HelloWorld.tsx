import * as React from "react";
import styles from "./HelloWorld.module.scss";
import type { IHelloWorldProps } from "./IHelloWorldProps";
import { escape } from "@microsoft/sp-lodash-subset";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    const {
      description,
      test,
      isDarkTheme,
      environmentMessage,
      context,
      listData,
    } = this.props;

    console.log(this.props);

    return (
      <div>
        <section
          className={
            styles.helloWorld + !!context.sdks.microsoftTeams
              ? styles.teams
              : ""
          }
        >
          <div className={styles.welcome}>
            <img
              alt=""
              src={
                isDarkTheme
                  ? require("../assets/welcome-dark.png")
                  : require("../assets/welcome-light.png")
              }
              className={styles.welcomeImage}
            />
            <h2>Well done, {escape(context.pageContext?.user.displayName)}!</h2>
            <div>{environmentMessage}</div>
          </div>
          <div>
            <h3>Welcome to SharePoint Framework!</h3>
            <div>
              Web part description: <strong>{escape(description)}</strong>
            </div>
            <div>
              Web part test: <strong>{escape(test)}</strong>
            </div>
            <div>
              Loading from:{" "}
              <strong>{escape(context.pageContext.web.title)}</strong>
            </div>
          </div>
        </section>
        <div>
          {listData.value.map(function (item) {
            return (
              <ul key={item.Id} className={styles.list}>
                <li className={styles.listItem}>
                  <span className="ms-font-l">${item.Title}</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
}
