import { InitialCartState, InitialProduct } from "../../types/Product";

export function AddProduct(product: InitialProduct, quantity: number) {
  return {
    type: "ADD_PRODUCT_CART",
    payload: {
      product,
    },
  };
}

export function RemoveProduct(id: number) {
  return {
    type: "REMOVE_PRODUCT_CART",
    payload: {
      id,
    },
  };
}

export function IncProduct(id: number) {
  return {
    type: "INC_PRODUCT_CART",
    payload: {
      id,
    },
  };
}

export function DecProduct(id: number) {
  return {
    type: "DEC_PRODUCT_CART",
    payload: {
      id,
    },
  };
}


