import { toast } from "react-toastify";
import { getCartById, getCarts, newCart, updateCart } from "../api/cart";
import { Cart, CartItem, Products } from "../utils/interfaces";
import { getProductsById } from "../api/products";
import { useDispatch, useSelector } from "react-redux";
import {
  restartCart,
  setCart,
  setCoupon,
  setModal,
} from "../store/cart/actions";
import { RootState } from "../store/store";
import { getCoupon } from "../api/coupon";
import { calcRebatePercentage } from "../utils/functions/utils";
import { updateOrder } from "../api/order";

export const useCart = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state: RootState) => state.cart.coupon);
  const cart: Cart = useSelector((state: RootState) => state.cart.cart);
  const modal = useSelector((state: RootState) => state.cart.modal);
  const cartIsOpen = useSelector((state: RootState) => state.cart.openCart);

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

  const handleSetTotalCart = async (items: CartItem[]): Promise<number> => {
    try {
      let total = 0;
      const promises = items.map(async (cartItem: CartItem) => {
        const product: Products = await (
          await getProductsById(cartItem.productId)
        ).json();

        if (product) {
          total += product.price * cartItem.amount;
        }
      });
      await Promise.all(promises);

      return total;
    } catch (error) {
      toast.error("Erro ao carregar o total!");
      return 0;
    }
  };
  const handleAddItemToCart = async (item: CartItem) => {
    try {
      const cartData: Cart = await (await getCartById(cart.id)).json();

      const existItemInCart = cartData.items.find(
        (i: CartItem) => i.productId === item.productId
      );

      if (existItemInCart) {
        toast.error("Item já está no carrinho!");
        return false;
      }

      cartData.items.push({
        productId: item.productId,
        amount: item.amount,
        product: item.product,
      });

      cartData.totalPrice = await handleSetTotalCart(cartData.items);
      await updateCart(cartData);
      if (coupon.key) handleSetCouponToCart(coupon.key);
      handleFetchCart();
    } catch (error) {}
  };

  const handleSetCouponToCart = async (coupon: string) => {
    try {
      const couponData = (await (await getCoupon(coupon)).json())[0];
      const cartData: Cart = await (await getCartById(cart.id)).json();

      if (!couponData || !couponData.isActive) {
        toast.error("Cupom não existe ou experiou!");
        return false;
      }

      cartData.coupon = couponData.key;
      await updateCart(cartData);
      couponData.rebatePercentage = calcRebatePercentage(
        cartData.totalPrice,
        couponData.rebatePercentage
      );
      dispatch(setCart(cartData));
      dispatch(setCoupon(couponData));
    } catch (error) {
      toast.error("Erro ao adicionar cupom!");
    }
  };

  const handleRemoveOrAddQtdItemToCart = async (item: CartItem) => {
    try {
      const cartData: Cart = await (await getCartById(cart.id)).json();
      const itemIndex = cartData.items.findIndex(
        (i: CartItem) => i.productId === item.productId
      );

      if (item.amount > 0) {
        cartData.items[itemIndex].amount = item.amount;
      } else {
        cartData.items.splice(itemIndex, 1);
      }
      cartData.totalPrice = await handleSetTotalCart(cartData.items);
      await updateCart(cartData);
      if (coupon.key) handleSetCouponToCart(coupon.key);
      handleFetchCart();
    } catch (error) {
      toast.error("Erro ao editar item do carrinho!");
    }
  };

  const handleFinalizeCart = async () => {
    try {
      const cartResponse = await (await getCartById(cart.id)).json();
      await updateCart({ ...cartResponse, opened: false });
      await updateOrder({
        id: Math.floor(Math.random() * 100),
        cartId: cart.id,
        finalized: true,
      });
      dispatch(setModal());
    } catch (error) {
      toast.error("Erro ao finalizar compra.");
    }
  };

  const handleNewCart = async () => {
    try {
      await newCart({
        id: cart.id + 1,
        coupon: false,
        opened: true,
        items: [],
        totalPrice: 0,
      });

      dispatch(restartCart());
      dispatch(setModal());
    } catch (error) {
      toast.error("Erro ao criar novo carrinho de compras!");
    }
  };
  return {
    cart,
    coupon,
    modal,
    cartIsOpen,
    handleNewCart,
    handleFetchCart,
    handleAddItemToCart,
    handleSetCouponToCart,
    handleRemoveOrAddQtdItemToCart,
    handleFinalizeCart,
  };
};
