import { AnyAction } from "redux";
import { SET_CART, SET_COUPON } from "./types";

const initialState = {
  cart: false,
  coupon: false,
};

export const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_COUPON:
      return {
        ...state,
        coupon: action.payload,
      };
    default:
      return state;
  }
};
