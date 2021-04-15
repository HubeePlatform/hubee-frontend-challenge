import produce from 'immer';
import { Reducer } from 'redux';
import { ICartState } from './type';

const INITIAL_STATE: ICartState = {
  items: [],
  totalPrice: 0,
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => produce(state, (draft) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload;

      const productInCartIndex = draft.items.findIndex((item) => item.productId === product.id);

      if (productInCartIndex >= 0) {
        draft.items[productInCartIndex].amount += 1;
      } else {
        draft.items.push({
          productId: product.id,
          amount: 1,
        });
      }

      draft.totalPrice += product.price;

      return draft;
    }

    case 'DELETE_PRODUCT_TO_CART': {
      const { productId, price } = action.payload;

      const newListProducts = draft.items.filter((item) => item.productId !== productId);

      const amountProduct = draft.items.find(
        (item) => item.productId === productId,
      )?.amount ?? 1;

      draft.totalPrice -= price * amountProduct;

      draft.items = newListProducts;

      return draft;
    }

    default: {
      return draft;
    }

    case 'REMOVE_PRODUCT_TO_CART': {
      const { productId, price } = action.payload;

      const productInCartIndex = draft.items.findIndex((item) => item.productId === productId);

      if (draft.items[productInCartIndex].amount > 1) {
        draft.items[productInCartIndex].amount -= 1;
      } else {
        draft.items = draft.items.filter((item) => item.productId !== productId);
      }

      draft.totalPrice -= price;

      return draft;
    }
  }
});

export default cart;
