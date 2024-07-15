import { BaseElement, Descendant } from "slate";

declare module "slate" {
  export interface BaseElement {
    type: string;
  }
}
