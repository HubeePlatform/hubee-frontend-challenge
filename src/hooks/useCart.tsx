import { toast } from "react-toastify";
import { getCarts } from "../api/cart";
import { Cart, CartItem, Products } from "../utils/interfaces";
import { getProductsById } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cart/actions";
import { RootState } from "../store/store";

export const useCart = () => {
  const dispatch = useDispatch();
  const cart: Cart = useSelector((state: RootState) => state.cart.cart);

  const handleFetchCart = async () => {
    try {
      const cart: Cart = (await (await getCarts()).json())[0];

      const itemsCart = await Promise.all(
        cart.items.map(async (item: CartItem) => {
          const product: Products = await (
            await getProductsById(item.productId)
          ).json();

          return {
            ...item,
            product,
          };
        })
      );

      cart.items = itemsCart;

      dispatch(setCart(cart));
    } catch (error) {
      toast.error("Erro ao buscar carrinho de compras");
    }
  };
  return { cart, handleFetchCart };
};
