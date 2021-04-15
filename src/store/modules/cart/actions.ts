import { IProduct } from './type';

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}

export function deleteProductToCartRequest(productId: number) {
  return {
    type: 'DELETE_PRODUCT_TO_CART_REQUEST',
    payload: {
      productId,
    },
  };
}

export function deleteProductToCart(productId: number, price: number) {
  return {
    type: 'DELETE_PRODUCT_TO_CART',
    payload: {
      productId,
      price,
    },
  };
}

export function removeProductToCartRequest(productId: number) {
  return {
    type: 'REMOVE_PRODUCT_TO_CART_REQUEST',
    payload: {
      productId,
    },
  };
}

export function removeProductToCart(productId: number, price: number) {
  return {
    type: 'REMOVE_PRODUCT_TO_CART',
    payload: {
      productId,
      price,
    },
  };
}
