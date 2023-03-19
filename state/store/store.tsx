import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import Reducer from "../reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  typeof window !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
