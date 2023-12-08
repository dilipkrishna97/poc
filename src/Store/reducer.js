import { combineReducers } from "redux";

const initialState = {
  childrenDetails: [],
};

export const AddChildDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHILD_DETAILS": {
      return {
        ...state,
        childrenDetails: [...state.childrenDetails, action.payload],
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  childrenDetails: AddChildDetailsReducer,
});
