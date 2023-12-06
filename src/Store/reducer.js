import { combineReducers } from "redux";

const initialState = {
  childrenDetails: [],
};

export const AddChildDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CHILD_DETAILS": {
      console.log("reducer", action.payload, {
        ...state,
        childrenDetails: [...state.childrenDetails, action.payload],
      });
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
