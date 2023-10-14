import { useEffect } from "react";
import { Button, Card, CardContent } from "@mui/material";
import { CartOrder, CartOrderContent, CartOrderMobile } from "./style";
import { useCart } from "../../hooks/useCart";
import { CartHeader, CartSummary, CouponForm } from "./components";

export const Cart: React.FC = () => {
  const { cart, coupon, handleFetchCart, handleSetCouponToCart } = useCart();

  const hasItems = cart?.items?.length > 0;
  const isCartEmpty = !hasItems;

  useEffect(() => {
    handleFetchCart();
  }, []);
  return (
    <Card>
      <CardContent style={{ height: "100%", overflow: "auto" }}>
        <CartOrder>
          {hasItems && (
            <CartOrderContent>
              <CartHeader items={cart.items} />
              <div>
                <CouponForm handleSetCoupon={handleSetCouponToCart} />
                <CartSummary coupon={coupon} totalPrice={1000} />
                <Button
                  variant="contained"
                  fullWidth
                  // onClick={() => dispatch(setModal())}
                >
                  Finalizar Pedido
                </Button>
              </div>
            </CartOrderContent>
          )}
          {isCartEmpty && <div>Vazio</div>}
        </CartOrder>
        <CartOrderMobile>
          {hasItems && <div>items</div>}
          {isCartEmpty && <div>Vazio</div>}
        </CartOrderMobile>
      </CardContent>
    </Card>
  );
};
