import { Cart, Coupon } from "../../utils/interfaces";
import {
  OPEN_CART,
  RESTART_CART,
  SET_CART,
  SET_COUPON,
  SET_MODAL,
} from "./types";

export const setCart = (cart: Cart) => ({
  type: SET_CART,
  payload: cart,
});

export const setCoupon = (coupon: Coupon) => ({
  type: SET_COUPON,
  payload: coupon,
});

export const setModal = () => ({
  type: SET_MODAL,
});

export const restartCart = () => ({
  type: RESTART_CART,
});

export const openCart = () => ({
  type: OPEN_CART,
});
