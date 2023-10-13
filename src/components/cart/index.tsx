import { useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { CartOrder, CartOrderMobile } from "./style";
import { useCart } from "../../hooks/useCart";

export const Cart: React.FC = () => {
  const { handleFetchCart } = useCart();

  useEffect(() => {
    handleFetchCart();
  }, []);
  return (
    <Card>
      <CardContent>
        <CartOrder>Card</CartOrder>
        <CartOrderMobile>CardMobile</CartOrderMobile>
      </CardContent>
    </Card>
  );
};
