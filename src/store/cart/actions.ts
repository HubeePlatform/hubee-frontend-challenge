import { Cart, Coupon } from "../../utils/interfaces";
import { SET_CART, SET_COUPON } from "./types";

export const setCart = (cart: Cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setCoupon = (coupon: Coupon) => ({
  type: SET_COUPON,
  payload: coupon,
});
