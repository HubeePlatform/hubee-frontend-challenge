import { toast } from "react-toastify";
import { getCartById, getCarts, updateCart } from "../api/cart";
import { Cart, CartItem, Products } from "../utils/interfaces";
import { getProductsById } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/cart/actions";
import { RootState } from "../store/store";

export const useCart = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state: RootState) => state.cart.coupon);
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

  const handleAddItemToCart = async (item: CartItem) => {
    try {
      const cartData: Cart = await (await getCartById(cart.id)).json();

      cartData.items.push({
        productId: item.productId,
        amount: item.amount,
        product: item.product,
      });

      cartData.totalPrice = 0;
      await updateCart(cartData);
      handleFetchCart();
    } catch (error) {}
  };

  const handleSetCouponToCart = async (coupon: string) => {
    try {
    } catch (error) {
      toast.error("Erro ao adicionar cupom!");
    }
  };
  return {
    cart,
    coupon,
    handleFetchCart,
    handleAddItemToCart,
    handleSetCouponToCart,
  };
};
