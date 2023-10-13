import { Card, CardContent } from "@mui/material";
import { CartOrder, CartOrderMobile } from "./style";

export const Order: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <CartOrder>Card</CartOrder>
        <CartOrderMobile>CardMobile</CartOrderMobile>
      </CardContent>
    </Card>
  );
};
