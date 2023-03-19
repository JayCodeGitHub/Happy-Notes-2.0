import { ActionType } from "../action-types";
import { Dispatch } from "redux";

export const additem = (title: string, itemType: string, body?: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.ADDITEM,
      itemType,
      title,
      body,
    });
  };
};

export const removeitem = (_id: string, itemType: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.REMOVEITEM,
      _id,
      itemType,
    });
  };
};

export const clearstore = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.CLEARSTORE,
    });
  };
};
