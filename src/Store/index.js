import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer";

export const configureStore = (initialState) => {
  return createStore(rootReducer, initialState);
};
