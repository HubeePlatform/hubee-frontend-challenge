import { AnyAction } from "redux";
import {
  OPEN_CART,
  RESTART_CART,
  SET_CART,
  SET_COUPON,
  SET_MODAL,
} from "./types";

const initialState = {
  cart: false,
  coupon: false,
  modal: false,
  openCart: false,
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
    case SET_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    case RESTART_CART:
      return {
        ...state,
        cart: [],
        coupon: false,
      };
    case OPEN_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };
    default:
      return state;
  }
};
