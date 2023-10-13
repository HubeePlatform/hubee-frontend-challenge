import { Cart } from "../../utils/interfaces";
import { SET_CART } from "./types";

export const setCart = (cart: Cart) => ({
  type: SET_CART,
  payload: cart,
});
