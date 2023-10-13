import { Products } from "../../utils/interfaces";
import { SET_PRODUCTS } from "./types";

export const setProducts = (products: Products[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});
