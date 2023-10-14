import { Typography } from "@mui/material";
import { CartItem as CartItemInterface } from "../../../utils/interfaces";
import { Order } from "./style";
import { CartItem } from "./cartItem";

interface Props {
  items: CartItemInterface[];
}

export const CartHeader: React.FC<Props> = ({ items }) => {
  return (
    <div>
      <Typography fontWeight={"bold"} align="center">
        Resumo do pedido
      </Typography>
      <Order>
        {items &&
          items.map((item: CartItemInterface) => <CartItem item={item} />)}
      </Order>
    </div>
  );
};
