import { ActionType } from "../action-types";

interface IAddItemAction {
  type: ActionType.ADDITEM;
  itemType: "notes" | "sites" | "todos";
  _id: string;
  creator: string;
  title: string;
  body: string;
}

interface IRemoveItemAction {
  type: ActionType.REMOVEITEM;
  _id: string;
  itemType: "notes" | "sites" | "todos";
}

interface IFetchItemsAction {
  type: ActionType.FETCHITEMS;
  notes: Array<{ _id: string; itemType: string; title: string; body: string }>;
  todos: Array<{ _id: string; itemType: string; title: string; body: string }>;
  sites: Array<{ _id: string; itemType: string; title: string; body: string }>;
}

export type Action = IAddItemAction | IRemoveItemAction | IFetchItemsAction;
