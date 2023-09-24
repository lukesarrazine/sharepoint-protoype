import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ISPLists } from "../HelloWorldWebPart";

export interface IHelloWorldProps {
  description: string;
  test: string;
  test1: boolean;
  test2: string;
  test3: boolean;
  context: WebPartContext,
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  listData: ISPLists;
}
