import { useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { CartOrder, CartOrderMobile } from "./style";
import { useCart } from "../../hooks/useCart";
import { CartHeader } from "./components";

export const Cart: React.FC = () => {
  const { cart, handleFetchCart } = useCart();

  const hasItems = cart?.items?.length > 0;
  const isCartEmpty = !hasItems;

  useEffect(() => {
    handleFetchCart();
  }, []);
  return (
    <Card>
      <CardContent>
        <CartOrder>
          {hasItems && (
            <>
              <CartHeader items={cart.items} />
            </>
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
