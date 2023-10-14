import { Typography } from "@mui/material";
import { CartItem as CartItemInterface } from "../../../utils/interfaces";
import { Order } from "./style";
import { CartItem } from "./CartItem";

interface Props {
  items: CartItemInterface[];
}

export const CartHeader: React.FC<Props> = ({ items }) => {
  return (
    <>
      <Typography fontWeight={"bold"} align="center">
        Resumo do pedido
      </Typography>
      <Order>
        {items &&
          items.map((item: CartItemInterface) => <CartItem item={item} />)}
      </Order>
    </>
  );
};
