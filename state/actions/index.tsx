import { ActionType } from "../action-types";

interface IAddItemAction {
  type: ActionType.ADDITEM;
  itemType: "notes" | "sites" | "todos";
  _id: string;
  title: string;
  body: string;
}

interface IRemoveItemAction {
  type: ActionType.REMOVEITEM;
  _id: string;
  itemType: "notes" | "sites" | "todos";
}

interface IClearStoreAction {
  type: ActionType.CLEARSTORE;
}

export type Action = IAddItemAction | IRemoveItemAction | IClearStoreAction;
