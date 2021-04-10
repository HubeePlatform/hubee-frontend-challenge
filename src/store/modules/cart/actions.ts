import { IProduct } from "./types";

export function addProduct(product: IProduct) {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: {
      product,
    },
  };
}

export function removeProduct(id: number) {
  return {
    type: "REMOVE_PRODUCT_TO_CART",
    payload: {
      id,
    },
  };
}

export function updateAmount(id: number, amount: number) {
  return {
    type: "UPDATE_AMOUNT",
    payload: {
      id,
      amount,
    },
  };
}

export function addCouponRequest(key: string) {
  return {
    type: "ADD_COUPON_REQUEST",
    payload: {
      key,
    },
  };
}

export function addCouponSucess(key: string, rebatePercentage: number) {
  return {
    type: "ADD_COUPON_SUCCESS",
    payload: {
      key,
      rebatePercentage,
    },
  };
}

export function checkoutCart(
  coupon: string,
  product: IProduct[],
  totalPrice: string
) {
  return {
    type: "CHECKOUT_CART",
    payload: {
      coupon,
      product,
      totalPrice,
    },
  };
}
