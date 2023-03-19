import { Action } from "../actions";
import { ActionType } from "../action-types";

const initialState = {
  notes: [
    {
      title: "",
      body: "",
      _id: "",
      itemType: "note",
    },
  ],
  todos: [
    {
      title: "",
      body: "",
      _id: "",
      itemType: "todo",
    },
  ],
  sites: [
    {
      title: "",
      body: "",
      _id: "",
      itemType: "site",
    },
  ],
};

const Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDITEM:
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType],
          {
            title: action.title,
            body: action.body,
            _id: action.title,
            itemType: action.itemType,
          },
        ],
      };
    case ActionType.REMOVEITEM:
      return {
        ...state,
        [action.itemType]: [
          ...state[action.itemType].filter((item) => item._id !== action._id),
        ],
      };
    case ActionType.CLEARSTORE:
      return {
        ...state,
        notes: [],
        sites: [],
        todos: [],
      };
    default:
      return state;
  }
};

export default Reducer;

export type State = ReturnType<typeof Reducer>;
