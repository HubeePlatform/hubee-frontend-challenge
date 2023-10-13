import { AnyAction } from "redux";
import { SET_PRODUCTS } from "./types";

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default productsReducer;
