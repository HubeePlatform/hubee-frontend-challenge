import { AnyAction } from "redux";
import { SET_CART } from "./types";

const initialState = {
  cart: false,
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
