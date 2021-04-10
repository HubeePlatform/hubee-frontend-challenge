import { Reducer } from "redux";
import { ICartState, IProduct } from "./types";
import toastify from "../../../utils/toastify";
import { api } from "../../../services/api";

const INITIAL_STATE: ICartState = {
  items: [],
  coupon: {
    key: "",
    rebatePercentage: 0,
  },
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const product = action.payload.product;

      const productCartIndex = state.items.findIndex(
        (item) => item.id === product.id
      );

      if (productCartIndex >= 0) {
        state.items[productCartIndex].amount += 1;
        toastify("success", "Produto adicionado com sucesso");
        return state;
      } else {
        const newCart = {
          ...state,
          items: [
            ...state.items,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              url: product.url,
              amount: 1,
            },
          ],
          coupon: {
            key: "",
            rebatePercentage: 0,
          },
        };
        toastify("success", "Produto adicionado com sucesso");
        return newCart;
      }
    }
    case "REMOVE_PRODUCT_TO_CART": {
      const id = action.payload.id;

      const indexProduct = state.items.findIndex(
        (product) => product.id === id
      );

      if (indexProduct < 0) {
        toastify("error", "Erro na remoção do produto");
        return state;
      }

      const cartFilter: IProduct[] = state.items.filter(
        (product) => product.id !== id
      );

      const newCart = {
        items: cartFilter,
        coupon: {
          ...state.coupon,
        },
      };

      toastify("error", "Produto removido com sucesso");
      return newCart;
    }

    case "UPDATE_AMOUNT": {
      const id = action.payload.id;
      const amount = action.payload.amount;

      if (amount <= 0) {
        return state;
      }

      const indexProduct = state.items.findIndex(
        (product) => product.id === id
      );

      state.items[indexProduct].amount = amount;

      const newCart = {
        ...state,
        items: [...state.items],
        coupon: {
          ...state.coupon,
        },
      };

      return newCart;
    }
    case "ADD_COUPON_SUCCESS": {
      const payload = action.payload;

      const newCart = {
        ...state,
        items: [...state.items],
        coupon: {
          key: payload.key,
          rebatePercentage: payload.rebatePercentage,
        },
      };

      return newCart;
    }

    case "CHECKOUT_CART": {
      const payload = action.payload;

      const data = {
        id: Math.random().toFixed(4),
        coupon: payload.coupon,
        items: [payload.product],
        totalPrice: payload.totalPrice,
      };

      api.post("carts", data).then((response) => {
        const data = {
          id: Math.random().toFixed(4),
          cartId: response.data.id,
          finalized: true,
        };

        api.post("orders", data).then(() => {
          toastify("success", "Obrigado, seu pedido foi efetuado com sucesso");
        });
      });

      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default cart;
