import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import axios from "axios";

export const additem = (itemType: string, title: string, body?: string) => {
  const creator = localStorage.getItem("token");
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`/api/note/note`, {
        headers: {
          authorization: creator,
        },
        itemType,
        creator,
        title,
        body,
      });
      const _id = response.data._id;
      dispatch({
        type: ActionType.ADDITEM,
        _id,
        itemType,
        creator,
        title,
        body,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeitem = (_id: string, itemType: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.delete(`/api/note/${_id}`);
      dispatch({
        type: ActionType.REMOVEITEM,
        _id,
        itemType,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const clearstore = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.CLEARSTORE,
    });
  };
};
