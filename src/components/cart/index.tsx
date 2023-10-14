import { Button, Card, CardContent, Typography } from "@mui/material";
import { CartOrder, CartOrderContent, CartOrderMobile } from "./style";
import { useCart } from "../../hooks/useCart";
import { CartHeader, CartSummary, CouponForm, EmptyCart } from "./components";
import { InformationValues } from "./components/style";
import { formatToMoney } from "../../utils/functions/utils";
import { useDispatch } from "react-redux";
import { openCart } from "../../store/cart/actions";

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const {
    cart,
    coupon,
    handleSetCouponToCart,
    handleFinalizeCart,
    cartIsOpen,
  } = useCart();

  const hasItems = cart?.items?.length > 0;
  const isCartEmpty = !hasItems;

  return (
    <Card>
      <CardContent style={{ height: "100%", overflow: "auto" }}>
        <CartOrder>
          {hasItems && (
            <CartOrderContent>
              <CartHeader items={cart.items} />
              <div>
                <CouponForm handleSetCoupon={handleSetCouponToCart} />
                <CartSummary coupon={coupon} totalPrice={cart.totalPrice} />
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleFinalizeCart}
                >
                  Finalizar Pedido
                </Button>
              </div>
            </CartOrderContent>
          )}
          {isCartEmpty && <EmptyCart />}
        </CartOrder>
        <CartOrderMobile>
          {hasItems && (
            <div>
              {cartIsOpen ? (
                <CartOrderContent>
                  <CartHeader items={cart.items} />
                  <div>
                    <CouponForm handleSetCoupon={handleSetCouponToCart} />
                    <CartSummary coupon={coupon} totalPrice={cart.totalPrice} />
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ margin: "20px 0px" }}
                      onClick={handleFinalizeCart}
                    >
                      Finalizar Pedido
                    </Button>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => dispatch(openCart())}
                    >
                      Continuar comprando
                    </Button>
                  </div>
                </CartOrderContent>
              ) : (
                <>
                  <InformationValues>
                    <Typography fontWeight={"bold"}>Total</Typography>
                    <Typography
                      align="right"
                      fontWeight={"bold"}
                      fontSize={"24px"}
                    >
                      {cart.totalPrice && formatToMoney(cart.totalPrice)}
                    </Typography>
                  </InformationValues>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => dispatch(openCart())}
                  >
                    Abrir carrinho
                  </Button>
                </>
              )}
            </div>
          )}
          {isCartEmpty && <Typography>Carrinho vazio</Typography>}
        </CartOrderMobile>
      </CardContent>
    </Card>
  );
};
