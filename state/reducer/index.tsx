import { Action } from "../actions";
import { ActionType } from "../action-types";

const initialState = {
  notes: [
    {
      _id: "",
      itemType: "notes",
      title: "",
      body: "",
    },
  ],
  todos: [
    {
      _id: "",
      itemType: "todos",
      title: "",
      body: "",
    },
  ],
  sites: [
    {
      _id: "",
      itemType: "sites",
      title: "",
      body: "",
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
            _id: action._id,
            itemType: action.itemType,
            creator: action.creator,
            title: action.title,
            body: action.body,
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
    case ActionType.FETCHITEMS:
      return {
        ...state,
        notes: action.notes,
        todos: action.todos,
        sites: action.sites,
      };
    default:
      return state;
  }
};

export default Reducer;

export type State = ReturnType<typeof Reducer>;
